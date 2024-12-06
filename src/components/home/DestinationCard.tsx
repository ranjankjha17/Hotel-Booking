import React from 'react';
import type { Destination } from '../../data/destinations';

interface DestinationCardProps {
  destination: Destination;
  onClick: (city: string) => void;
}

export default function DestinationCard({ destination, onClick }: DestinationCardProps) {
  return (
    <div
      onClick={() => onClick(destination.city)}
      className="relative rounded-lg overflow-hidden group cursor-pointer"
    >
      <img
        src={destination.image}
        alt={destination.city}
        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold">{destination.city}</h3>
        <p className="text-gray-200 mb-2">{destination.country}</p>
        <div className="flex items-center text-white">
          <span className="text-sm">{destination.hotels} hotels</span>
          {destination.featured && (
            <span className="ml-2 px-2 py-0.5 bg-red-600 rounded-full text-xs">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
}