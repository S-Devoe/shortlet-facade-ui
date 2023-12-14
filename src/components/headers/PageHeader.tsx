import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  header: string;
  body?: string;
  headerClassName?: string;
}
const PageHeader = ({ header, body, headerClassName}: Props) => {
  return (
    <>
      <h1
        className={cn(
          "font-serif text-primary text-[1.5rem] leading-[175%] font-[600]",
          headerClassName
        )}
      >
        {header}
      </h1>
      {body && <p className="font-[400] text-[1rem] text-black">{body}</p>}
    </>
  );
};

export default PageHeader;
