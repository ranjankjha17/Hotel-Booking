import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/search/SearchBar';
import SearchResults from '../../components/search/SearchResults';
import SearchFilters from '../../components/SearchFilters';
import { useSearch } from '../../hooks/useSearch';

export default function HotelList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { results, isLoading } = useSearch();
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    Number(searchParams.get('minPrice')) || 0,
    Number(searchParams.get('maxPrice')) || 1000
  ]);
  const [rating, setRating] = React.useState(Number(searchParams.get('rating')) || 0);

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleFilterChange = (minPrice: number, maxPrice: number, rating: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('minPrice', minPrice.toString());
    params.set('maxPrice', maxPrice.toString());
    params.set('rating', rating.toString());
    setSearchParams(params);
  };

  React.useEffect(() => {
    handleFilterChange(priceRange[0], priceRange[1], rating);
  }, [priceRange, rating]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Your Perfect Hotel</h1>
        <SearchBar
          onSearch={handleSearch}
          initialValue={searchParams.get('search') || ''}
          className="max-w-2xl"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <SearchFilters
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            rating={rating}
            setRating={setRating}
          />
        </div>
        
        <div className="lg:col-span-3">
          <SearchResults results={results} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}