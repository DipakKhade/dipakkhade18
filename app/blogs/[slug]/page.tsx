import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'

    export async function generateStaticParams(){

        const files =fs.readdirSync(path.join('blogs'))

        const paths = files.map(filename => ({
            slug: filename.replace('.mdx', '')
        }))

        return paths
    }

function getPost({slug}: {slug: string}){

    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const{data: fontMatter, content} = matter(markdownFile)

    return {
        fontMatter,
        slug,
        content
    }

}


export default function Page({ params } :any){
    const props = getPost( params);
    // console.log(props)
    return (
      

        <article className='prose dark:!prose-invert mt-24 md:mt-4'>

            <h1>{props.fontMatter.title}</h1>
               <Image src={props.fontMatter.image} alt='' width={600} height={300}/>
            <MDXRemote source={props.content} />
                
        </article>
    )
}