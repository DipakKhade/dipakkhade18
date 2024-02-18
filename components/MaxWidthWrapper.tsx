import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const MaxWidthWrapper = ({
  className,
  children,
}:{
    className?:string,
    children:ReactNode
}) => {
  return (
    <div
      className={twMerge(
        'p-1 mx-auto w-full md:px-20 lg:w-[90vw] min-h-screen',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper