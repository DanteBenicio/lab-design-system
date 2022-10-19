import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { InputHTMLAttributes, ReactNode } from "react"

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputContainerProps { 
  children: ReactNode 
}

export interface TextInputIconProps {
  children: ReactNode 
}

function TextInputContainer({ children }: TextInputContainerProps) {
  return (
    <div className={clsx('flex items-center gap-3 py-3 px-4 rounded-lg bg-gray-800 focus-within:ring-2 focus-within:ring-cyan-300 duration-200 h-12')}>
      {children}
    </div>
  )
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot
      className="w-6 h-6 text-gray-400 "
    >
      {children}
    </Slot>
  )
}

function TextInputInput(props: TextInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-400 text-xs"
      {...props} 
    />
  )
}

TextInputContainer.displayName = "TextInput.Container"
TextInputIcon.displayName = "TextInput.Icon"
TextInputInput.displayName = "TextInput.Input"


export const TextInput = {
  Container: TextInputContainer,
  Input: TextInputInput,
  Icon: TextInputIcon
}