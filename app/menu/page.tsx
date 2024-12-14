import Image from "next/image";
import { quickSearchOptions } from "@/constants/quick-search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MenuCardItens from "@/components/menu-card-itens";
import { getProducts } from "../_data-access/product/get-products";
import Search from "@/components/Search";
import Header from "@/components/header";

interface MenuPageProps {
  searchParams: Promise<{ title?: string; category?: string }>;
}

const MenuPage = async ({ searchParams }: MenuPageProps) => {
  const resolvedParams = (await searchParams) || {};
  const menuItens = await getProducts(resolvedParams);

  return (
    <main>
      <Header />
      <div className=" mx-4 mt-4"></div>
      {/* <div className="bg-black h-[150px] mx-4 mt-4 items-center justify-center rounded-xl">
        <p>ola mundo</p>
      </div> */}
      <div className="mt-4 mx-4">
        <Search />
      </div>

      {/*FastSearch*/}
      <div className="flex gap-3 m-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {quickSearchOptions?.map((option) => (
          <Button
            className="gap-2 font-bold border text-md"
            variant="secondary"
            key={option.title}
            asChild
          >
            <Link
              href={
                option.title.toLowerCase() === "todos"
                  ? "/menu"
                  : `/menu?category=${option.title}`
              }
            >
              <Image
                src={option.imageUrl}
                width={18}
                height={18}
                alt={option.alt}
              />
              {option.title}
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex flex-col m-4 gap-1.5">
        {menuItens.map((menuItem) => (
          <MenuCardItens menuItem={menuItem} key={menuItem.id} />
        ))}
      </div>

      <div className=" m-4 items-center justify-center rounded-xl ">
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=553496971927&text&type=phone_number&app_absent=0"
          }
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-md object-cover"
          >
            <source src="/whats.mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </Link>
      </div>
    </main>
  );
};

export default MenuPage;
