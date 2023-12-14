"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "Wallet",
    path: "/settings/payments/my/wallet",
  },
  {
    name: "Transactions",
    path: "/settings/payments/my/transactions",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex mb-10">
      {pages.map((page) => (
        <Link
          className={cn(
            "px-4 py-2.5 w-[163px] text-center",
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
