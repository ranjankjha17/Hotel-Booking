import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface HotelGalleryProps {
  images: string[];
  name: string;
}

export default function HotelGallery({ images, name }: HotelGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
          <div className="md:col-span-2">
            <img
              src={images[0]}
              alt={`${name} - Main`}
              className="w-full h-[400px] object-cover rounded-lg cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
          </div>
          {images.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} - ${index + 2}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer"
              onClick={() => {
                setCurrentImage(index + 1);
                setShowLightbox(true);
              }}
            />
          ))}
        </div>
      </div>

      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={previousImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={images[currentImage]}
            alt={`${name} - ${currentImage + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}