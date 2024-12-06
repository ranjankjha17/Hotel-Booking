import React from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import { popularDestinations } from '../../data/destinations';

export default function PopularDestinations() {
  const navigate = useNavigate();
  
  const handleDestinationClick = (city: string) => {
    navigate(`/hotels?search=${encodeURIComponent(city)}`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <DestinationCard
              key={destination.city}
              destination={destination}
              onClick={handleDestinationClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}