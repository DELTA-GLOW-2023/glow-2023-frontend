import React, {FC, ReactNode, useState} from "react";
import {useSwipeable} from 'react-swipeable';

const Carousel:FC<{children: ReactNode[]}> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const widthOfCarousel = 16 * children.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => goNext(),
    onSwipedRight: () => goPrev(),
    trackMouse: true
  });

  const goNext = () => {
    setCurrentSlide((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * widthOfCarousel}%)`
        }}
        {...handlers}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
