import React from "react";
import reservationImg from "@/assets/home/reservation.png";
import Image from "next/image";
import { Flex, Skeleton } from "antd";
import { numberToNaira } from "@/lib/currency";

export default function ReservationComponent() {
  return (
    <div className="bg-white w-max rounded-lg overflow-hidden relative z-20">
      <div className="relative">
        <Image src={reservationImg} alt="Reservation" width={350} />
        <span className="bg-white text-[#757D8A] absolute bottom-2 right-4 px-2 rounded-xl">
          <span className="text-black mr-1 font-bold">
            {numberToNaira(100)}
          </span>
          / night
        </span>
      </div>
      <div className="mx-5 my-7 text-sm">
        <Skeleton paragraph={{ rows: 1 }} />
        <Flex
          justify="space-between"
          className="mt-3 text-sm text-[#757D8A]"
          align="center"
        >
          <span className="flex gap-2 items-center text-sm text-[#060606]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.3445 0.576867C7.52485 0.0218269 8.31008 0.0218278 8.49043 0.576868L9.94633 5.05768C10.027 5.3059 10.2583 5.47396 10.5193 5.47396H15.2307C15.8143 5.47396 16.0569 6.22076 15.5848 6.5638L11.7732 9.33309C11.562 9.4865 11.4737 9.75843 11.5543 10.0066L13.0103 14.4875C13.1906 15.0425 12.5553 15.504 12.0832 15.161L8.27157 12.3917C8.06042 12.2383 7.7745 12.2383 7.56336 12.3917L3.75175 15.161C3.2796 15.504 2.64433 15.0425 2.82468 14.4875L4.28058 10.0066C4.36123 9.75843 4.27288 9.4865 4.06173 9.33309L0.250123 6.5638C-0.222022 6.22076 0.0206287 5.47396 0.604233 5.47396H5.31564C5.57663 5.47396 5.80795 5.3059 5.8886 5.05768L7.3445 0.576867Z"
                fill="#060606"
              />
            </svg>
            <span className="font-medium">4.6</span> (18 reviews)
          </span>
          <span>6 guests</span>
          <span>3 bedrooms</span>
        </Flex>
      </div>
    </div>
  );
}
