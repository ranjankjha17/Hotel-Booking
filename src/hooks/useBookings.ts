import { useApp } from '../contexts/AppContext';
import { createBooking as createBookingApi } from '../utils/booking';
import type { Hotel } from '../types';

export function useBookings() {
  const { bookings, dispatch } = useApp();

  const createBooking = async (
    hotel: Hotel,
    checkIn: Date,
    checkOut: Date,
    guests: number,
    price: number
  ) => {
    const booking = await createBookingApi(
      hotel.id,
      'user-id', // This should come from auth context
      checkIn,
      checkOut,
      guests,
      price
    );
    dispatch({ type: 'ADD_BOOKING', payload: booking });
    return booking;
  };

  const cancelBooking = async (bookingId: string) => {
    dispatch({ type: 'CANCEL_BOOKING', payload: bookingId });
  };

  return {
    bookings,
    createBooking,
    cancelBooking
  };
}