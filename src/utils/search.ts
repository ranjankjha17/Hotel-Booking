import type { Hotel, SearchFilters } from '../types';
import { isWithinInterval, parseISO } from 'date-fns';

export async function searchHotels(query: string, filters: SearchFilters, hotels: Hotel[]): Promise<Hotel[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = hotels
        .filter(hotel => {
          const matchesPrice = hotel.price >= filters.minPrice && 
                             hotel.price <= (filters.maxPrice || Infinity);
          const matchesRating = hotel.rating >= (filters.rating || 0);
          
          let matchesDates = true;
          if (filters.checkIn && filters.checkOut) {
            matchesDates = hotel.availableDates?.some(availability => 
              isWithinInterval(parseISO(filters.checkIn!), {
                start: parseISO(availability.startDate),
                end: parseISO(availability.endDate)
              }) &&
              isWithinInterval(parseISO(filters.checkOut!), {
                start: parseISO(availability.startDate),
                end: parseISO(availability.endDate)
              })
            ) || false;
          }

          let matchesGuests = true;
          if (filters.guests) {
            matchesGuests = (hotel.rooms * 2) >= filters.guests;
          }

          let matchesSearch = true;
          if (query) {
            const searchTerm = query.toLowerCase();
            matchesSearch = hotel.name.toLowerCase().includes(searchTerm) ||
                          hotel.location.toLowerCase().includes(searchTerm) ||
                          hotel.description.toLowerCase().includes(searchTerm);
          }

          return matchesPrice && matchesRating && matchesDates && matchesGuests && matchesSearch;
        });

      resolve(filtered);
    }, 500);
  });
}