import React from 'react';
import { Hotel, Users, Calendar, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { format } from 'date-fns';

export default function Dashboard() {
  const { hotels, bookings } = useApp();

  const confirmedBookings = bookings.filter(b => b.status === 'confirmed');
  const cancelledBookings = bookings.filter(b => b.status === 'cancelled');
  const totalRevenue = confirmedBookings.reduce((acc, b) => acc + b.totalPrice, 0);

  const stats = [
    {
      title: 'Total Hotels',
      value: hotels.length,
      icon: Hotel,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Bookings',
      value: confirmedBookings.length,
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-yellow-500'
    },
    {
      title: 'Cancelled Bookings',
      value: cancelledBookings.length,
      icon: TrendingDown,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Hotel</th>
                  <th className="text-left py-2">Guest</th>
                  <th className="text-left py-2">Check-in</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.slice(0, 5).map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="py-2">{hotels.find(h => h.id === booking.hotelId)?.name}</td>
                    <td className="py-2">{booking.userId}</td>
                    <td className="py-2">{format(new Date(booking.checkIn), 'MMM dd, yyyy')}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-2">${booking.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Top Performing Hotels</h2>
          <div className="space-y-4">
            {hotels
              .map(hotel => ({
                ...hotel,
                bookings: bookings.filter(b => b.hotelId === hotel.id && b.status === 'confirmed').length,
                revenue: bookings
                  .filter(b => b.hotelId === hotel.id && b.status === 'confirmed')
                  .reduce((sum, b) => sum + b.totalPrice, 0)
              }))
              .sort((a, b) => b.revenue - a.revenue)
              .slice(0, 5)
              .map((hotel) => (
                <div key={hotel.id} className="flex items-center space-x-4">
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{hotel.name}</h3>
                    <p className="text-sm text-gray-600">{hotel.bookings} bookings</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${hotel.revenue}</p>
                    <div className="flex items-center text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>Revenue</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}