"use client";
import { useState } from "react";
import AllBookings from "../tabs/AllBookings";
import BookedBookings from "../tabs/BookedBookings";
import PendingBookings from "../tabs/PendingBookings";
import OngoingBookings from "../tabs/OngoingBookings";
import DeclinedBookings from "../tabs/DeclinedBookings";

const BookingsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const showTab = (value: string) => {
    switch (value) {
      case "all":
        return <AllBookings />;
      case "booked":
        return <BookedBookings />;
      case "pending":
        return <PendingBookings />;
      case "ongoing":
        return <OngoingBookings />;
      case "declined":
        return <DeclinedBookings />;
      default:
        return <AllBookings />;
    }
  };

  return (
    <section className="w-full mt-[2rem] flex flex-col gap-8 items-center">
      <section className="flex items-center w-full overflow-x-scroll hide-scroll md:justify-center ">
        {bookingsTab.map((item, i) => (
          <button
            type="button"
            onClick={() => setActiveTab(item)}
            className={`capitalize px-[2rem] pb-3 font-[500] text-[0.875rem] border-b ${
              activeTab === item
                ? "text-orange border-b-orange "
                : " text-gray-[#444854] border-b-[#444854] "
            } `}
            key={`tab-${i + 1}`}
          >
            {item}
          </button>
        ))}
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[2.25rem] ">{showTab(activeTab)}</section>
    </section>
  );
};

export default BookingsSection;

const bookingsTab = ["all", "booked", "pending", "ongoing", "declined"];
