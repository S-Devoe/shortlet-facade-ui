"use client";
import Guy from "@/components/guy/guy.component";
import theme from "@/theme/themeConfig";
import clsx from "clsx";
import React from "react";
import { LiaSnowflake, LiaCarSolid } from "react-icons/lia";
import { BsSafe2, BsUmbrella } from "react-icons/bs";

const utilities = [
  { text: "Air Conditioning", icon: <LiaSnowflake />, bg: "bg-[#EEEAF9]" },
  { text: "Safe & Secure", icon: <BsSafe2 />, bg: "bg-[#FFDEE1]" },
  { text: "Ocean Front", icon: <BsUmbrella />, bg: "bg-[#EEEED8]" },
  { text: "Free Parking", icon: <LiaCarSolid />, bg: "bg-[#D2FDFF]" },
];
const Util = ({
  icon,
  bg,
  text,
}: {
  icon: JSX.Element;
  bg: string;
  text: string;
}) => (
  <div className={"flex gap-4 items-center mt-6"}>
    <div className={clsx(bg, "rounded", "flex items-center p-2 text-xl")}>
      {icon}
    </div>
    <div>{text}</div>
  </div>
);

export default function BestHomesSection() {
  return (
    <div className="relative h-max w-full">
      <div className="absolute bg-black/40 z-10 h-full w-full"></div>
      <section className="bg-home-hero py-[10rem] px-4 sm:px-12  md:px-16 lg:px-32 xl:px-[16rem] bg-scroll bg-cover text-[#EEEED8]">
        <div className="bg-white z-20 relative p-14 rounded-lg max-w-[60rem] mx-auto">
          <div className={"flex gap-4 items-center justify-center mt-6"}>
            <div
              className={
                "flex flex-col-reverse md:flex-row gap-12 justify-between h-max w-full"
              }
            >
              <div className="text-black shrink-0 font-bold">
                <h4 className="font-serif text-2xl md:text-xl">
                  The best homes.
                </h4>
                {utilities.map((util, index) => (
                  <Util key={index} {...util} />
                ))}
              </div>
              <div className="h-[initial] w-full relative shrink grow flex justify-end">
                <div className="bg-[#EEEED8] max-w-[17.5rem] w-full h-80 sm:h-96 md:h-64 xl:h-96 justify-end">
                  &nbsp;
                  <div className="absolute -bottom-6 left-10 xl:left-24 md:h-fit w-full">
                    <Guy />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
