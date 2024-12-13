import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
// import SidebarSheet from "./SidebarSheet";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row items-center border-b-2 bg-white justify-between p-4">
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
        {/* <SidebarSheet /> */}
      </Sheet>
    </div>
  );
};

export default Header;
