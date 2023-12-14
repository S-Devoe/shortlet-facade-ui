"use client";
import { numberToNaira } from "@/lib/currency";
import { Slider } from "antd";
import React from "react";

export const SliderComponent = () => {
  const [nights, setNights] = React.useState(14);
  return (
    <div className="bg-[#EEEAF9] py-16 px-20 rounded-2xl text-center">
      <h1 className="text-4xl font-bold font-serif mb-10">You could earn</h1>
      <span className="text-6xl font-black font-serif my-10 text-[#322B8C]">
        {numberToNaira(nights * 80)}
      </span>
      <div className="my-10">
        {nights} nights at an estimated {numberToNaira(80)} per night
      </div>
      <Slider
        min={1}
        max={50}
        onChange={(v) => setNights(v)}
        value={nights}
        styles={{
          track: {
            background: "#8882D9",
          },
          rail: {
            background: "white",
          },
          handle: {
            borderColor: "#8882D9",
            background: "#8882D9",
            boxShadow: "#8882D9",
          },
        }}
      />
    </div>
  );
};
