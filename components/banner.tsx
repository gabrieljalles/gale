import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative border rounded-xl max-h-[600px] m-4 overflow-hidden">
      <Image
        width={200}
        height={200}
        src={"/banners/promocao.png"}
        alt={"Um banner de promoção."}
        className="object-cover w-full "
      />
    </div>
  );
};

export default Banner;
