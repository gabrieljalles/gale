"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerProps {
  images: {
    alt: string;
    path: string;
  }[];
}

const Banner = ({ images }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number  | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50){
      setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length -1 : prevIndex -1)
    } else if (deltaX <-50){
      setCurrentIndex((prevIndex) => (prevIndex +1) %images.length);
    }

    setStartX(null);

  }

  return (
    <div className="relative overflow-hidden rounded-xl h-40 m-1 mx-4" 
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}>
      <div
        className="flex transition-transform duration-700 w-full h-full ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="relative  justify-center items-center object-contain flex-shrink-0 w-full h-full" key={index}>
            <Image
              src={image.path}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-[#FCC221]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
