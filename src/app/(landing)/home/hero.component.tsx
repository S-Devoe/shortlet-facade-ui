import Button from "@/components/button/button";
import { Heading } from "@/components/typography";
import Link from "next/link";
import React from "react";
import ReservationComponent from "./reservation.component";
import { Whatsapp } from "@/constants/whatsapp";

export default function HomeHeroSection() {
  return (
    <div className="relative h-max w-full">
      <div className="absolute bg-black/40 z-10 h-full w-full"></div>
      <section className="bg-home-hero py-56 px-5 sm:px-16 md:px-24 lg:px-32 lg:pr-[14rem] xl:pr-[24rem] bg-scroll bg-cover bg-center text-nude relative">
        <div className="absolute z-20 -bottom-36 md:-bottom-24 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 xl:right-32">
          <ReservationComponent />
        </div>
        <div className="max-w-[60rem] mx-auto">
          <Heading
            level={1}
            className="!text-[2.5rem] font-bold md:font-black md:!text-[4.5rem] lg:!text-[6rem] !leading-[56px] md:!leading-[1] xl:!leading-[110px] text-nude relative z-20 mb-10"
          >
            <span className="text-nude font-serif">
              Hassle-free holiday homes & shortstays for{" "}
            </span>
            <span className="text-lime font-serif">Everyone.</span>
          </Heading>
          <Link className={"z-20 text-white relative"} href={Whatsapp.url}>
            <Button
              type="button"
              text="Get Started"
              width="large"
              height="medium"
              className={["z-20 text-white"]}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
