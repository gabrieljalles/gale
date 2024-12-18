import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative border rounded-xl m-4 h-[200px]  overflow-hidden">
      <Image
        fill
        src={"/banners/frete.png"}
        alt={"Um banner de promoção."}
        className="object-cover"
      />
    </div>
  );
};

export default Banner;
