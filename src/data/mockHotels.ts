import type { Hotel } from '../types';

export const mockHotels: Hotel[] = [
  {
    id: '1',
    name: 'Luxury Hotel & Spa',
    description: 'Experience luxury at its finest with our world-class amenities and service.',
    price: 299,
    rating: 4.8,
    location: 'New York City, NY',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?auto=format&fit=crop&q=80'
    ],
    amenities: ['wifi', 'parking', 'breakfast', 'bathroom', 'tv', 'restaurant'],
    rooms: 150,
    availableDates: [
      { startDate: '2024-01-01', endDate: '2024-12-31' }
    ]
  },
  {
    id: '2',
    name: 'Seaside Resort',
    description: 'Beachfront paradise with stunning ocean views and private beach access.',
    price: 399,
    rating: 4.9,
    location: 'Miami Beach, FL',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562790351-d273a961e0e9?auto=format&fit=crop&q=80'
    ],
    amenities: ['wifi', 'parking', 'breakfast', 'bathroom', 'pool', 'gym', 'restaurant'],
    rooms: 200,
    availableDates: [
      { startDate: '2024-01-01', endDate: '2024-12-31' }
    ]
  },
  {
    id: '3',
    name: 'Mountain Lodge',
    description: 'Cozy retreat nestled in the mountains with breathtaking views.',
    price: 249,
    rating: 4.7,
    location: 'Aspen, CO',
    images: [
      'https://images.unsplash.com/photo-1518602164578-cd0074062767?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80'
    ],
    amenities: ['wifi', 'parking', 'breakfast', 'bathroom', 'tv', 'gym'],
    rooms: 75,
    availableDates: [
      { startDate: '2024-01-01', endDate: '2024-12-31' }
    ]
  },
  {
    id: '4',
    name: 'Urban Boutique Hotel',
    description: 'Modern luxury in the heart of the city with stunning skyline views.',
    price: 329,
    rating: 4.6,
    location: 'San Francisco, CA',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
    ],
    amenities: ['wifi', 'parking', 'breakfast', 'bathroom', 'tv', 'gym', 'restaurant'],
    rooms: 100,
    availableDates: [
      { startDate: '2024-01-01', endDate: '2024-12-31' }
    ]
  }
];