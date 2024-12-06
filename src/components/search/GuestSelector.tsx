import React from 'react';
import { Users } from 'lucide-react';

interface GuestSelectorProps {
  guests: number;
  onGuestsChange: (guests: number) => void;
  className?: string;
}

export default function GuestSelector({
  guests,
  onGuestsChange,
  className = ''
}: GuestSelectorProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Guests
      </label>
      <div className="relative">
        <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <select
          value={guests}
          onChange={(e) => onGuestsChange(Number(e.target.value))}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}