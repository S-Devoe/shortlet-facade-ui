import React from "react";
import Image from "next/image";
import Success from "@/assets/success.svg";
import Button from "@/components/button/button";
import Link from "next/link";
import { Body, Heading } from "@/components/typography";

export default function ComingSoonSuccessSection() {
  return (
    <div className="relative h-max w-full">
      <section className="bg-white pt-44 pb-32 px-5 md:px-32 text-[#16133D] text-center">
        <div className="w-fit mx-auto mb-10">
          <Image src={Success} alt={"success"} />
        </div>
        <Heading
          level={2}
          text={"Congratulations !!"}
          className="text-center text-primary-lighter"
        />
        <Body
          level={2}
          text={
            "You have successfully joined the waitlist and will be the first to get notified when we launch."
          }
        />
        <div className="w-fit mx-auto mt-10">
          <Link href={"/"}>
            <Button
              type="button"
              text="Finish"
              width="large"
              className={["z-30 text-white"]}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
