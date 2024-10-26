import { useState, useEffect } from 'react';

export function useImageRotation(images: string[], interval: number = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, images.length]);

  return {
    currentImage: images[currentIndex],
    isTransitioning
  };
}