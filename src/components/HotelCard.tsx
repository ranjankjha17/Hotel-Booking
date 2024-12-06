import React from 'react';
import { Star, Wifi, Car, Coffee, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Hotel } from '../types';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const amenityIcons = {
    wifi: Wifi,
    parking: Car,
    breakfast: Coffee,
    bathroom: Bath,
  };

  return (
    <Link to={`/hotels/${hotel.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
          <h3 className="text-lg font-semibold mb-2">{hotel.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{hotel.location}</p>
          <div className="flex items-center space-x-2 mb-3">
            {hotel.amenities.slice(0, 4).map((amenity) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
              return Icon ? (
                <Icon key={amenity} className="w-4 h-4 text-gray-500" />
              ) : null;
            })}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">${hotel.price}</p>
            <p className="text-sm text-gray-500">per night</p>
          </div>
        </div>
      </div>
    </Link>
  );
}