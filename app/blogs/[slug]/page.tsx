import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, Clock10 } from "lucide-react";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8",
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);
  // console.log(props)
  return (
    <main className="p-3 md:p-12 lg:pl-48 bg-white">
      <div className="flex">
        <Link href="/">
          <Button className="bg-white text-gray-800 border hover:text-white">
            <ChevronLeft />
            see all notes
          </Button>
        </Link>
        <p className="flex gap-2 pl-8 md:pl-48 text-sm pt-2 text-gray-600">
          <Clock10 className="text-blue-400 text-sm" />{" "}
          {props.fontMatter.readtime} read .
        </p>
      </div>
      <p className="p-3 font-serif text-gray-500">{props.fontMatter.date}</p>
      <article className="prose mt-16 md:mt-4 leading-7 [&:not(:first-child)]:mt-6">
        <h1>{props.fontMatter.title}</h1>
        <Image src={props.fontMatter.image} alt="" width={600} height={300} />
        <div className="md:w-[50vw]">
          <MDXRemote source={props.content} />
        </div>
      </article>
    </main>
  );
}
