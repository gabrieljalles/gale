"use client";
import { MenuItens } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { formatCurrency } from "@/helpers/currency";

interface MenuCardItensProps {
  menuItem: MenuItens;
}

const MenuCardItens = ({ menuItem }: MenuCardItensProps) => {
  return (
    <Card className="  min-w-[200px] rounded-lg">
      <CardContent className=" flex p-0 px-2 pt-1">
        {/* IMAGEM */}
        <div className="relative flex-shrink-0 h-auto w-20 items-center justify-center">
          <Image
            fill
            className="rounded-1xl object-contain"
            src={menuItem.imageUrl || "Sem imagem"}
            alt={menuItem.name}
          />
        </div>
        {/* TEXTO*/}
        <div className="flex flex-1 flex-col px-1 py-3">
          <h3 className="truncate font-semibold">{menuItem.name}</h3>
        </div>

        {/*PREÇO*/}
        <div className="flex-shrink-0 flex px-1 py-3  items-center">
          <h3 className="font-semibold">{formatCurrency(menuItem.price)}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCardItens;
