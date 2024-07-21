import { HTMLProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string
  type?: string
  className?: string
  register?: UseFormRegisterReturn
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  type: string
  register?: UseFormRegisterReturn
  placeholder?: string
  className?: string
}
