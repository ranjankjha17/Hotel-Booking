import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Feature } from '../../data/features';

interface FeatureCardProps {
  feature: Feature;
  expanded?: boolean;
  onClick?: () => void;
}

export default function FeatureCard({ 
  feature, 
  expanded = false,
  onClick 
}: FeatureCardProps) {
  return (
    <div 
      className={`bg-white rounded-lg p-6 transition-all duration-300 ${
        expanded ? 'shadow-lg' : 'shadow-md hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>

      {expanded && (
        <div className="mt-6 space-y-4">
          {feature.benefits.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Benefits</h4>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-red-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {feature.details && (
            <div className="space-y-4">
              {feature.details.terms && (
                <div>
                  <h4 className="font-semibold mb-2">Terms</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {feature.details.terms.map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                </div>
              )}

              {feature.details.conditions && (
                <div>
                  <h4 className="font-semibold mb-2">Conditions</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {feature.details.conditions.map((condition, index) => (
                      <li key={index}>{condition}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}