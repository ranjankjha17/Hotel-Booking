import React from 'react';
import { format } from 'date-fns';
import { Calendar, Users } from 'lucide-react';
import Button from '../ui/Button';
import type { Booking, Hotel } from '../../types';

interface UserBookingsProps {
  bookings: (Booking & { hotel: Hotel })[];
  onCancel: (bookingId: string) => Promise<void>;
}

export default function UserBookings({ bookings, onCancel }: UserBookingsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="bg-white rounded-lg shadow-sm p-4 space-y-4"
        >
          <div className="flex items-start justify-between">
            <div className="flex space-x-4">
              <img
                src={booking.hotel.images[0]}
                alt={booking.hotel.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">{booking.hotel.name}</h3>
                <p className="text-sm text-gray-600">{booking.hotel.location}</p>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(
                    booking.status
                  )}`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
            <p className="font-semibold">${booking.totalPrice}</p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>
                {format(new Date(booking.checkIn), 'MMM d, yyyy')} -{' '}
                {format(new Date(booking.checkOut), 'MMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{booking.guests} Guests</span>
            </div>
          </div>

          {booking.status !== 'cancelled' && (
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCancel(booking.id)}
              >
                Cancel Booking
              </Button>
            </div>
          )}
        </div>
      ))}

      {bookings.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No bookings found.
        </div>
      )}
    </div>
  );
}