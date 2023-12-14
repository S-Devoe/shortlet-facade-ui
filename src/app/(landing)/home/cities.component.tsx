import Image from "next/image";
import React from "react";
import rightPic from "@/assets/home/right-city.png";
import leftPic from "@/assets/home/left-city.png";
import { Heading } from "@/components/typography";

export default function CitiesHomeComponent() {
  return (
    <section className="bg-white">
      <div className="my-10 py-10 md:py-[7.5rem] bg-lilac px-5 sm:px-16 md:px-0">
        <Heading
          level={2}
          className="!text-[2rem] md:max-w-[800px] md:mx-auto md:!text-[3rem] !leading-10 md:!leading-[4rem] !font-semibold md:!font-bold lg:!font-black text-center mb-14"
        >
          The best homes in Lagos, Abuja, PH City & Ibadan
        </Heading>
        <div className="mt-8 flex items-center flex-col-reverse md:flex-row gap-10 md:gap-3">
          <div className="md:w-1/2 mx-1 md:translate-y-12">
            <div className="w-fit mx-auto rounded-2xl overflow-hidden mb-12">
              <Image src={leftPic} alt="Guy" width={708} height={450} />
            </div>
            <p className="px-1 md:ml-16 xl:w-[523px] leading-[30px]">
              On shortlet you get to experience variety of interesting and
              unique accommodation in different locations of your choosing.
            </p>
          </div>
          <div className="md:w-1/2 mx-1">
            <div className="rounded-2xl mb-12 overflow-hidden">
              <Image src={rightPic} alt="Guy" width={708} height={450} />
            </div>
            <ol className="list-decimal text-brun font-semibold ml-12 text-2xl md:text-[2rem] leading-[42px]">
              <li className="font-serif">
                Choose your{" "}
                <span className="text-brun-light font-serif">Shortlet</span>.
              </li>
              <li className="font-serif">We confirm your reservation.</li>
              <li className="font-serif">Finalize with Host and Pay online.</li>
              <li className="font-serif">Welcome Home!</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
