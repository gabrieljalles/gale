import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: "/banner/1.png",
      alt: "Frete",
    },
    {
      id: 2,
      image: "/banner/1.png",
      alt: "Frete",
    },
    {
      id: 3,
      image: "/banner/1.png",
      alt: "Frete",
    },
  ];

  return (
    <Carousel className="rounded-3xl">
      <CarouselContent className="mt-4 mx-4   min-h-auto w-full ">
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className=" mt-6 h-[150px] w-full">
            <Image
              src={banner.image}
              key={banner.id}
              fill
              alt={banner.alt}
              className="rounded-lg object-cover mx-4"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
