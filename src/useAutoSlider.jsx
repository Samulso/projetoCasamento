import { useEffect, useState } from 'react';

export function useAutoSlider(totalSlides = 2, interval = 4000) {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => prev >= totalSlides ? 1 : prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [totalSlides, interval]);

  return [currentSlide, setCurrentSlide];
}