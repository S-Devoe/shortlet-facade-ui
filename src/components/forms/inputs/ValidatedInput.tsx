"use client";
import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  rules?: {};
  containerClassName?: string;
  icon?: JSX.Element;
}

/**
 * @deprecated
   @param  {string} label,
   @param  {string} labelClassName,
   @param  {string} name,
   @param  {string} inputClassName,
   @param  {HTMLInputTypeAttribute} type,
   @param  {boolean} required @default true,
   @param  {any} rules,
   @param  {string} containerClassName,
   @param  {JSX.Element} icon,
 * @return {JSX.Element}  The Validated Input Function
 */
const ValidatedInput = ({
  label,
  labelClassName,
  name,
  inputClassName,
  type,
  required = true,
  rules,
  containerClassName,
  icon,
}: Props) => {
  const { register } = useFormContext<any>();
  return (
    <div
      className={cn(
        "px-4 py-1 flex items-center gap-2 bg-[#F9FAFC] rounded-[0.5rem] focus-within:bg-transparent focus-within:border border-gray-ten focus-within:border-primary-lighter ",
        containerClassName
      )}
    >
      {icon && <span className="w-fit shrink-0 text-gray-five ">{icon}</span>}
      <div className="flex flex-col w-full">
        {label && (
          <label
            htmlFor={name}
            className={cn(
              "text-[0.75rem] text-gray-five font-[400] leading-[none] ",
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <input
          className={cn(
            "outline-none border-none focus:outline-none bg-transparent text-gray-two text-[1rem] w-full focus:border-none ",
            inputClassName
          )}
          id={name}
          type={type}
          {...register(name, {
            required: required,
            ...(type === "email" && {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            }),
            validate: {
              ...rules,
            },
          })}
        />
      </div>
    </div>
  );
};
