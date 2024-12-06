export interface Hotel {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  amenities: string[];
  location: string;
  rooms: number;
  availableDates?: {
    startDate: string;
    endDate: string;
  }[];
}

export interface Booking {
  id: string;
  hotelId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  phone?: string;
  avatar?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  hotelId: string;
  user: User;
  rating: number;
  comment: string;
  likes: number;
  createdAt: string;
}

export interface CreateReviewInput {
  rating: number;
  comment: string;
}

export interface SearchFilters {
  minPrice: number;
  maxPrice: number;
  rating: number;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}