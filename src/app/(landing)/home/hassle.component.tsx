import Button from "@/components/button/button";
import { Card } from "antd";
import React from "react";
import Guy from "@/components/guy/guy.component";
import Link from "next/link";
import { Heading } from "@/components/typography";
import { Whatsapp } from "@/constants/whatsapp";

export default function HassleHomeComponent() {
  return (
    <section className="bg-[#EEEED8] py-10 md:py-[7.5rem] px-5 md:px-8 lg:px-32">
      <Heading
        level={2}
        className="!text-[2rem] md:max-w-[700px] md:mx-auto md:!text-[3rem] !leading-10 md:!leading-[4rem] !font-semibold md:!font-bold lg:!font-black text-center mb-14"
      >
        Hassle-free holiday & short stay homes for Everyone.
      </Heading>
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
        <Card className="md:w-1/2 !rounded-2xl !pt-4 !pl-4 !pr-0.5 !pb-0.5">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2 text-primary-darker">
            Whether you&apos;re a Guest
          </h3>
          <span className="my-2 leading-7">
            There are variety of interesting and unique accommodations,
            it&apos;s cost effective and the rentals offer amenities like
            kitchen and laundry facilities for added convenience.
          </span>
          <div className="flex flex-col-reverse md:flex-row md:justify-between mt-20 gap-8 md:items-end">
            <Link href={Whatsapp.url}>
              <Button
                text="Get Started"
                variant="orangeOutline"
                className={["border !border-orange text-orange w-fit h-fit"]}
              />
            </Link>
            <Guy width={300} />
          </div>
        </Card>
        <Card className="md:w-1/2 !rounded-2xl !pt-4 !pl-4 !pr-0.5 !pb-0.5">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2 text-primary-darker">
            or choose to be a Host
          </h3>
          <span className="my-2 leading-7">
            Renting out your building on Shortlet can be a great way to earn
            extra money. You can set your own rates and adjust them based on
            demand or seasonality.
          </span>
          <div className="flex flex-col-reverse md:flex-row md:justify-between mt-20 gap-8 md:items-end">
            <Link href={Whatsapp.url}>
              <Button
                text="Get Started"
                variant="orangeOutline"
                className={["border !border-orange text-orange w-fit h-fit"]}
              />
            </Link>
            <Guy width={300} />
          </div>
        </Card>
      </div>
    </section>
  );
}
