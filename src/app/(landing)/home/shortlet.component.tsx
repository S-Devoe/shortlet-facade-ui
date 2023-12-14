import React from "react";
import Guy from "@/components/guy/guy.component";
import { SliderComponent } from "./slider.component";
import { Heading } from "@/components/typography";

export default function ShortletHomeComponent() {
  return (
    <section className="bg-white py-32 px-5 md:px-12 lg:px-32">
      <Heading level={1} className="title text-5xl md:text-6xl">
        Just <span className="text-primary-lighter font-serif">Shortlet</span>{" "}
        it!
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FEFAEC] p-20 flex flex-col items-center justify-center rounded-2xl">
          <Guy />
        </div>
        <SliderComponent />
      </div>
    </section>
  );
}
