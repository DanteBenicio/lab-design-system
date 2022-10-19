import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"
import { ReactNode } from "react"

export interface TextProps {
  size?: "sm" | "md" | "lg"
  children: ReactNode
  asChild?: boolean
}

export default function Text({ size = "md", children, asChild = false }: TextProps) {
  const Comp = asChild ? Slot : 'span'

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
