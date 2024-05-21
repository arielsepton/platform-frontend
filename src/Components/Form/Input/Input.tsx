/// <reference types="vite-plugin-svgr/client" />

import Typography from "components/Typography/Typography";
import EyeClosed from "../../../assets/eye-closed.svg?react";
import EyeOpen from "../../../assets/eye-open.svg?react";
import React, { useState, forwardRef } from "react";

interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, error, label, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={`flex flex-col ${className || ""}`}>
        <Typography variant="label-md" className="text-mono/basic-5 mb-1">
          {label}
        </Typography>
        <div className="min-h-min	relative">
          <input
            ref={ref}
            {...props}
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            className={`gap-1 w-full py-2.25 pl-3 pr-2 h-10 text-body-lg focus:outline-none bg-mono/basic-13 rounded-md border text-mono/basic-1
          ${
            error
              ? "border-velvet/basic-5"
              : "border-mono/basic-11 focus:border-green/basic-6"
          }`}
          />
          {type === "password" && (
            <div
              className="absolute top-0 right-0 h-full flex items-center pr-3 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <EyeClosed className="text-mono/basic-4" />
              ) : (
                <EyeOpen className="text-mono/basic-4" />
              )}
            </div>
          )}
        </div>
        <Typography
          variant="body-sm"
          className={`text-velvet/basic-5 mb-1 pt-0.75 h-5 ${
            error ? "" : "opacity-0"
          }`}
        >
          {error}
        </Typography>
      </div>
    );
  }
);

export default Input;
