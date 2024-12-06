import { useApp } from '../contexts/AppContext';
import { searchHotels } from '../utils/search';
import type { SearchFilters } from '../types';

export function useHotels() {
  const { hotels, dispatch } = useApp();

  const search = async (query: string, filters: SearchFilters) => {
    const results = await searchHotels(query, filters);
    dispatch({ type: 'SET_HOTELS', payload: results });
    return results;
  };

  return {
    hotels,
    search
  };
}