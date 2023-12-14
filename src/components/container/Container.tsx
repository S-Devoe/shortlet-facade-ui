import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}
const Container = ({ className, children }: Props) => {
  return (
    <section className={cn("px-[1.56rem] pt-[1.25rem] pb-[4rem] ", className)}>
      {children}
    </section>
  );
};

export default Container;
