import Image from "next/image";
import { db } from "@/lib/prisma";

import { quickSearchOptions } from "@/constants/quick-search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MenuCardItens from "@/components/menu-card-itens";
import Banner from "@/components/banner";
import { getProducts } from "./_data-access/product/get-products";
import Search from "@/components/Search";

const Home = async () => {
  const menuItens = await getProducts();
  return (
    <div>
      {/*Banner*/}
      <Banner />
      {/*Search*/}
      <div className=" mx-4 mt-4">
        <Search />
      </div>
      {/*FastSearch*/}
      <div className="flex gap-3 m-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {quickSearchOptions.map((option) => (
          <Button
            className="gap-2 font-bold text-md"
            variant="secondary"
            key={option.title}
            asChild
          >
            <Link href={`/menu?item=${option.title}`}>
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
      <div className="flex flex-col m-4 gap-2">
        {menuItens.map((menuItem) => (
          <MenuCardItens menuItem={menuItem} key={menuItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
