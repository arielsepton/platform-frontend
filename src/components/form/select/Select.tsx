/// <reference types="vite-plugin-svgr/client" />
import ArrowDown from "@/assets/arrow-down.svg?react";
import Typography from "@components/typography/Typography";
import React, { forwardRef } from "react";

interface SelectProps {
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  options: string[];
}

const Select: React.FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ placeholder, className, options, ...props }, ref) => {
  return (
    <div className={`flex flex-col group ${className || ""}`}>
      <div className="min-h-min relative group">
        <select
          ref={ref}
          {...props}
          className="gap-1 w-full py-2.25 pl-3 pr-2 h-10 text-body-lg text-mono/basic-4 focus:outline-none bg-mono/basic-13 rounded-md border group-focus-within:text-mono/basic-1 border-mono/basic-11 focus:border-green/basic-6"
        >
          <option value="" selected>
            <Typography variant="body-lg">{placeholder}</Typography>
          </option>

          {options.map((_, i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
        {/* <input ref={ref} {...props} type="text" placeholder={placeholder} /> */}
        <div className="absolute top-0 right-0 h-full flex items-center pr-3 text-mono/basic-4 group-focus-within:text-mono/basic-1">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
});

export default Select;
