/// <reference types="vite-plugin-svgr/client" />
import Search from "@/assets/search.svg?react";
import React, { forwardRef } from "react";

interface InputProps {
  placeholder?: string;
  autoComplete?: string;
  className?: string;
}

const SearchBox: React.FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(({ placeholder, className, ...props }, ref) => {
  return (
    <div className={`flex flex-col ${className || ""}`}>
      <div className="min-h-min relative">
        <input
          ref={ref}
          {...props}
          type="text"
          placeholder={placeholder}
          className={`gap-1 w-full py-2.25 pl-9 pr-2 h-10 text-body-lg focus:outline-none bg-mono/basic-13 rounded-md border text-mono/basic-1
            border-mono/basic-11 focus:border-green/basic-6`}
        />
        <div className="absolute top-0 left-0 h-full flex items-center pl-3">
          <Search />
        </div>
      </div>
    </div>
  );
});

export default SearchBox;
