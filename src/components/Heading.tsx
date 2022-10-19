import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { ReactNode } from "react"

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export default function Heading({ size = 'md', asChild = false, children }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-small': size === 'md',
          'text-medium': size === 'lg'
        }
      )}
    >
      {children}
    </Comp>
  )
}
