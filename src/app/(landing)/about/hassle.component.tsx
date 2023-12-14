"use client";
import Button from "@/components/button/button";
import { Card, ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import React from "react";
import Guy from "@/components/guy/guy.component";
import Link from "next/link";
import { Whatsapp } from "@/constants/whatsapp";

export default function HassleAboutComponent() {
  return (
    <ConfigProvider theme={theme}>
      <section className="bg-jasmine-fainter py-16 px-5 md:px-32  xl:px-40">
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
          <Card className="!bg-lilac md:w-1/2 !rounded-2xl !pt-4 !pl-4 !pr-0.5 !pb-0.5">
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
    </ConfigProvider>
  );
}
