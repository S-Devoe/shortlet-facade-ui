"use client";
import { useSearchParams } from "next/navigation";
import ReservationAndPaymentInfo from "./components/ReservationAndPaymentInfo";
import Badge from "@/components/badge/badge";
import HotelInfo from "./components/HotelInfo";
import HotelAmenities from "./components/HotelAmenities";
import HotelLocation from "./components/HotelLocation";

const BookingPageContents = () => {
  const params = useSearchParams();
  const paramStatus = params.get("status");

  const getStatusMessage = () => {
    switch (paramStatus?.toLowerCase()) {
      case "pending":
        return "Your reservation is pending. You will receive a response from your host within 24 hours.";
      case "ongoing":
        return "Your reservation is accepted, kindly click the check-in button when you have checked in.";
      case "booked":
        return "Your reservation is accepted, kindly click the check-out button when you have checked out.";
      case "declined":
        return "Your reservation was desclined";
      case "completed":
        return "Your reservation has been completed";
      default:
        return "";
    }
  };

  return (
    <section className="flex flex-col gap-[2.5rem] mb-4 ">
      <section className="flex flex-col gap-8" >
        <Badge
          text={getStatusMessage()}
          className="w-full text-center py-[1rem] px-[2rem] bg-primary rounded-[1rem] text-[1rem] font-[600] text-white font-serif  "
        />
        <ReservationAndPaymentInfo status={paramStatus} />
      </section>
      <HotelInfo />
      <HotelAmenities />
      <HotelLocation />
    </section>
  );
};

export default BookingPageContents;
