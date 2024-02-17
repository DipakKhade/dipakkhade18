'use client';
import { ThemeUIProvider } from 'theme-ui'
import {theme} from '@/lib/utils'
import { FC, ReactNode } from 'react';

interface MdxThemeProviderProps {
    
}
 
const MdxThemeProvider: FC<MdxThemeProviderProps> = ({children}:{children:ReactNode}) => {
    return ( <>
     <ThemeUIProvider theme={theme}>
        {children}
     </ThemeUIProvider>
    </> );
}

export default MdxThemeProvider
 