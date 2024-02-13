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
        'p-4 mx-auto w-full md:max-w-screen-md md:px-20 lg:max-w-4xl min-h-screen',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper