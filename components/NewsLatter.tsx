'use client';
import { FC } from "react";
import { toast } from "sonner";
interface NewsLatterProps {
    
}
 
const NewsLatter: FC<NewsLatterProps> = () => {
    return ( <>
    
     <div className="h-auto sm:h-auto transition-height rounded-md sm:rounded-3xl px-4 sm:px-8 py-6 sm:py-9 duration-500 shadow-lg bg-gradient-to-br from-sky-500 to-indigo-500 p-1 w-full lg:max-w-4xl">
          <div className="mb-5 text-white">
            <p className="text-xl font-bold">Subscribe to my newsletter</p>
            <p className="text-sm text-gray-600">Get updates on new notes</p>
          </div>
          <div>
            <div className="flex flex-col gap-2 rounded-md focus-within:border-slate-300 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:border sm:border-slate-500 sm:p-1">
              <input
                type="text"
                name="email"
                className="grow rounded-md border border-slate-500 bg-transparent px-3 py-1 text-white outline-none placeholder:text-gray-500 focus-within:border-slate-300 sm:border-none"
                placeholder="your@email.com"
              />
              <button
              onClick={()=>toast('newsletter is yet to setup')}
                className="flex h-8 items-center justify-center rounded-md bg-slate-800 px-5 py-1 font-medium tracking-wide text-white transition-colors hover:cursor-pointer hover:text-react-link disabled:cursor-not-allowed disabled:hover:text-white sm:w-32"
              >
                Subscribe
              </button>
            </div>
          </div>
          <canvas
            className="pointer-events-none absolute top-0 left-0"
            width="207.3333435058594"
            height="224"
          ></canvas>
        </div>
    </> );
}
 
export default NewsLatter;