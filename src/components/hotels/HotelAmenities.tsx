import React from 'react';
import { 
  Wifi, 
  Car, 
  Coffee, 
  Bath, 
  Tv, 
  Dumbbell, 
  UtensilsCrossed,
  Waves
} from 'lucide-react';

interface HotelAmenitiesProps {
  amenities: string[];
}

const amenityConfig = {
  wifi: {
    icon: Wifi,
    label: 'Free WiFi'
  },
  parking: {
    icon: Car,
    label: 'Free Parking'
  },
  breakfast: {
    icon: Coffee,
    label: 'Breakfast Included'
  },
  bathroom: {
    icon: Bath,
    label: 'Private Bathroom'
  },
  tv: {
    icon: Tv,
    label: 'Flat-screen TV'
  },
  pool: {
    icon: Waves,
    label: 'Swimming Pool'
  },
  gym: {
    icon: Dumbbell,
    label: 'Fitness Center'
  },
  restaurant: {
    icon: UtensilsCrossed,
    label: 'Restaurant'
  }
} as const;

export default function HotelAmenities({ amenities }: HotelAmenitiesProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {amenities.map((amenity) => {
        const config = amenityConfig[amenity as keyof typeof amenityConfig];
        if (!config) return null;

        const { icon: Icon, label } = config;

        return (
          <div key={amenity} className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Icon className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-gray-700">{label}</span>
          </div>
        );
      })}
    </div>
  );
}