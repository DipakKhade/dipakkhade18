import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/Search";
import cn from "@/components/cn";
interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  // Sort blogs by date in descending order
  blogs.sort((a, b) => {
    const dateA = new Date(a.meta.date);
    const dateB = new Date(b.meta.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <main>
        <div className="flex p-1">
        <h2 className="text-2xl font-bold">Hey, I'm  Dipak</h2><span className="text-blue-400 text-sm pl-4">/di.pək/</span>
        </div>
        <p className="font-thin text-gray-600 p-1">I share what I've been working on recently and things I learned along the way.</p>
        <Search/>
        <h4 className="p-4 text-xl font-semibold">Recent Notes</h4>
        <div className="flex flex-row flex-wrap gap-6">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} passHref key={blog.slug}>
              <div className="rounded-lg border  dark:bg-black cursor-pointer object-center md:w-96">
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <Image
                    src={blog.meta.image}
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    
                  />
                </div>
                <div className="p-3">
                  <h3 className="flex">{blog.meta.title}</h3>
                  <div className="text-gray-500">
                    {blog.meta.description} <p>{blog.meta.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
