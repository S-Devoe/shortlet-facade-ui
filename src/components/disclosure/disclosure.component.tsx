import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronUp as ChevronUpIcon } from "react-icons/hi";
import { Heading } from "../typography";
import clsx from "clsx";

interface FAQ {
  question: string;
  answer: string;
}

function CustomDisclosure({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-2xl bg-white">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div
                className={clsx(
                  "flex justify-between gap-4 items-center hover:bg-[#E0FFA9] px-4 cursor-pointer rounded-2xl mb-6",
                  open && "bg-[#E0FFA9]"
                )}
              >
                <div className="grow">
                  <Disclosure.Button
                    className={clsx(
                      open && "text-[#25292D] rounded-t-lg",
                      !open && "rounded-lg mb-4 pb-7",
                      "flex w-full justify-between py-2 text-left text-sm font-medium text-[#25292D] focus:outline-none focus-visible:ring focus-visible:ring-[#E0FFA9] pt-7 grow"
                    )}
                  >
                    <Heading level={5} text={faq.question} />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={clsx(
                      "text-base text-gray-500 rounded-b-lg mb-4",
                      open && "pb-7"
                    )}
                  >
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
                <div
                  className={clsx(
                    "rounded-full",
                    open && "bg-gray-five",
                    !open && " bg-gray-six"
                  )}
                >
                  <ChevronUpIcon
                    className={`${
                      open
                        ? "rotate-0 transform"
                        : "rotate-180 transition-all duration-300 ease-in"
                    } h-5 w-5 text-white`}
                  />
                </div>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default CustomDisclosure;
