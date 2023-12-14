"use client";
import Icon from "@/assets/icons.component";
import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

interface Props {}

interface NavProps {
  icon: React.ReactNode;
  url: string;
  active?: boolean;
}

const NavItem: React.FC<NavProps> = ({ icon, url }) => (
  <Link href={url}>{icon}</Link>
);

const urls: NavProps[] = [
  {
    icon: <Icon name="searchIcon" />,
    url: "/home",
  },
  {
    icon: <Icon name="heartIcon" />,
    url: "/wishlist",
  },
  {
    icon: <Icon name="locationIcon" />,
    url: "/bookings",
  },
  {
    icon: <Icon name="emailIcon" />,
    url: "/messages",
  },
  {
    icon: <Icon name="profileIcon" />,
    url: "/profile",
  },
];

const BottomNav: React.FC<Props> = () => {
  return (
    <div
      className={clsx(
        "fixed bottom-0 w-screen",
        "bg-white block md:hidden",
        "pt-3 pb-11 px-9",
        "border-t border-gray-ten"
      )}
    >
      <div className="flex justify-between items-center">
        {urls.map(({ icon, url }) => (
          <NavItem key={url} icon={icon} url={url} />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
