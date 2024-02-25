
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


      <nav>
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
              <DropdownMenuItem>
                <Link href={"https://dipakcodesnippets.vercel.app/"}>
                  Snippets
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"https://dipakkhade-dev.vercel.app/"}>About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"https://dipakkhade-dev.vercel.app/contact"}>
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="pl-[44vw]">
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
          </span>

          <Link href={'/signup'}>
<Button>sign up</Button>

        </Link>
        </div>
      </nav>
      </header>
    </>
  );
}

export default dynamic (() => Promise.resolve(NavigationBar), {ssr: false})

