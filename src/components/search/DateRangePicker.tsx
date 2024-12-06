import React from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface DateRangePickerProps {
  checkIn: string;
  checkOut: string;
  onCheckInChange: (date: string) => void;
  onCheckOutChange: (date: string) => void;
  className?: string;
}

export default function DateRangePicker({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  className = ''
}: DateRangePickerProps) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Check-in
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => onCheckInChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Check-out
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => onCheckOutChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}