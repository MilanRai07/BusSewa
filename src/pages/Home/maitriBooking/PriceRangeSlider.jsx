import React, { useState, useRef } from "react";

const PriceRangeSlider = () => {
    const [minPrice, setMinPrice] = useState(700);
    const [maxPrice, setMaxPrice] = useState(2000);
    const [activeSlider, setActiveSlider] = useState(null); // 'min' or 'max'
    const containerRef = useRef(null);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 100);
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 100);
        setMaxPrice(value);
    };

    const handleSliderDrag = (type, clientX) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const newValue = Math.round(percentage * 5000);

        if (type === 'min') {
            const value = Math.min(newValue, maxPrice - 100);
            setMinPrice(value);
        } else {
            const value = Math.max(newValue, minPrice + 100);
            setMaxPrice(value);
        }
    };

    const handleMouseDown = (type) => (e) => {
        setActiveSlider(type);
        handleSliderDrag(type, e.clientX);

        const handleMouseMove = (e) => {
            handleSliderDrag(type, e.clientX);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            setActiveSlider(null);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (type) => (e) => {
        e.preventDefault();
        setActiveSlider(type);
        handleSliderDrag(type, e.touches[0].clientX);

        const handleTouchMove = (e) => {
            e.preventDefault();
            handleSliderDrag(type, e.touches[0].clientX);
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            setActiveSlider(null);
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    };

    // Calculate positions for the slider indicators
    const minPosition = (minPrice / 5000) * 100;
    const maxPosition = (maxPrice / 5000) * 100;

    return (
        <div className=" p-4 rounded-md w-full mx-auto">
            <p className='font-medium text-sm mt-7 text-black/60'>Price</p>


            {/* Labels */}
            <div className="flex justify-between text-sm mb-2 mt-6 max-sm:text-xs">
                <span>Rs {minPrice}</span>
                <span>Rs {maxPrice}</span>
            </div>

            {/* Range container */}
            <div
                ref={containerRef}
                className="relative h-2 bg-gray-300 rounded-full mb-8"
            >
                {/* Selected range highlight */}
                <div
                    className="absolute h-2 bg-blue-600 rounded-full"
                    style={{
                        left: `${minPosition}%`,
                        right: `${100 - maxPosition}%`,
                    }}
                ></div>

                {/* Hidden range inputs for accessibility */}
                <input
                    type="range"
                    min="0"
                    max="5000"
                    value={minPrice}
                    onChange={handleMinChange}
                    className="sr-only"
                    aria-label="Minimum price"
                />

                <input
                    type="range"
                    min="0"
                    max="5000"
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="sr-only"
                    aria-label="Maximum price"
                />

                {/* Custom Slider Handles */}
                <div
                    className={`absolute w-6 h-6 bg-blue-600 border-2 border-white rounded-full shadow-lg cursor-grab transform -translate-y-2 -translate-x-3 z-40 ${activeSlider === 'min' ? 'ring-2 ring-blue-300 cursor-grabbing' : ''
                        }`}
                    style={{ left: `${minPosition}%` }}
                    onMouseDown={handleMouseDown('min')}
                    onTouchStart={handleTouchStart('min')}
                    role="slider"
                    aria-valuenow={minPrice}
                    aria-valuemin={0}
                    aria-valuemax={5000}
                    tabIndex={0}
                />

                <div
                    className={`absolute w-6 h-6 bg-blue-600 border-2 border-white rounded-full shadow-lg cursor-grab transform -translate-y-2 -translate-x-3 z-40 ${activeSlider === 'max' ? 'ring-2 ring-blue-300 cursor-grabbing' : ''
                        }`}
                    style={{ left: `${maxPosition}%` }}
                    onMouseDown={handleMouseDown('max')}
                    onTouchStart={handleTouchStart('max')}
                    role="slider"
                    aria-valuenow={maxPrice}
                    aria-valuemin={0}
                    aria-valuemax={5000}
                    tabIndex={0}
                />
            </div>
        </div>
    );
};

export default PriceRangeSlider;