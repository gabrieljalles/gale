"use client";

import { useEffect, useState } from "react";
import { isOpenNow } from "@/helpers/is-open-now";
import {schedule} from "@/constants/schedule"

import Image from "next/image";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {

  const [isOpen, setIsOpen] = useState<string | false>(false);

  useEffect(() => setIsOpen(isOpenNow(schedule)), [schedule]);

  return (
    <header className={`flex flex-row items-center border-b-2 bg-white justify-between p-4 ${isOpen? "border-[#82ff8d]":"border-[#ff6161]"}`}>
      <Link href="/">
        <Image
          src="/gale/logo-completa.png"
          alt={"Logo"}
          height={16}
          width={80}
        />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SidebarSheet />
      </Sheet>
    </header>
  );
};

export default Header;
