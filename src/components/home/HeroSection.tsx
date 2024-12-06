import React from 'react';
import SearchBar from '../search/SearchBar';

export default function HeroSection() {
  const handleSearch = (query: string) => {
    // Search functionality is handled by the SearchBar component
  };

  return (
    <div 
      className="relative h-[600px] bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover amazing places at exclusive deals
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}