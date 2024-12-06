import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { useApp } from '../../contexts/AppContext';
import UserBookings from '../../components/profile/UserBookings';

export default function UserDashboard() {
  const { bookings, hotels, currentUser, updateBooking } = useApp();
  const userBookings = bookings.filter(booking => booking.userId === currentUser?.id);

  const getHotelDetails = (hotelId: string) => {
    return hotels.find(hotel => hotel.id === hotelId);
  };

  const handleCancelBooking = async (bookingId: string) => {
    const confirmed = window.confirm('Are you sure you want to cancel this booking?');
    if (confirmed) {
      try {
        updateBooking(bookingId, 'cancelled');
      } catch (error) {
        console.error('Error cancelling booking:', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {currentUser?.name}!</h1>
        <p className="text-gray-600">Manage your bookings and account details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-2">Total Bookings</h3>
          <p className="text-2xl font-bold">{userBookings.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-2">Active Bookings</h3>
          <p className="text-2xl font-bold">
            {userBookings.filter(b => b.status === 'confirmed').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-2">Cancelled</h3>
          <p className="text-2xl font-bold">
            {userBookings.filter(b => b.status === 'cancelled').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-2">Total Spent</h3>
          <p className="text-2xl font-bold">
            ${userBookings.reduce((sum, b) => sum + b.totalPrice, 0).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Your Bookings</h2>
        <UserBookings
          bookings={userBookings.map(booking => ({
            ...booking,
            hotel: getHotelDetails(booking.hotelId)!
          }))}
          onCancel={handleCancelBooking}
        />
      </div>
    </div>
  );
}