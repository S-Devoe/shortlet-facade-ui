import Button from "@/components/button/button";
import ArrowCircleDownIcon from "@/components/icons/ArrowCircleDownIcon";
import { Body } from "@/components/typography";
import React from "react";
import atlantic from "@/assets/images/atlantic.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function TransactionsPage() {
  const transactions = [
    {
      status: "pending",
      amount: 123,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "failed",
      amount: 123,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "failed",
      amount: 123,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "success",
      amount: 123,
      date: "10/02/2023",
      name: "Eko Atlantic Stays",
      city: "Lagos",
      start: "11/1/2023",
      end: "12/21/2023",
      image: atlantic,
    },
    {
      status: "success",
      amount: 123,
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
                <div className="rounded-lg bg-gray-ten overflow-hidden p-4 w-20 h-20 relative">
                  <Image src={atlantic} alt="atlantic" fill={true} />
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
                    text={"Booking Payment"}
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
