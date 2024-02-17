import { FC } from "react";
import { ModeToggle } from "./Theme-toggle-Button";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/lib/images/images.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthButton from "./AuthButton";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <nav className="fixed top-0 mx-auto w-full md:max-w-screen-md md:px-20 lg:max-w-4xl bg-light/80 backdrop-blur-md z-50">
        <ol className="hidden sm:flex gap-14 p-6 text-md font-medium">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-12 rounded-md fixed left-2" />
          </Link>
          <li className="hover:text-blue-500 cursor-pointer pt-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer pt-2">
            <Link href={"/https://dipakkhade-dev.vercel.app/"}>About</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer pt-2">
            <Link href={"/https://dipakkhade-dev.vercel.app/contact"}>Contact</Link>
          </li>
          <ModeToggle />
          <div className="md:ml-40 lg:ml-64">
            <AuthButton />
          </div>
        </ol>

        <div className="sm:hidden p-2 flex gap-2 overflow-x-hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                {" "}
                <Link href={"/"}>Home</Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href={'https://dipakkhade-dev.vercel.app/'}>About</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={'https://dipakkhade-dev.vercel.app/contact'}>Contact</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="pl-[44vw]">
            <ModeToggle />
          </span>

          <AuthButton />
        </div>
      </nav>
    </>
  );
};

export default Header;
