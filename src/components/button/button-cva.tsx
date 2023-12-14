import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  text: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: JSX.Element;
  disabled?: boolean;
}
export default function Button({
  text,
  type,
  className,
  onClick,
  variant,
  icon,
  disabled,
}: Props) {
  return (
    <button
      className={cn(
        buttonVariants({
          className,
          variant,
        })
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
      {icon && icon}
    </button>
  );
}

const buttonVariants = cva(
  "inline-flex items-center justify-center w-full py-[0.5rem] rounded-md text-[1rem] font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-orange text-white hover:bg-orange/90 text-[1rem] ",
        orangeOutline:
          "border border-orange text-[0.875rem] text-orange px-4 bg-transparent",
        outline:
          "border border-primary text-[0.875rem] text-primary px-4 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
