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
    return (
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
