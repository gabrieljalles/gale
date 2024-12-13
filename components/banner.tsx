"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    image: "frete.png",
    alt: "Frete",
  },
  {
    id: 2,
    image: "promocao.png",
    alt: "Frete",
  },
  {
    id: 3,
    image: "logo.png",
    alt: "Frete",
  },
];

const Banner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent className="mt-4 mx-4 w-full ">
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className=" w-[300px] h-[150px]">
            <div className=" flex items-center">
              <Image
                src={`/banners/${banner.image}`}
                key={banner.id}
                width={300}
                height={300}
                alt={banner.alt}
                className="rounded-lg object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Banner;
