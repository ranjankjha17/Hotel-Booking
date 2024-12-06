import React from 'react';
import { Hotel } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Hotel as HotelType } from '../../types';

interface SearchResultsProps {
  results: HotelType[];
  isLoading: boolean;
}

export default function SearchResults({ results, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <Hotel className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((hotel) => (
        <Link
          key={hotel.id}
          to={`/hotels/${hotel.id}`}
          className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex p-4">
            <img
              src={hotel.images[0]}
              alt={hotel.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{hotel.name}</h3>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                </div>
                <p className="text-lg font-semibold">${hotel.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {hotel.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}