"use client";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface Props {
  required?: boolean;
  name: string;
  placeholder?: string;
  className?: string;
}
const Textarea = ({ required, name, placeholder, className }: Props) => {
  const { register } = useFormContext<any>();
  return (
    <textarea
      {...register(name, { required })}
      placeholder={placeholder}
      className={cn(
        "h-[7rem] resize-none text-[0.875rem] placeholder:font-[400] placeholder:text-[#575A65] w-full border border-[#E5E9F2] rounded-lg ",
        className
      )}
    />
  );
};

export default Textarea;
