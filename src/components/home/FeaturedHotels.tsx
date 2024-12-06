import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, TrendingUp } from 'lucide-react';
import type { Hotel } from '../../types';

interface FeaturedHotelsProps {
  hotels: Hotel[];
}

export default function FeaturedHotels({ hotels }: FeaturedHotelsProps) {
  const featuredHotels = hotels
    .filter(hotel => hotel.rating >= 4.5)
    .slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Hotels</h2>
          <Link to="/hotels" className="text-red-600 hover:text-red-700 flex items-center">
            View all <TrendingUp className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHotels.map((hotel) => (
            <Link
              key={hotel.id}
              to={`/hotels/${hotel.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {hotel.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{hotel.name}</h3>
                <p className="text-gray-600 text-sm mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hotel.location}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">${hotel.price}</p>
                  <p className="text-sm text-gray-500">per night</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}