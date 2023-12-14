"use client";

import Logo from "@/assets/logo.component";
import { Divider } from "antd";
import clsx from "clsx";
import Link from "next/link";
import ComingSoonForm from "./comingSoonForm.component";
import { Heading } from "../typography";
import { Whatsapp } from "@/constants/whatsapp";

export default function Footer({
  type = "main",
  reference,
}: {
  type?: "main" | "coming-soon";
  reference?: React.RefObject<HTMLInputElement>;
}) {
  return (
    <footer className="py-20 md:py-20 px-4 md:px-36 bg-[#110E2F] text-brun-primary-fainter">
      <div className="pb-32 text-center">
        <Heading
          level={1}
          className="text-center !text-inherit !text-[2rem] sm:!text-[3rem] md:!text-[4rem] !font-semibold md:!font-bold xl:!font-black !leading-[2.625rem] sm:!leading-[4rem] md:!leading-[5rem]"
        >
          {type === "main" ? "Reserve a home now" : "Get Notified First"}
        </Heading>
        <p className="text-center leading-7 md:text-lg mt-1 mb-8">
          {type === "main"
            ? `Book your next hassle free vacation home now.`
            : `Be the first to get notified when we launch and easily book hassle free homes and shortstays.`}
        </p>
        {type === "main" && (
          <Link href={Whatsapp.url}>
            <button
              className={clsx(
                "bg-orange",
                "px-16",
                "py-4",
                "rounded-lg",
                "font-bold",
                "mt-10",
                "text-white"
              )}
            >
              Get Started
            </button>
          </Link>
        )}
        {type === "coming-soon" && <ComingSoonForm reference={reference!} />}
      </div>
      <Divider className="bg-[#322B8C]" />
      <div>
        <div className="flex items-center md:items-start justify-between flex-col-reverse md:flex-row">
          <div className="text-center md:text-left">
            <Logo color={"currentColor"} />
            &copy;SHORTLET APP 2023
          </div>
          <div className="flex w-full md:w-fit justify-center md:justify-start gap-20 md:gap-6 mb-10 md:mb-0">
            <Link href="/about">About</Link>
            <Link href="/about?s=faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
