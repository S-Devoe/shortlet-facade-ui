import Button from "@/components/button/button";
import { Body, Heading } from "@/components/typography";
import { cn } from "@/lib/utils";
import React from "react";
import fcmb from "@/assets/images/fcmb.png";
import Image from "next/image";

const Card = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={cn("rounded-lg p-4", className)}>{children}</div>;
};

export default function WalletPage() {
  const balances = [
    {
      text: "Total Balance",
      amount: 20323,
      sub: "This is your total balance in your wallet",
      className: "bg-orange-light text-primary grow",
      button: (
        <Button
          className={"!text-base !py-4"}
          text={"Fund Wallet"}
          width="full"
        />
      ),
    },
    {
      text: "Available Balance",
      amount: 20323,
      sub: "This is your withdrawable balance in your wallet",
      className: "bg-brun-fainter text-primary grow",
      button: (
        <Button
          className={"!text-base !py-4"}
          text={"Withdraw Money"}
          width="full"
          variant={"outline"}
        />
      ),
    },
  ];

  const cards = [
    {
      name: "Madeline Smith",
      number: "•••• 7622",
      bank: "FCMB",
      icon: "/icons/mastercard.svg",
    },
    {
      name: "Madeline Smith",
      number: "•••• 7622",
      bank: "FCMB",
      icon: "/icons/mastercard.svg",
    },
    {
      name: "Madeline Smith",
      number: "•••• 7622",
      bank: "FCMB",
      icon: "/icons/mastercard.svg",
    },
  ];

  const accounts = [
    {
      name: "Madeline Smith",
      number: "•••• 7622",
      bank: "FCMB",
      icon: "/icons/mastercard.svg",
    },
    {
      name: "Madeline Smith",
      number: "•••• 7622",
      bank: "FCMB",
      icon: "/icons/mastercard.svg",
    },
    {
      name: "Madeline Smith",
      number: "•••• 7622",
      bank: "FCMB",
      icon: "/icons/mastercard.svg",
    },
  ];
  return (
    <div>
      <section className="md:flex gap-10 w-full">
        {balances.map(({ amount, button, className, sub, text }, idx) => (
          <div
            key={idx}
            className="grow max-w-[332px] mb-2 md:mb-0 text-center md:text-left"
          >
            <Card className={className}>
              <div>
                <div>
                  <p className="text-sm font-medium">{text}</p>
                  <Heading
                    level={4}
                    text={`$ ${amount.toLocaleString()}`}
                    className="mt-2"
                  />
                  <Body level={"caption"}>{sub}</Body>
                </div>
              </div>
            </Card>
            <div className="mt-8 hidden md:block">{button}</div>
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
      <section className="mt-16">
        <Heading level={5} text={"Payment Methods"} />
        <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map(({ bank, icon, name, number }, idx) => (
            <Card
              key={idx}
              className="flex items-start gap-4 bg-brun-primary-fainter py-2 md:py-6 px-4 md:px-10"
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="40"
                  viewBox="0 0 56 40"
                  fill="none"
                >
                  <rect width="56" height="40" rx="8" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.8489 27.0614H31.1494V13.6641H23.8489V27.0614Z"
                    fill="#FF5F00"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.3129 20.3641C24.3129 17.6461 25.5591 15.2256 27.4997 13.6654C26.0804 12.5244 24.2897 11.8438 22.3433 11.8438C17.7355 11.8438 14 15.6585 14 20.3641C14 25.0697 17.7355 28.8845 22.3433 28.8845C24.2897 28.8845 26.0804 28.2038 27.4997 27.0628C25.5591 25.5026 24.3129 23.0821 24.3129 20.3641Z"
                    fill="#EB001B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9993 20.3641C40.9993 25.0697 37.2638 28.8845 32.656 28.8845C30.7096 28.8845 28.9189 28.2038 27.4998 27.0628C29.4404 25.5026 30.6864 23.0821 30.6864 20.3641C30.6864 17.6461 29.4404 15.2256 27.4998 13.6654C28.9189 12.5244 30.7096 11.8438 32.656 11.8438C37.2638 11.8438 40.9993 15.6585 40.9993 20.3641Z"
                    fill="#F79E1B"
                  />
                </svg>
                <div className="flex flex-col justify-between">
                  <Body
                    level={"caption"}
                    text={`Card ${idx + 1}`}
                    className="!text-gray-five"
                  />
                  <p className="text-sm font-medium">{name}</p>
                </div>
              </div>
              <div className="text-end text-gray-three grow shrink-0">
                <Body level={"caption"} className="!text-gray-three">
                  {bank}
                </Body>
                <Body level={"caption"} className="!text-gray-three">
                  {number}
                </Body>
                <div className="cursor-pointer text-orange font-bold text-sm mt-1.5">
                  Remove card
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <Heading level={5} text={"My Withdrawal Accounts"} />
        <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {accounts.map(({ bank, icon, name, number }, idx) => (
            <Card
              key={idx}
              className="flex items-start gap-4 bg-orange-light py-2 md:py-6 px-4 md:px-10"
            >
              <div className="flex items-center gap-4">
                <Image width={56} src={fcmb} alt={"fcmb"} />
                <div className="flex flex-col justify-between">
                  <Body
                    level={"caption"}
                    text={`Primary Account`}
                    className="!text-gray-five"
                  />
                  <p className="text-sm font-medium">{name}</p>
                </div>
              </div>
              <div className="text-end text-gray-three grow shrink-0">
                <Body level={"caption"} className="!text-gray-three">
                  {bank}
                </Body>
                <Body level={"caption"} className="!text-gray-three">
                  {number}
                </Body>
                <div className="cursor-pointer text-orange font-bold text-sm mt-1.5">
                  Remove Account
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Button
          className="mt-8 !w-full md:w-auto"
          text={"Add Withdrawal Account"}
          width="small"
          height="large"
        />
      </section>
    </div>
  );
}
