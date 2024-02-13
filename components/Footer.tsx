import { Github, Linkedin, Twitter } from "lucide-react";
import { FC } from "react";
import { useToast } from "./ui/use-toast";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {

  return (
    <>
      <footer className="mt-12">
        <div className="h-auto sm:h-auto transition-height rounded-md sm:rounded-3xl px-4 sm:px-8 py-6 sm:py-9 duration-500 shadow-lg bg-gradient-to-br from-sky-500 to-indigo-500">
          <div className="mb-5 text-white">
            <p className="text-xl font-bold">Subscribe to my newsletter</p>
            <p className="text-sm text-gray-600">Get updates on new notes</p>
          </div>
          <form>
            <div className="flex flex-col gap-2 rounded-md focus-within:border-slate-300 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:border sm:border-slate-500 sm:p-1">
              <input
                type="text"
                name="email"
                className="grow rounded-md border border-slate-500 bg-transparent px-3 py-1 text-white outline-none placeholder:text-gray-500 focus-within:border-slate-300 sm:border-none"
                placeholder="your@email.com"
              />
              <button
                className="flex h-8 items-center justify-center rounded-md bg-slate-800 px-5 py-1 font-medium tracking-wide text-white transition-colors hover:cursor-pointer hover:text-react-link disabled:cursor-not-allowed disabled:hover:text-white sm:w-32"
              >
                Subscribe
              </button>
            </div>
          </form>
          <canvas
            className="pointer-events-none absolute top-0 left-0"
            width="207.3333435058594"
            height="224"
          ></canvas>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="py-4 text-center text-gray-400 dark:text-gray-400 flex gap-6 justify-center">
          <Github className="hover:text-blue-500 cursor-pointer" />{" "}
          <Linkedin className="hover:text-blue-500 cursor-pointer" />{" "}
          <Twitter className="hover:text-blue-500 cursor-pointer" />
        </div>
        <div className="py-4 text-center text-gray-400 dark:text-gray-400">
          &#169; Dipak Khade , Inc. All rights reserved.
        </div>
      </footer>

    </>
  );
};

export default Footer;
