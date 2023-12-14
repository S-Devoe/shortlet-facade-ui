import { Heading } from "@/components/typography";
import { ThemeColors } from "@/constants/colors";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/settings/payments/my",
    text: "My Payments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.92 16.7486C21.59 19.4086 19.41 21.5886 16.75 21.9186C15.14 22.1186 13.64 21.6786 12.47 20.8186C11.8 20.3286 11.96 19.2886 12.76 19.0486C15.77 18.1386 18.14 15.7586 19.06 12.7486C19.3 11.9586 20.34 11.7986 20.83 12.4586C21.68 13.6386 22.12 15.1386 21.92 16.7486Z"
          fill={ThemeColors.grayFive.hex}
        />
        <path
          d="M9.99 2C5.58 2 2 5.58 2 9.99C2 14.4 5.58 17.98 9.99 17.98C14.4 17.98 17.98 14.4 17.98 9.99C17.97 5.58 14.4 2 9.99 2ZM9.05 8.87L11.46 9.71C12.33 10.02 12.75 10.63 12.75 11.57C12.75 12.65 11.89 13.54 10.84 13.54H10.75V13.59C10.75 14 10.41 14.34 10 14.34C9.59 14.34 9.25 14 9.25 13.59V13.53C8.14 13.48 7.25 12.55 7.25 11.39C7.25 10.98 7.59 10.64 8 10.64C8.41 10.64 8.75 10.98 8.75 11.39C8.75 11.75 9.01 12.04 9.33 12.04H10.83C11.06 12.04 11.24 11.83 11.24 11.57C11.24 11.22 11.18 11.2 10.95 11.12L8.54 10.28C7.68 9.98 7.25 9.37 7.25 8.42C7.25 7.34 8.11 6.45 9.16 6.45H9.25V6.41C9.25 6 9.59 5.66 10 5.66C10.41 5.66 10.75 6 10.75 6.41V6.47C11.86 6.52 12.75 7.45 12.75 8.61C12.75 9.02 12.41 9.36 12 9.36C11.59 9.36 11.25 9.02 11.25 8.61C11.25 8.25 10.99 7.96 10.67 7.96H9.17C8.94 7.96 8.76 8.17 8.76 8.43C8.75 8.77 8.81 8.79 9.05 8.87Z"
          fill={ThemeColors.grayFive.hex}
        />
      </svg>
    ),
  },
  {
    href: "/settings/payments/host",
    text: "Host Payouts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z"
          fill={ThemeColors.grayFive.hex}
          stroke={ThemeColors.grayFive.hex}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 11H5V18H7V11Z" fill={ThemeColors.grayFive.hex} />
        <path d="M11 11H9V18H11V11Z" fill={ThemeColors.grayFive.hex} />
        <path d="M15 11H13V18H15V11Z" fill={ThemeColors.grayFive.hex} />
        <path d="M19 11H17V18H19V11Z" fill={ThemeColors.grayFive.hex} />
        <path
          d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z"
          fill={ThemeColors.grayFive.hex}
        />
        <path
          d="M21.37 5.74984L12.37 2.14984C12.17 2.06984 11.83 2.06984 11.63 2.14984L2.63 5.74984C2.28 5.88984 2 6.29984 2 6.67984V9.99984C2 10.5498 2.45 10.9998 3 10.9998H21C21.55 10.9998 22 10.5498 22 9.99984V6.67984C22 6.29984 21.72 5.88984 21.37 5.74984ZM12 8.49984C11.17 8.49984 10.5 7.82984 10.5 6.99984C10.5 6.16984 11.17 5.49984 12 5.49984C12.83 5.49984 13.5 6.16984 13.5 6.99984C13.5 7.82984 12.83 8.49984 12 8.49984Z"
          fill={ThemeColors.grayFive.hex}
        />
      </svg>
    ),
  },
];

export default function Payments() {
  return (
    <div>
      <Heading level={3} text="Payments" className="!text-primary" />
      <div className="my-6">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <div className={cn("p-4 border-b border-gray-six flex w-full")}>
              <span>{link.icon}</span>
              <span className="grow ml-2">{link.text}</span>
              <span className="self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.4917 1.66797H6.50841C3.47508 1.66797 1.66675 3.4763 1.66675 6.50964V13.4846C1.66675 16.5263 3.47508 18.3346 6.50841 18.3346H13.4834C16.5167 18.3346 18.3251 16.5263 18.3251 13.493V6.50964C18.3334 3.4763 16.5251 1.66797 13.4917 1.66797ZM12.3251 10.443L9.38341 13.3846C9.25841 13.5096 9.10008 13.568 8.94175 13.568C8.78341 13.568 8.62508 13.5096 8.50008 13.3846C8.25841 13.143 8.25841 12.743 8.50008 12.5013L11.0001 10.0013L8.50008 7.5013C8.25841 7.25964 8.25841 6.85964 8.50008 6.61797C8.74175 6.3763 9.14175 6.3763 9.38341 6.61797L12.3251 9.55964C12.5751 9.8013 12.5751 10.2013 12.3251 10.443Z"
                    fill={ThemeColors.graySix.hex}
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
