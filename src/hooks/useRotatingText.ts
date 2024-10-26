import { useState, useEffect } from 'react';

export function useRotatingText(texts: string[], interval: number = 2000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % texts.length);
        setIsVisible(true);
      }, 200);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, texts.length]);

  return { text: texts[currentIndex], isVisible };
}