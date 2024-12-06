import React from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
  onLike: (reviewId: string) => void;
  onReport: (reviewId: string) => void;
}

export default function ReviewCard({ review, onLike, onReport }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <img
              src={review.user.avatar || `https://ui-avatars.com/api/?name=${review.user.name}`}
              alt={review.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{review.user.name}</p>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-gray-700">{review.comment}</p>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => onLike(review.id)}
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
        >
          <ThumbsUp className="w-4 h-4" />
          <span className="text-sm">{review.likes} Helpful</span>
        </button>
        <button
          onClick={() => onReport(review.id)}
          className="flex items-center space-x-1 text-gray-500 hover:text-red-600"
        >
          <Flag className="w-4 h-4" />
          <span className="text-sm">Report</span>
        </button>
      </div>
    </div>
  );
}