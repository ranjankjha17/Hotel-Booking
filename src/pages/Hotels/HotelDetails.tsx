import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import { Star, MapPin, Users, Calendar, ArrowLeft } from 'lucide-react';
import BookingForm from '../../components/BookingForm';
import HotelAmenities from '../../components/hotels/HotelAmenities';
import HotelGallery from '../../components/hotels/HotelGallery';
import HotelReviews from '../../components/hotels/HotelReviews';
import Button from '../../components/ui/Button';

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hotels } = useApp();
  const hotel = hotels.find((h) => h.id === id);
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'reviews'>('overview');

  if (!hotel) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Hotel Not Found</h2>
          <p className="text-gray-600 mb-8">The hotel you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/hotels')} className="inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hotels
          </Button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' }
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <HotelGallery images={hotel.images} name={hotel.name} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{hotel.name}</h1>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hotel.location}
                    </p>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-semibold">{hotel.rating}</span>
                  </div>
                </div>

                <div className="border-b mb-6">
                  <nav className="flex space-x-8">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 border-b-2 font-medium ${
                          activeTab === tab.id
                            ? 'border-red-600 text-red-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {activeTab === 'overview' && (
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">{hotel.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span>Free cancellation available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span>Up to {hotel.rooms * 2} guests</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && <HotelAmenities amenities={hotel.amenities} />}
                
                {activeTab === 'reviews' && <HotelReviews hotelId={hotel.id} />}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold">${hotel.price}</p>
                    <p className="text-gray-500">per night</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {hotel.rooms} rooms available
                    </p>
                  </div>
                </div>
                <BookingForm hotel={hotel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}