export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  details?: {
    terms?: string[];
    conditions?: string[];
  };
}

export const features: Feature[] = [
  {
    id: 'price-guarantee',
    title: 'Best Price Guarantee',
    description: `Find a lower price? We'll match it and give you an additional 10% off.`,
    icon: '💰',
    benefits: [
      'Price matching with any competitor',
      'Additional 10% discount on price difference',
      'Valid for identical booking conditions',
      'Claim within 24 hours of booking'
    ],
    details: {
      terms: [
        'Must be same hotel, room type, and dates',
        'Competitor price must be publicly available',
        'Valid for immediate booking'
      ],
      conditions: [
        'Claims must include proof of lower price',
        'Not valid with special promotions',
        'Limited to one claim per booking'
      ]
    }
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Our customer service team is here to help you anytime, anywhere.',
    icon: '🌟',
    benefits: [
      'Round-the-clock assistance',
      'Multilingual support team',
      'Instant chat support',
      'Emergency booking help'
    ],
    details: {
      terms: [
        'Available via chat, email, and phone',
        'Priority support for current bookings',
        'Dedicated concierge service'
      ]
    }
  },
  {
    id: 'cancellation',
    title: 'Free Cancellation',
    description: 'Plans change? No problem. Cancel up to 24 hours before check-in.',
    icon: '✨',
    benefits: [
      'Full refund for eligible cancellations',
      'No questions asked policy',
      'Flexible booking modifications',
      'Instant confirmation'
    ],
    details: {
      conditions: [
        'Minimum 24 hours notice required',
        'Subject to hotel policy',
        'Refund processed within 5-7 business days'
      ]
    }
  }
];

export const getFeatureById = (id: string): Feature | undefined => {
  return features.find(feature => feature.id === id);
};

export const getFeaturesByIds = (ids: string[]): Feature[] => {
  return features.filter(feature => ids.includes(feature.id));
};