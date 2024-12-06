import { useApp } from '../contexts/AppContext';

// This file now serves as a compatibility layer for existing code
// that may still be using the store pattern
export const useStore = () => {
  const {
    hotels,
    bookings,
    currentUser,
    setHotels,
    setBookings,
    setCurrentUser,
    addBooking,
    updateBooking
  } = useApp();

  return {
    hotels,
    bookings,
    currentUser,
    setHotels,
    setBookings,
    setCurrentUser,
    addBooking,
    updateBooking
  };
};