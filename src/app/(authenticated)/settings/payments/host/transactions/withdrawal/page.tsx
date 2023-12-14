import Button from "@/components/button/button";
import ArrowCircleDownIcon from "@/components/icons/ArrowCircleDownIcon";
import { Body } from "@/components/typography";
import React from "react";
import atlantic from "@/assets/images/atlantic.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ThemeColors } from "@/constants/colors";

export default function TransactionsPage() {
  const transactions = [
    {
      status: "pending",
      amount: 50,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "failed",
      amount: 50,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "failed",
      amount: 50,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "success",
      amount: 50,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "success",
      amount: 50,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
  ];
  return (
    <div>
      <section className="md:flex mb-10">
        <div className="flex mb-4 md:mb-0">
          <div className="p-4 rounded-2xl bg-gray-ten flex items-center justify-between grow mr-6">
            <Body
              level={2}
              text="All Payments"
              className="!text-gray-five grow"
            />
            <ArrowCircleDownIcon />
          </div>
          <div className="p-4 rounded-2xl bg-gray-ten flex items-center justify-between grow md:mr-10">
            <Body
              level={2}
              text="Month/Year"
              className="!text-gray-five grow"
            />
            <ArrowCircleDownIcon />
          </div>
        </div>
        <Button
          text="Filter"
          width="large"
          height="large"
          className={"grow w-full md:w-auto md:mr-[42px]"}
        />
      </section>
      <section>
        {transactions
          .map(({ date, start, end, ...rest }) => ({
            ...rest,
            date: new Date(date),
            start: new Date(start),
            end: new Date(end),
          }))
          .map(({ status, amount, date, name, city, start, end }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2 mb-5 border-b border-gray-six"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-brun-primary-fainter overflow-hidden p-4 w-20 h-20 relative flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M30.8891 26.7209V30.8876H3.11133V26.7209C3.11133 25.957 3.73633 25.332 4.50022 25.332H29.5002C30.2641 25.332 30.8891 25.957 30.8891 26.7209Z"
                      fill={ThemeColors.grayFive.hex}
                      stroke={ThemeColors.grayFive.hex}
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0571 15.6094H7.2793V25.3316H10.0571V15.6094Z"
                      fill={ThemeColors.grayFive.hex}
                    />
                    <path
                      d="M15.6118 15.6094H12.834V25.3316H15.6118V15.6094Z"
                      fill={ThemeColors.grayFive.hex}
                    />
                    <path
                      d="M21.1664 15.6094H18.3887V25.3316H21.1664V15.6094Z"
                      fill={ThemeColors.grayFive.hex}
                    />
                    <path
                      d="M26.7231 15.6094H23.9453V25.3316H26.7231V15.6094Z"
                      fill={ThemeColors.grayFive.hex}
                    />
                    <path
                      d="M32.2789 31.931H1.72331C1.15386 31.931 0.681641 31.4588 0.681641 30.8893C0.681641 30.3199 1.15386 29.8477 1.72331 29.8477H32.2789C32.8483 29.8477 33.3205 30.3199 33.3205 30.8893C33.3205 31.4588 32.8483 31.931 32.2789 31.931Z"
                      fill={ThemeColors.grayFive.hex}
                    />
                    <path
                      d="M30.0141 8.31771L17.5141 3.31771C17.2363 3.2066 16.7641 3.2066 16.4863 3.31771L3.98633 8.31771C3.50022 8.51215 3.11133 9.0816 3.11133 9.60937V14.2205C3.11133 14.9844 3.73633 15.6094 4.50022 15.6094H29.5002C30.2641 15.6094 30.8891 14.9844 30.8891 14.2205V9.60937C30.8891 9.0816 30.5002 8.51215 30.0141 8.31771ZM17.0002 12.1372C15.8474 12.1372 14.9169 11.2066 14.9169 10.0538C14.9169 8.90104 15.8474 7.97049 17.0002 7.97049C18.153 7.97049 19.0835 8.90104 19.0835 10.0538C19.0835 11.2066 18.153 12.1372 17.0002 12.1372Z"
                      fill={ThemeColors.grayFive.hex}
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className={cn(
                      `rounded-[100px] px-2 border border-white w-fit capitalize`,
                      status === "pending" &&
                        "bg-jasmine-fainter !text-jasmine",
                      status === "failed" && "bg-red-fainter !text-red-dark",
                      status === "success" && "bg-brun-fainter !text-brun"
                    )}
                  >
                    <Body
                      level={"caption"}
                      text={status}
                      className="!text-inherit"
                    />
                  </div>
                  <Body
                    level={2}
                    text={name}
                    className="!text-gray-black !text-sm mt-1 font-medium"
                  />
                </div>
              </div>
              <div className="gap-4">
                <div className="flex gap-1.5 justify-end">
                  <Body
                    className="!text-gray-black font-medium text-sm"
                    level={2}
                    text={"$ " + amount.toLocaleString()}
                  />
                  <Body
                    level={2}
                    text={"Paid " + format(date, "dd LLL")}
                    className="!text-gray-five !text-[0.625rem]"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Body
                    level={2}
                    text={"Withdrawal"}
                    className="!text-gray-five !text-[0.625rem]"
                  />
                </div>
              </div>
            </div>
          ))}
      </section>
      <section>
        <nav className="mx-auto w-fit">
          <ul className="inline-flex -space-x-px gap-4 text-base h-10">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 w-[100px] ms-0 font-bold leading-tight bg-gray-seven rounded-lg !text-white text-sm"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-orange rounded-lg"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-six rounded-lg"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-[100px] px-4 h-10 leading-tight text-gray-500 bg-orange rounded-lg !text-white text-sm font-bold"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
