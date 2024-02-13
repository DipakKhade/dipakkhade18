import { FunctionComponent } from 'react';
import dynamic from "next/dynamic";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/components/Search';
interface pageProps {
   
}
 
const page: FunctionComponent<pageProps> = () => {
    const blogDir  = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs =  files.map(filename =>{
    
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')


    const {data: frontMatter} = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }

  })

  // console.log(blogs)

    return ( 
        
      <main className='flex flex-col min-h-screen'>
   
    <section className='py-1'>
   <h3 className='text-2xl'> &lt;Dipak  props=&#123;notes &#125;/ &gt;</h3>
<Search/>
    <div className='p-2 flex flex-wrap md:flex-nowrap'>
      {blogs.map(blog =>(
        <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
          <Image src={blog.meta.image} alt='img'width={300} height={300}/>
    
          <div className='py-2 flex justify-between align-middle gap-2'>
            <div>
              <h3 className='text-lg font-blod p-2'>
                {blog.meta.title}
              </h3>
              <div>
              
                <p className='text-gray-400'>{blog.meta.description}</p>
              </div>
              <div className='text-gray-400'>
                <p>{blog.meta.date}</p>
              </div>
             </div> 
          </div>
        </Link>
      ))}
    </div>
    </section>
   </main>

   
    );
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
