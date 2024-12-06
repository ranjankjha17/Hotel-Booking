import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { mockHotels } from '../data/mockHotels';
import type { Hotel, Booking, User } from '../types';

interface State {
  hotels: Hotel[];
  bookings: Booking[];
  currentUser: User | null;
}

type Action = 
  | { type: 'SET_HOTELS'; payload: Hotel[] }
  | { type: 'SET_BOOKINGS'; payload: Booking[] }
  | { type: 'SET_CURRENT_USER'; payload: User | null }
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'UPDATE_BOOKING'; payload: { bookingId: string; status: Booking['status'] } };

interface ContextValue extends State {
  setHotels: (hotels: Hotel[]) => void;
  setBookings: (bookings: Booking[]) => void;
  setCurrentUser: (user: User | null) => void;
  addBooking: (booking: Booking) => void;
  updateBooking: (bookingId: string, status: Booking['status']) => void;
}

const initialState: State = {
  hotels: mockHotels,
  bookings: [],
  currentUser: null
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_HOTELS':
      return { ...state, hotels: action.payload };
    case 'SET_BOOKINGS':
      return { ...state, bookings: action.payload };
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };
    case 'ADD_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'UPDATE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.map(booking =>
          booking.id === action.payload.bookingId
            ? { ...booking, status: action.payload.status }
            : booking
        )
      };
    default:
      return state;
  }
}

const AppContext = createContext<ContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load saved data from localStorage
  useEffect(() => {
    const savedBookings = localStorage.getItem('bookings');
    const savedUser = localStorage.getItem('currentUser');
    
    if (savedBookings) {
      dispatch({ type: 'SET_BOOKINGS', payload: JSON.parse(savedBookings) });
    }
    if (savedUser) {
      dispatch({ type: 'SET_CURRENT_USER', payload: JSON.parse(savedUser) });
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(state.bookings));
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
  }, [state.bookings, state.currentUser]);

  const value: ContextValue = {
    ...state,
    setHotels: (hotels) => dispatch({ type: 'SET_HOTELS', payload: hotels }),
    setBookings: (bookings) => dispatch({ type: 'SET_BOOKINGS', payload: bookings }),
    setCurrentUser: (user) => dispatch({ type: 'SET_CURRENT_USER', payload: user }),
    addBooking: (booking) => dispatch({ type: 'ADD_BOOKING', payload: booking }),
    updateBooking: (bookingId, status) => 
      dispatch({ type: 'UPDATE_BOOKING', payload: { bookingId, status } })
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}