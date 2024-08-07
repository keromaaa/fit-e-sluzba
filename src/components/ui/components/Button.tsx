import React from "react";
import { ButtonProps } from "../Models";
import IconClose from "../../icons/IconClose";

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ text, type, className, register, ...props }, ref) => {
    switch (type) {
      case "nav":
        return (
          <button
            {...props}
            className={`font-semibold text-nowrap hover:text-primary transition-colors cursor-pointer ${className}`}
          >
            {text}
          </button>
        );
      case "submit":
        return (
          <button
            ref={ref}
            {...props}
            className={`px-2 py-1 w-full font-medium text-nowrap rounded-md bg-primary text-white cursor-pointer hover:opacity-80 transition-opacity ${className}`}
            type={type}
          >
            {text}
          </button>
        );
      case "text":
        return (
          <button
            {...props}
            className={`font-medium text-nowrap hover:text-primary transition-colors cursor-pointer ${className}`}
          >
            {text}
          </button>
        );
      case "accent":
        return (
          <button
            {...props}
            className={`font-semibold text-nowrap hover:opacity-80 text-primary transition-opacity cursor-pointer ${className}`}
          >
            {text}
          </button>
        );
      case "modal-close":
        return (
          <button
            {...props}
            className={`group absolute top-4 right-4 bg-white p-1 rounded-sm hover:bg-black hover:bg-opacity-5 transition-all cursor-pointer ${className}`}
          >
            <IconClose />
          </button>
        );
      default:
        return (
          <button
            ref={ref}
            {...props}
            className={`px-2 py-1 w-full font-medium text-nowrap rounded-md bg-primary text-white cursor-pointer hover:opacity-80 transition-opacity ${className}`}
          >
            {text}
          </button>
        );
    }
  }
);

export default Button;
