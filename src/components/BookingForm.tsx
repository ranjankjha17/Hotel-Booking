import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { calculateTotalPrice } from '../utils/booking';
import { useAuth } from '../hooks/useAuth';
import { useApp } from '../contexts/AppContext';
import type { Hotel } from '../types';

interface BookingFormProps {
  hotel: Hotel;
}

export default function BookingForm({ hotel }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { addBooking } = useApp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      navigate('/login', { 
        state: { 
          from: `/hotels/${hotel.id}`,
          booking: { checkIn, checkOut, guests }
        } 
      });
      return;
    }

    setLoading(true);
    try {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const totalPrice = calculateTotalPrice(hotel.price, checkInDate, checkOutDate);

      const newBooking = {
        id: Math.random().toString(36).substr(2, 9),
        hotelId: hotel.id,
        userId: currentUser.id,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests,
        totalPrice,
        status: 'confirmed' as const
      };

      addBooking(newBooking);
      navigate('/dashboard');
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Check-in / Check-out
        </label>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2 border rounded-lg p-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
              className="flex-grow focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2 border rounded-lg p-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split('T')[0]}
              required
              className="flex-grow focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Guests
        </label>
        <div className="flex items-center space-x-2 border rounded-lg p-2">
          <Users className="w-5 h-5 text-gray-400" />
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="flex-grow focus:outline-none"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} Guest{num !== 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {checkIn && checkOut && (
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>Price per night</span>
            <span>${hotel.price}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>
              ${calculateTotalPrice(
                hotel.price,
                new Date(checkIn),
                new Date(checkOut)
              )}
            </span>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Book Now'}
      </button>
    </form>
  );
}