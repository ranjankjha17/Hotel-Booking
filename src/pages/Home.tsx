import React from 'react';
import { useApp } from '../contexts/AppContext';
import HeroSection from '../components/home/HeroSection';
import FeaturedHotels from '../components/home/FeaturedHotels';
import PopularDestinations from '../components/home/PopularDestinations';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  const { hotels } = useApp();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedHotels hotels={hotels} />
      <PopularDestinations />
      <WhyChooseUs />
    </div>
  );
}