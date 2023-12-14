"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "Booking Payment",
    path: "/settings/payments/host/transactions/bookings",
  },
  {
    name: "Withdrawal",
    path: "/settings/payments/host/transactions/withdrawal",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex mb-4 md:mb-10">
      {pages.map((page) => (
        <Link
          className={cn(
            "py-2.5 w-[163px] text-center",
            "border-b font-bold",
            pathname != page.path && "border-gray-six !text-gray-six",
            pathname == page.path && "border-orange !text-orange"
          )}
          key={page.path}
          href={page.path}
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
}
