import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import type { Hotel } from '../types';
import { searchHotels } from '../utils/search';

export function useSearch() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { hotels } = useApp();

  const query = searchParams.get('search') || '';
  const filters = {
    minPrice: Number(searchParams.get('minPrice')) || 0,
    maxPrice: Number(searchParams.get('maxPrice')) || Infinity,
    rating: Number(searchParams.get('rating')) || 0,
    checkIn: searchParams.get('checkIn') || undefined,
    checkOut: searchParams.get('checkOut') || undefined,
    guests: Number(searchParams.get('guests')) || undefined,
  };

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const searchResults = await searchHotels(query, filters, hotels);
        setResults(searchResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query, filters.minPrice, filters.maxPrice, filters.rating, filters.checkIn, filters.checkOut, filters.guests, hotels]);

  return { results, isLoading, error };
}