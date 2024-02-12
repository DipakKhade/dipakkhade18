'use client';
import Content from './content.mdx'
import { FunctionComponent } from 'react';
import dynamic from "next/dynamic";

interface pageProps {
    
}
 
const page: FunctionComponent<pageProps> = () => {
    return ( <p className="prose lg:prose-xl"><Content /></p> );
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
