import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

const Banner = () => {
  return (
    <Carousel>
      <CarouselContent className="mt-4 mx-4 h-[120px] w-full rounded-2xl  ">
        <CarouselItem className="w-full">
          <Image
            src="/banner/banner-1.svg"
            fill
            alt="Banner de promoção na entrega"
          />
        </CarouselItem>
        <CarouselItem className="w-full"></CarouselItem>
        <CarouselItem className="w-full"></CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
