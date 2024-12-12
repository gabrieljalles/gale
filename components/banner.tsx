import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Banner = () => {
  return (
    <Carousel>
      <CarouselContent className="mt-4 mx-4 h-[200px] bg-black rounded-2xl  ">
        <CarouselItem className="w-full">BAZINGA</CarouselItem>
        <CarouselItem className="w-full">SADASDAS</CarouselItem>
        <CarouselItem className="w-full">ASDSASSAASDSADSADASDAS</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
