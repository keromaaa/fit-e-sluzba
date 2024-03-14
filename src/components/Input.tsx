import React, { HTMLProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends HTMLProps<HTMLInputElement> {
  type: string
  register?: UseFormRegisterReturn
  placeholder?: string
  className?: string
}

const Input: React.FC<InputProps> = React.forwardRef(
  ({ register, type, placeholder, className, ...props }, ref) => {
    return type === 'submit' ? (
      <input
        ref={ref}
        {...props}
        className={`px-2 py-1 w-full font-medium rounded-md bg-primary text-white cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        type={type}
        placeholder={placeholder}
      />
    ) : (
      <input
        ref={ref}
        {...props}
        {...register}
        className={`px-2 py-1 w-full rounded-md border-2 border-neutral-300 outline-none focus:border-primary transition-colors ${className}`}
        type={type}
        placeholder={placeholder}
      />
    )
  }
)

export default Input
