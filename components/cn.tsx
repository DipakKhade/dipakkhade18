import { FC } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
interface cnProps {
    
}
 
const cn: FC<cnProps> = (props) => {
    return ( 
        twMerge(clsx(props))
     );
}
 
export default cn;