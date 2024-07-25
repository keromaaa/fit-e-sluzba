import React from "react";
import { InputProps } from "../Models";

const Input: React.FC<InputProps> = React.forwardRef(
  ({ register, type, placeholder, className, labelText, ...props }, ref) => {
    switch (type) {
      case "table-text":
        return (
          <input
            ref={ref}
            {...props}
            {...register}
            className={`w-full rounded-sm bg-inherit outline-1 focus:outline outline-primary placeholder:text-gray-500 ${className}`}
            type="text"
            placeholder={placeholder}
          />
        );
      case "table-date":
        return (
          <input
            ref={ref}
            {...props}
            {...register}
            className={`w-full rounded-sm bg-inherit outline-1 focus:outline outline-primary placeholder:text-gray-500 ${className}`}
            type="date"
            placeholder={placeholder}
          />
        );
      case "table-number":
        return (
          <input
            ref={ref}
            {...props}
            {...register}
            className={`w-full rounded-sm bg-inherit outline-1 focus:outline outline-primary placeholder:text-gray-500 ${className}`}
            min={1}
            type="number"
            placeholder={placeholder}
          />
        );
      case "file":
        return (
          <>
            <label
              htmlFor={props.id}
              className={`text-center px-2 py-1 w-full font-medium text-nowrap rounded-md bg-primary text-white cursor-pointer hover:opacity-80 transition-opacity ${className}`}
            >
              {placeholder}
            </label>
            <input
              id={props.id}
              ref={ref}
              {...props}
              type="file"
              className="hidden"
            ></input>
          </>
        );
      default:
        return (
          <div className="flex flex-col gap-2 w-full">
            {labelText && <label className="font-medium">{labelText}</label>}
            <input
              ref={ref}
              {...props}
              {...register}
              className={`px-2 py-1 w-full rounded-md border-2 border-gray-300 outline-none focus:border-primary transition-colors ${className}`}
              type={type}
              placeholder={placeholder}
            />
          </div>
        );
    }
  }
);

export default Input;
