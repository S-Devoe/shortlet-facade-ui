import Button from "@/components/button/button";
import { Heading } from "@/components/typography";
import { Whatsapp } from "@/constants/whatsapp";
import { Flex } from "antd";
import Link from "next/link";
import React from "react";

export default function AboutHeroSection() {
  return (
    <div className="relative h-max w-full">
      <section className="bg-jasmine-fainter pt-48 px-5 md:px-32 xl:px-56 bg-scroll bg-cover bg-center">
        <Heading
          level={3}
          className="text-5xl md:text-6xl lg:text-[5rem] z-20 text-center !text-brun pb-8 md:!leading-[normal]"
        >
          Hassle-free holiday homes &amp; shortstays for{" "}
          <span className="text-brun-light font-serif">Everyone.</span>
        </Heading>
        <Flex gap={24} justify="center">
          <Link href={Whatsapp.url}>
            <Button
              type="button"
              text="Get Started"
              width="large"
              className={["z-30 text-white"]}
            />
          </Link>
        </Flex>
      </section>
    </div>
  );
}
