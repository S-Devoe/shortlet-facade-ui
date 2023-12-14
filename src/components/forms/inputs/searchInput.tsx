"use client";
import Icon from "@/assets/icons.component";
import { Body } from "@/components/typography";
import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";

export enum InputType {
  text = "text",
  email = "email",
}

type InputProps = {
  name: string;
  placeholder: string;
  label?: string;
  icon?: JSX.Element;
  className?: string;
};

const SearchInput = ({
  name,
  placeholder,
  label,
  icon,
  className,
}: InputProps) => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext<any>();
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
      <div className={clsx("relative w-full")}>
        <div className="pointer-events-none absolute inset-y-0 top-3 h-fit left-0 flex items-center pl-3">
          <Icon name="searchIcon" />
        </div>
        <div className="absolute inset-y-0 top-3 h-fit right-0 flex items-center pr-2 cursor-pointer">
          <Icon
            name="filterIcon"
            className="w-12 h-8 text-gray-six hover:text-gray-five"
          />
        </div>
        <input
          type={"search"}
          name={name}
          id={name}
          className={clsx(
            className,
            "bg-[#EFF2F7] focus:bg-white focus:border border-gray-five border-collapse box-border block w-full rounded-md border-0 py-4 text-gray-two outline-none ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6",
            "px-12"
          )}
          placeholder={placeholder}
        />
      </div>
    </fieldset>
  );
};

export { SearchInput };
