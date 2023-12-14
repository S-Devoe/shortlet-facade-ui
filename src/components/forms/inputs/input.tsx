"use client";
import Icon from "@/assets/icons.component";
import { Body } from "@/components/typography";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

export enum InputType {
  text = "text",
  email = "email",
  password = "password",
  phone = "phone",
  tel = "tel",
}

type InputProps = {
  type: InputType;
  name: string;
  placeholder: string;
  label?: string;
  reference?: React.RefObject<HTMLInputElement>;
  required?: boolean;
  rules?: {};
  requiredMessage?: string;
  readOnly?: boolean;
  showError?: boolean;
  pattern?: any;
  icon?: JSX.Element;
  className?: string;
  containerClassName?: string;
  iconClassName?: string;
  variant?: "style-two";
};

const Input = ({
  type = InputType.text,
  name,
  placeholder,
  label,
  icon,
  reference,
  required = false,
  pattern,
  readOnly = false,
  showError = true,
  requiredMessage = `'${label ?? name}' is required`,
  rules,
  className,
  containerClassName,
  iconClassName,
  variant,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<any>();
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordVisibility = React.useCallback(() => {
    setShowPassword((prev) => !prev);
  }, [setShowPassword]);
  return (
    <fieldset className="flex flex-col items-start gap-2 grow w-full">
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          "relative rounded-md shadow-sm w-full border-2",
          {
            "bg-[#FF0000] border-[#FF0000]": !!errors[name],
            "border-[#EFF2F7]": !errors[name],
          },
          {
            "flex items-center py-3 gap-2  bg-[#EFF2F7] border-[1.5px] border-[#EFF2F7] rounded-[0.5rem] focus-within:bg-white focus-within:border-[1px] focus-within:border-primary-lighter":
              variant === "style-two",
          },
          containerClassName
        )}
      >
        {icon && (
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 top-3 h-fit left-0 flex items-center pl-3",
              iconClassName,
              { "relative top-0 text-gray-five": variant === "style-two" }
            )}
          >
            {icon}
          </div>
        )}
        {type === InputType.password && (
          <div
            className="absolute inset-y-0 top-3 h-fit right-0 flex items-center pr-2 cursor-pointer"
            onClick={handlePasswordVisibility}
          >
            <Icon
              name="showIcon"
              className="w-12 h-8 text-gray-six hover:text-gray-five"
              open={showPassword}
            />
          </div>
        )}
        <input
          {...register(name, { required })}
          type={type === InputType.password && showPassword ? "text" : type}
          name={name}
          id={name}
          className={cn(
            className,
            "bg-[#EFF2F7] focus:bg-white focus:border border-[#322B8C] border-collapse box-border block w-full rounded-md border-0 py-4 text-gray-two outline-none ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6",
            icon && "pl-12",
            !icon && "pl-3",
            {
              "outline-none border-none text-gray-two !py-0 !pl-0 focus-within:outline-none focus:!border-0 focus:ring-0":
                variant === "style-two",
            }
          )}
          placeholder={placeholder}
        />
        {errors[name] && (
          <div className="gap-1.5 flex px-2 text-white">
            <span className="text-white">
              <Icon name="infoCircle" />
            </span>
            <span>
              <Body
                className="text-white"
                level={"subtext"}
                text={errors[name]?.message?.toString()}
              />
            </span>
          </div>
        )}
      </div>
    </fieldset>
  );
};

export { Input };
