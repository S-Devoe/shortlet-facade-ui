import Button from "@/components/button/button";
import { Body, Heading } from "@/components/typography";
import { cn } from "@/lib/utils";
import React from "react";
import atlantic from "@/assets/images/atlantic.png";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

const Card = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={cn("rounded-lg p-4", className)}>{children}</div>;
};

export default function HostPage() {
  const balances = [
    {
      text: "Total Balance",
      amount: 20323,
      sub: "This is your total balance in your wallet",
      className: "bg-white text-primary grow",
      button: (
        <Button
          className={"!text-base !py-4"}
          text={"Withdraw money"}
          width="full"
        />
      ),
    },
    {
      text: "Available Balance",
      amount: 20323,
      sub: "This is your withdrawable balance in your wallet",
      className: "bg-white text-primary grow",
    },
  ];

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
    <div className="-mx-5">
      <section className="p-10 rounded-2xl md:flex bg-lime gap-10 w-full">
        {balances.map(({ amount, button, className, sub, text }, idx) => (
          <div key={idx} className="grow max-w-[332px] mb-4 md:mb-0">
            <Card className={className}>
              <div className="flex justify-between items-center">
                <div className="text-center md:text-left">
                  <p className="text-sm font-medium">{text}</p>
                  <Heading
                    level={4}
                    text={`$ ${amount.toLocaleString()}`}
                    className="mt-2 !font-sans"
                  />
                  <Body level={"caption"}>{sub}</Body>
                </div>
              </div>
            </Card>
            {!!button && <div className="mt-8 hidden md:block">{button}</div>}
          </div>
        ))}
        <div className="w-fit mx-auto">
          <Button
            className={
              "!text-base !py-4 md:hidden w-fit mx-auto !rounded-xl flex justify-center"
            }
            text={"Withdraw money"}
            height="small"
            width="small"
          />
        </div>
      </section>
      <section className="mt-16 px-6">
        <Heading level={5} text={"Payout Accounts"} />
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Button
            className={"!text-base !py-4"}
            text={"Add Payout Account"}
            width="full"
          />
        </div>
      </section>
      <section className="mt-16 px-6">
        <Heading level={5} text={"Transactions"} />
        <div className="mt-4">
          {transactions
            .slice(0, 2)
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
                      text={city}
                      className="!text-gray-five !text-[0.625rem]"
                    />
                    <Body
                      level={2}
                      text={
                        format(start, "LLL dd") + " - " + format(end, "LLL dd")
                      }
                      className="!text-gray-five !text-[0.625rem]"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Link href="/settings/payments/host/transactions">
          <Button
            className="mt-6 !w-full !md:w-auto md:mt-8"
            text={"View All Transactions"}
            width="large"
            height="large"
          />
        </Link>
      </section>
    </div>
  );
}
