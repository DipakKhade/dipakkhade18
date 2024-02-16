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
        'p-1 mx-auto w-full md:p-20 lg:max-w-6xl min-h-screen',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper