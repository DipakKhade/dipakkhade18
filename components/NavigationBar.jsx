
"use client";

import { MoonIcon, SunIcon} from "../lib/Icons";
import { cx } from "../lib/cx";
import Link from "next/link";
import { Menu} from "lucide-react";
import Search from "./Search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./Theme-toggle-Button";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



function NavigationBar() {
  const { setTheme ,theme} = useTheme();
  return (
    <>
      <header>
     
      <nav className="sm:flex border gap-6  backdrop-blur-sm z-50 hidden p-6 top-0 rounded-sm ">
      <div className="mt-2 flex gap-12 ml-24">
        <Link href="/" className="mr-2  hover:text-blue-600 hover:underline">
         Home
        </Link>
        <Link
          href={"https://dipakkhade-dev.vercel.app/"}
          className="mx-2  hover:text-blue-600 hover:underline"
        >
          About
        </Link>
        <Link
          href={"https://dipakkhade-dev.vercel.app/contact"}
          className="mx-2  hover:text-blue-600 hover:underline"
        >
          Contact
        </Link>
        </div>
   
        <button
        onClick={() => setTheme(theme  === "light" ? "dark" : "light")}
          // onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease  mt-2  flex items-center justify-center rounded-full p-1 dark:text-white",
            theme === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {theme === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
        <Link href={'/signup'}>
<Button>sign up</Button>

        </Link>
        <p className="w-12"></p>
<Search/>
      </nav>


      <nav className="p-4">
      <Sheet>
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="pt-8">Main Menu</SheetTitle>
      <SheetDescription>
      <Link href="/" className="mr-2 p-2 hover:text-blue-600 hover:underline">
         Home
        </Link>
        <Link
          href={"https://dipakkhade-dev.vercel.app/"}
          className="mx-2 p-2 hover:text-blue-600 hover:underline"
        >
          About
        </Link>
        <Link
          href={"https://dipakkhade-dev.vercel.app/contact"}
          className="mx-2 p-2 hover:text-blue-600 hover:underline"
        >
          Contact
        </Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </nav>
      </header>
    </>
  );
}

export default dynamic (() => Promise.resolve(NavigationBar), {ssr: false})

