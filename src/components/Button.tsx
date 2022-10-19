import clsx from "clsx"
import { ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className={clsx('text-black font-sans py-3 px-4 text-center text-small w-full font-semibold rounded-lg cursor-pointer duration-200 bg-cyan-500 outline-none hover:bg-cyan-300 focus:ring-2 focus:ring-white')}
    >
      {children}
    </button>
  )
}
