import React, { useState } from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';
import ReviewCard from '../reviews/ReviewCard';
import ReviewForm from '../reviews/ReviewForm';
import Button from '../ui/Button';
import { useStore } from '../../store/useStore';
import type { CreateReviewInput } from '../../types';

interface HotelReviewsProps {
  hotelId: string;
}

export default function HotelReviews({ hotelId }: HotelReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const currentUser = useStore((state) => state.currentUser);

  const mockReviews = [
    {
      id: '1',
      hotelId,
      user: {
        id: '1',
        name: 'John Doe',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe'
      },
      rating: 5,
      comment: 'Amazing hotel with great amenities and friendly staff!',
      likes: 12,
      createdAt: '2024-02-15T10:00:00Z'
    },
    {
      id: '2',
      hotelId,
      user: {
        id: '2',
        name: 'Jane Smith',
        avatar: 'https://ui-avatars.com/api/?name=Jane+Smith'
      },
      rating: 4,
      comment: 'Very comfortable stay. The breakfast was delicious!',
      likes: 8,
      createdAt: '2024-02-10T15:30:00Z'
    }
  ];

  const handleSubmitReview = async (review: CreateReviewInput) => {
    // Handle review submission
    console.log('Submitting review:', review);
    setShowReviewForm(false);
  };

  const handleLikeReview = (reviewId: string) => {
    // Handle like functionality
    console.log('Liking review:', reviewId);
  };

  const handleReportReview = (reviewId: string) => {
    // Handle report functionality
    console.log('Reporting review:', reviewId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Guest Reviews</h3>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              Based on {mockReviews.length} reviews
            </span>
          </div>
        </div>
        {currentUser && !showReviewForm && (
          <Button onClick={() => setShowReviewForm(true)}>Write a Review</Button>
        )}
      </div>

      {showReviewForm && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold mb-4">Write Your Review</h4>
          <ReviewForm onSubmit={handleSubmitReview} />
        </div>
      )}

      <div className="space-y-4">
        {mockReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onLike={handleLikeReview}
            onReport={handleReportReview}
          />
        ))}
      </div>
    </div>
  );
}