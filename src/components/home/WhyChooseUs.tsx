import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../data/features';

export default function WhyChooseUs() {
  const [expandedFeatureId, setExpandedFeatureId] = useState<string | null>(null);

  const handleFeatureClick = (featureId: string) => {
    setExpandedFeatureId(expandedFeatureId === featureId ? null : featureId);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best in hotel bookings with our premium features and services designed to make your stay memorable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              expanded={expandedFeatureId === feature.id}
              onClick={() => handleFeatureClick(feature.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}