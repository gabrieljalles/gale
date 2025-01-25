import { quickSearchOptions } from "@/constants/quick-search";
import Link from "next/link";
import MenuCardItens from "@/components/menu-card-itens";
import { getProducts } from "../_data-access/product/get-products";
import Search from "@/components/Search";
import Header from "@/components/header";
import QuickSearchOptions from "@/components/quick-search-options";
import Banner from "@/components/banner";
import StatusOpening from "@/components/StatusOpening";


interface MenuPageProps {
  searchParams: Promise<{ title?: string; category?: string }>;
}

const images = [
  {
    alt: "Explicativo whatsapp",
    path: "/banners/whats.png",
  },
  {
    alt: "explicativo do frete",
    path: "/banners/frete.png",
  },
  {
    alt: "explicativo de barrigudinhas",
    path: "/banners/barrigudinhas.png",
  },
];

const MenuPage = async ({ searchParams }: MenuPageProps) => {
  

  const resolvedParams = (await searchParams) || {};
  const menuItens = await getProducts(resolvedParams);

  const isEmptySearch = menuItens.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow justify-end">
        
        <StatusOpening/>
        
        <Banner images={images} />

        <div className="mt-4 mx-4">
          <Search />
        </div>

        {/*FastSearch*/}
        <QuickSearchOptions quickSearchOptions={quickSearchOptions} />

        <div className="flex flex-col m-4 gap-1.5">
          {!isEmptySearch ? (
            <>
              {menuItens.map((menuItem) => (
                <MenuCardItens menuItem={menuItem} key={menuItem.id} />
              ))}
            </>
          ) : (
            <div className="flex min-h-[200px] justify-center items-center">
              <p className="text-3xl text-gray-300">
                Nenhum produto encontrado!
              </p>
            </div>
          )}
        </div>

        <div className="m-4 z-[1000] items-center justify-center rounded-xl ">
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
              <source src="/whats.mp4" type="video/mp4" />
              <source src="/whats.webm" type="video/webm" />
              Seu navegador não suporta vídeos. Clique aqui para pedir no whats.
            </video>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;
