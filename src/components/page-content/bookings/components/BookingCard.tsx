"use client";

import Badge from "@/components/badge/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  status: string;
}
const BookingCard = ({ status }: Props) => {
  const router = useRouter();

  const variant = () => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "pending";
      case "ongoing":
        return "primary";
      case "declined":
        return "destructive";
      case "booked":
        return "success";
      default:
        return "primary";
    }
  };

  return (
    <button
      type="button"
      onClick={() => router.push(`/bookings/23?status=${status}`)}
      className="w-full flex items-center bg-[#F9FAFC] gap-[1.5rem] rounded-[1rem] p-[1rem] "
    >
      <div className="relative h-[7rem] w-[7rem] shrink-0">
        <Image
          src="/bookings/booked-house.png"
          alt="img"
          fill
          className="rounded-[0.5rem]"
          sizes="100%"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <Badge text={status} className="capitalize" variant={variant()} />
        <div className="flex flex-col items-start gap-[0.5rem]">
          <h2 className="text-[1.125rem] font-[700] text-black ">
            Eko Atlantic Stays
          </h2>
          <div className="shrink-0 flex items-end justify-between w-full gap-[1rem]">
            <h4 className="text-[0.875rem] text-[#231F20] shrink-0 ">
              11 Nov - 13 Nov
            </h4>
            <h4 className="text-[0.75rem] shrink-0 text-gray-five">3 Guests</h4>
          </div>
        </div>
      </div>
    </button>
  );
};

export default BookingCard;
