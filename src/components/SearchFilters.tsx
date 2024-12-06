import React from 'react';
import { Sliders, Star } from 'lucide-react';

interface SearchFiltersProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  rating: number;
  setRating: (rating: number) => void;
}

export default function SearchFilters({
  priceRange,
  setPriceRange,
  rating,
  setRating,
}: SearchFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <Sliders className="w-5 h-5 text-gray-500" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range (per night)
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-24 px-2 py-1 border rounded"
              min={0}
            />
            <span>to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-24 px-2 py-1 border rounded"
              min={priceRange[0]}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                className={`flex items-center space-x-1 px-2 py-1 rounded ${
                  rating === value
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Star
                  className={`w-4 h-4 ${
                    rating === value ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                />
                <span>{value}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}