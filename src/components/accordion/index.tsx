"use client";
import { useState } from "react";
import { FAQ } from "./accordion-type";
import { cn } from "@/lib/utils";
import ArrowCircleDownIcon from "../icons/ArrowCircleDownIcon";

interface AccordionProps {
  faqs: FAQ[];
  containerClassName?: string;
  faqContainerClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  faqs,
  containerClassName,
  bodyClassName,
  faqContainerClassName,
  titleClassName,
}) => {
  const [openId, setOpenId] = useState<number | string | null>(null);

  const handleToggle = (id: number | string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={cn("flex flex-col gap-[1rem] w-full", containerClassName)}>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={cn(
            `${
              faq.id === openId ? "bg-lime" : "bg-transparent"
            } rounded-[1rem] w-full flex items-center justify-between gap-4 px-[1.5rem] py-5`
          )}
        >
          <div className={cn("flex flex-col gap-2", faqContainerClassName)}>
            <h3
              className={cn(
                `text-gray-two font-[700] text-[1rem] `,
                titleClassName
              )}
              onClick={() => handleToggle(faq.id)}
            >
              {faq.title}
            </h3>
            {faq.id === openId && (
              <div
                className={cn(
                  "text-[0.875rem] font-[400] leading-[1.5rem] text-[#555] ",
                  bodyClassName
                )}
              >
                {faq.body}
              </div>
            )}
          </div>
          <button
            className={`${faq.id === openId ? "text-gray-five rotate-180" : "text-gray-six"} `}
          >
            <ArrowCircleDownIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
