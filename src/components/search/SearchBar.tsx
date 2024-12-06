import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import DateRangePicker from './DateRangePicker';
import GuestSelector from './GuestSelector';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
  className?: string;
  compact?: boolean;
}

export default function SearchBar({
  onSearch,
  initialValue = '',
  className = '',
  compact = false
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    if (guests > 1) params.set('guests', guests.toString());
    
    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search hotels, locations..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {!compact && (
        <>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <DateRangePicker
                checkIn={checkIn}
                checkOut={checkOut}
                onCheckInChange={setCheckIn}
                onCheckOutChange={setCheckOut}
              />
            </div>
            <GuestSelector
              guests={guests}
              onGuestsChange={setGuests}
            />
          </div>
 */}
          <Button type="submit" className="w-full">
            Search Hotels
          </Button>
        </>
      )}
    </form>
  );
}