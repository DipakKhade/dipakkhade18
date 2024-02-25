import { Github, Linkedin, Twitter } from "lucide-react";
import { FC } from "react";
import NewsLatter from "./NewsLatter";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <footer className="mt-12">
        <NewsLatter />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="py-4 text-center text-gray-400 dark:text-gray-400 flex gap-6 justify-center">
          <Link href="https://github.com/DipakKhade/">
            <Github className="hover:text-blue-500 cursor-pointer" />
          </Link>
          <Linkedin className="hover:text-blue-500 cursor-pointer" />{" "}
          <Twitter className="hover:text-blue-500 cursor-pointer" />
        </div>
        <div className="py-4 text-center text-gray-400 dark:text-gray-400">
          &#169; Dipak Khade , Inc. All rights reserved.
          <p className="text-slate-700">
            Built by @DipakKhade. Hosted on Vercel. The source code is available
            on{" "}
            <a className="underline" href={siteConfig.links.github}>
              GitHub.
            </a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
