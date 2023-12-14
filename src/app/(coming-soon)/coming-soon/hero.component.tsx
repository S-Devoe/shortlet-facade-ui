"use client";
import Button from "@/components/button/button";
import { Flex } from "antd";
import React from "react";
import { ComingSoonContext } from "../context/comingSoon.context";

export default function ComingSoonHeroSection() {
  const { onClick } = React.useContext(ComingSoonContext);
  return (
    <div className="relative h-max w-full">
      <section className="bg-coming-soon py-32 px-5 md:px-32 lg:pr-[32rem] bg-scroll bg-cover bg-center text-[#16133D]">
        <h1 className="title text-5xl md:text-6xl">
          Hassle-free holiday homes &amp; shortstays for{" "}
          <span className="text-[#322B8C] font-serif">Everyone.</span>
        </h1>
        <Flex gap={24}>
          <Button
            type="button"
            text="Join the Waitlist"
            width="large"
            className={["z-30 text-white"]}
            onClick={onClick}
          />
        </Flex>
      </section>
    </div>
  );
}
