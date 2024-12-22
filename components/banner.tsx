"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerProps{
  images: {
    alt: string,
    path: string,
  }[]
};

const Banner = ({images}:BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden rounded-xl m-4">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.alt}
            fill
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-[#FCC221]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
