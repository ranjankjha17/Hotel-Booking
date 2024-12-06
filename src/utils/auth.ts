import { User } from '../types';

export async function loginUser(email: string, password: string): Promise<User> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'Ranjan',
        email: email,
        role: email.includes('admin') ? 'admin' : 'user'
      });
    }, 1000);
  });
}

export async function registerUser(name: string, email: string, password: string): Promise<User> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role: 'user'
      });
    }, 1000);
  });
}

export function logout(): void {
  // Clear user session
}