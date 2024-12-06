export type ActionType = 
  | { type: 'SET_HOTELS'; payload: Hotel[] }
  | { type: 'SET_BOOKINGS'; payload: Booking[] }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'CANCEL_BOOKING'; payload: string }
  | { type: 'UPDATE_USER'; payload: Partial<User> };

export interface State {
  hotels: Hotel[];
  bookings: Booking[];
  currentUser: User | null;
}

export interface ContextValue extends State {
  dispatch: React.Dispatch<ActionType>;
}