import React, { HTMLProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string
  type?: string
  className?: string
  register?: UseFormRegisterReturn
}

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ text, type, className, register, ...props }, ref) => {
    switch (type) {
      case 'nav':
        return (
          <button
            {...props}
            className={`font-semibold hover:text-primary transition-colors cursor-pointer ${className}`}
          >
            {text}
          </button>
        )
      case 'submit':
        return (
          <button
            ref={ref}
            {...props}
            className={`px-2 py-1 w-full font-medium rounded-md bg-primary text-white cursor-pointer hover:opacity-80 transition-opacity ${className}`}
            type={type}
          >
            {text}
          </button>
        )
      case 'text':
        return (
          <button
            {...props}
            className={`font-semibold text-primary hover:opacity-80 transition-opacity cursor-pointer ${className}`}
          >
            {text}
          </button>
        )
      default:
        return (
          <button
            ref={ref}
            {...props}
            className={`px-2 py-1 w-full font-medium rounded-md bg-primary text-white cursor-pointer hover:opacity-80 transition-opacity ${className}`}
          >
            {text}
          </button>
        )
    }
  }
)

export default Button
