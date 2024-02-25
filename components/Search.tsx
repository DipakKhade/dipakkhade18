"use client";
import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Divide } from "lucide-react";
interface SearchProps {}

function taostdiv() {
  return (
    <div>
      <h5 className="font-semibold">Not implemented</h5>
      <p>i&apos;m still working on the search</p>
    </div>
  );
}

const Search: FC<SearchProps> = () => {
  return (
    <>
      <div className="flex gap-5 w-full lg:max-w-2xl">
        <Input className="dark:text-black" placeholder="search notes" />
        <Button onClick={() => toast(taostdiv())}>search</Button>
      </div>
    </>
  );
};

export default Search;
