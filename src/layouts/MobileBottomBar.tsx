"use client";
import HeartIcon from "@/components/icons/navs/HeartIcon";
import LocationIcon from "@/components/icons/navs/LocationIcon";
import ProfileIcon from "@/components/icons/navs/ProfileIcon";
import SMSIcon from "@/components/icons/navs/SMSIcon";
import SearchIcon from "@/components/icons/navs/SearchIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileBottomBar = () => {
  const pathname = usePathname();
  return (
    <section className="md:hidden fixed bg-white bottom-[0] w-full h-[4rem] z-[999] px-8 py-3 border-t border-t-gray-ten flex items-center justify-between gap-5">
      {navLinks.map((link, i) => (
        <Link
          href={link.route}
          key={`link-${i + 1}`}
          className={` ${
            pathname.includes(link.route) ? "text-orange" : "text-gray-six"
          }  `}
        >
          {link.icon}
        </Link>
      ))}
    </section>
  );
};

export default MobileBottomBar;

const navLinks = [
  {
    route: "/search",
    icon: <SearchIcon />,
  },
  {
    route: "/wishlist",
    icon: <HeartIcon />,
  },
  {
    route: "/bookings",
    icon: <LocationIcon />,
  },
  {
    route: "/messages",
    icon: <SMSIcon />,
  },
  {
    route: "/profile",
    icon: <ProfileIcon />,
  },
];
