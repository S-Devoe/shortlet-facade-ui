"use client";
import { clsx } from "clsx";
import Button from "@/components/button/button";
import Logo from "@/assets/logo.component";
import Link from "next/link";
import { Flex } from "antd";
import Footer from "@/components/footer/footer";
import BurgerComponent from "@/components/burger/burger.component";
import React from "react";
import Menu from "@/components/mobile/menu.component";
import { usePathname, useSearchParams } from "next/navigation";
import { ComingSoonContext } from "../context/comingSoon.context";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const MyComponent: React.FC<Props> = ({ children, onClick }) => {
  return (
    <main className="bg-white w-full">
      <ComingSoonContext.Provider value={{ onClick }}>
        <div className="w-full">{children}</div>
      </ComingSoonContext.Provider>
    </main>
  );
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const onClick = () => {
    setOpen(false);
    if (ref.current != null) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      ref.current.focus();
    }
  };
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const section = searchParams.get("s");
  React.useEffect(() => {
    setOpen(false);
  }, [pathname, section]);
  return (
    <>
      <header
        className={clsx(
          "w-full",
          "px-2",
          "sm:px-12",
          "lg:px-36",
          "py-10",
          "text-[#322B8C]",
          "absolute",
          "top-0 z-30",
          "bg-transparent"
        )}
      >
        <Flex justify="space-between" align="center">
          <div className="hidden md:block">
            <Flex gap={24} align={"center"}>
              <Link href="/about">About</Link>
              <Link href="/about?s=faq">FAQ</Link>
            </Flex>
          </div>
          <Link href={"/"} className="text-[#322B8C]">
            <Logo color={"currentColor"} />
          </Link>
          <div className="hidden md:block">
            <Flex gap={16} align={"center"}>
              <Button
                type={"button"}
                className={[
                  "bg-orange",
                  "px-5",
                  "py-3",
                  "rounded",
                  "text-sm text-white",
                ]}
                onClick={onClick}
                text={"Join the Waitlist"}
              />
            </Flex>
          </div>
          <div className="block md:hidden">
            <BurgerComponent onClick={() => setOpen(true)} />
          </div>
        </Flex>
      </header>
      <MyComponent onClick={onClick}>{children}</MyComponent>
      <Footer type="coming-soon" reference={ref} />
      {open && <Menu onClick={() => setOpen(false)} action={onClick} />}
    </>
  );
}
