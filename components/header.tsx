import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image src="/public/logo.png" alt={"Logo"} height={18} width={120} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default Header;
