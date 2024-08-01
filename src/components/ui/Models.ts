import { HTMLProps, ReactElement, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { UserConfigFnPromise } from 'vite';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text?: string;
  type?: string;
  className?: string;
  register?: UseFormRegisterReturn;
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  type: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  className?: string;
  labelText?: string;
}

export interface DropdownListProps extends HTMLProps<HTMLSelectElement> {
  className?: string;
  labelText?: string;
  source: DropdownListModel[];
  register?: UseFormRegisterReturn;
}

export interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  className?: string;
  labelText?: string;
  register?: UseFormRegisterReturn;
}

export interface DropdownListModel {
  value: any;
  name: string;
}

export interface HoverMenuProps {
  children: ReactNode;
}

export interface HoverMenuGroupProps {
  className?: string;
  children: [ReactNode, ReactElement<HoverMenuProps>];
}
