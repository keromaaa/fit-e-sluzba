import React from "react";
import { DropdownListProps } from "../Models";

const DropdownList: React.FC<DropdownListProps> = React.forwardRef(
  ({ className, labelText, source, register, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {labelText && <label>{labelText}</label>}
        <select
          {...props}
          {...register}
          ref={ref}
          className={`px-2 py-1 w-full rounded-md border-2 border-gray-300 outline-none focus:border-primary transition-colors ${className}`}
        >
          {source.map((item, index) => (
            <option
              key={`${index}-dropdown-item-${item.name}`}
              value={item.value}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default DropdownList;
