import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  className?: string;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  text: string;
}
const Badge = ({ className, variant, text }: Props) => {
  return (
    <span
      className={cn(
        badgeVariants({
          className,
          variant,
        })
      )}
    >
      {text}
    </span>
  );
};

export default Badge;

const badgeVariants = cva(
  "flex items-center capitalize leading-[1.25rem] justify-center h-fit w-fit px-[0.5rem] py-[0.125rem] rounded-[6.5rem] text-[0.625rem]",
  {
    variants: {
      variant: {
        default: "bg-orange text-white",
        success: "bg-[#D6FFE2] text-[#003D13] ",
        destructive: "bg-[#FFEBEB] text-[#FF1F26] ",
        pending: "bg-[#FEFAEC] text-[#E7BC0D] ",
        primary: "bg-[#E1E0F6] text-[#322B8C] ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
