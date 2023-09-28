import React, {FC, ReactNode, useState} from "react";
import {useSwipeable} from "react-swipeable";

const Carousel: FC<{ children: ReactNode[] }> = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const widthOfCarousel = 0.8 * children.length + 32;


    const handlers = useSwipeable({
        onSwipedLeft: () => goNext(),
        onSwipedRight: () => goPrev(),
        trackMouse: true,
    });

    const goNext = () => {
        setCurrentSlide((prev) => (prev === children.length - 1 ? 0 : prev + 1));
    };

    const goPrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? children.length - 1 : prev - 1));
    };

    return (
        <div>
            <div className="absolute left-8 top-1/2">
                <button onClick={goPrev}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="97"
                        height="97"
                        viewBox="0 0 97 97"
                        fill="none"
                    >
                        <circle
                            cx="48.5"
                            cy="48.5"
                            r="48.5"
                            transform="rotate(-180 48.5 48.5)"
                            fill="#295366"
                        />
                        <path
                            d="M55.268 65.2674C55.7367 64.7981 56 64.1618 56 63.4983C56 62.8348 55.7367 62.1985 55.268 61.7292L42.0348 48.4849L55.268 35.2406C55.7234 34.7686 55.9754 34.1366 55.9697 33.4805C55.964 32.8244 55.7011 32.1968 55.2375 31.7329C54.774 31.269 54.1469 31.0058 53.4914 31.0001C52.8359 30.9944 52.2043 31.2466 51.7328 31.7024L36.732 46.7158C36.2633 47.1851 36 47.8214 36 48.4849C36 49.1484 36.2633 49.7847 36.732 50.254L51.7328 65.2674C52.2017 65.7365 52.8375 66 53.5004 66C54.1633 66 54.7992 65.7365 55.268 65.2674Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <div className="absolute right-8 top-1/2">
                <button onClick={goNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="97"
                        height="97"
                        viewBox="0 0 97 97"
                        fill="none"
                    >
                        <circle cx="48.5" cy="48.5" r="48.5" fill="#295366"/>
                        <path
                            d="M41.732 32.7326C41.2633 33.2019 41 33.8382 41 34.5017C41 35.1652 41.2633 35.8015 41.732 36.2708L54.9652 49.5151L41.732 62.7594C41.2766 63.2314 41.0246 63.8634 41.0303 64.5195C41.036 65.1756 41.2989 65.8032 41.7625 66.2671C42.226 66.731 42.8531 66.9942 43.5086 66.9999C44.1641 67.0056 44.7957 66.7534 45.2672 66.2976L60.268 51.2842C60.7367 50.8149 61 50.1786 61 49.5151C61 48.8516 60.7367 48.2153 60.268 47.746L45.2672 32.7326C44.7983 32.2635 44.1625 32 43.4996 32C42.8367 32 42.2008 32.2635 41.732 32.7326Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * widthOfCarousel}%)`,
                    }}
                    {...handlers}
                >
                    {children}
                </div>

            </div>
        </div>
    );
};

export default Carousel;
