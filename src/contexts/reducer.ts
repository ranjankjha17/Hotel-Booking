import { State, ActionType } from './types';

export const initialState: State = {
  hotels: [],
  bookings: [],
  currentUser: null
};

export function reducer(state: State, action: ActionType): State {
  switch (action.type) {
    case 'SET_HOTELS':
      return { ...state, hotels: action.payload };
    
    case 'SET_BOOKINGS':
      return { ...state, bookings: action.payload };
    
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, action.payload]
      };
    
    case 'CANCEL_BOOKING':
      return {
        ...state,
        bookings: state.bookings.map(booking =>
          booking.id === action.payload
            ? { ...booking, status: 'cancelled' }
            : booking
        )
      };
    
    case 'UPDATE_USER':
      return {
        ...state,
        currentUser: state.currentUser
          ? { ...state.currentUser, ...action.payload }
          : null
      };
    
    default:
      return state;
  }
}