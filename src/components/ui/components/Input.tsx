import React from "react";
import { InputProps } from "../Models";

const Input: React.FC<InputProps> = React.forwardRef(
  ({ register, type, placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        {...register}
        className={`px-2 py-1 w-full rounded-md border-2 border--300 outline-none focus:border-primary transition-colors ${className}`}
        type={type}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;
