import { Booking } from '../types';
import { format } from 'date-fns';

export async function createBooking(
  hotelId: string,
  userId: string,
  checkIn: Date,
  checkOut: Date,
  guests: number,
  price: number
): Promise<Booking> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        hotelId,
        userId,
        checkIn,
        checkOut,
        guests,
        totalPrice: price,
        status: 'pending'
      });
    }, 1000);
  });
}

export function calculateTotalPrice(pricePerNight: number, checkIn: Date, checkOut: Date): number {
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  return pricePerNight * nights;
}