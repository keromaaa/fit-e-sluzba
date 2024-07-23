import React from "react";
import { TextAreaProps } from "../Models";

const TextArea: React.FC<TextAreaProps> = React.forwardRef(
  ({ className, labelText, register, ...props }, ref) => {
    return (
      <div className="-mb-2 flex flex-col gap-2">
        {labelText && <label>{labelText}</label>}
        <textarea
          {...props}
          {...register}
          ref={ref}
          className={`px-2 py-1 w-full min-h-16 rounded-md border-2 border-neutral-300 outline-none focus:border-primary transition-colors ${className}`}
        ></textarea>
      </div>
    );
  }
);

export default TextArea;
