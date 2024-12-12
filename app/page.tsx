import Image from "next/image";
import { db } from "@/lib/prisma";

import { quickSearchOptions } from "@/constants/quick-search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MenuCardItens from "@/components/menu-card-itens";
import Banner from "@/components/banner";

const Home = async () => {
  const menuItens = await db.menuItens.findMany({});
  return (
    <div>
      {/* Header */}

      {/*Banner*/}
      <Banner />

      {/*Search*/}

      {/*FastSearch*/}
      <div className="flex gap-3 m-4 overflow-x-scroll pt-6 [&::-webkit-scrollbar]:hidden">
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

      {/*Content*/}
      <h2 className="mb-3 mt-6 m-4 text-xs font-bold uppercase text-gray-400">
        Nosso cardápio
      </h2>
      <div className="flex flex-col m-4 gap-2">
        {menuItens.map((menuItem) => (
          <MenuCardItens menuItem={menuItem} key={menuItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
