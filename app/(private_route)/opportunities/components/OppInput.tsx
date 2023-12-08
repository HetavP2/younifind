'use client';
import React from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface OppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const OppInput = forwardRef<HTMLInputElement, OppInputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        // required={true}
        className={twMerge(
          `
        border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150
      `,
          disabled && "opacity-75",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

OppInput.displayName = "OppInput";

export default OppInput;
