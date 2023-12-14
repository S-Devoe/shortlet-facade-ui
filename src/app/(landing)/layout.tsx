"use client";
import { clsx } from "clsx";
import Button from "@/components/button/button";
import Logo from "@/assets/logo.component";
import Link from "next/link";
import { Flex } from "antd";
import Footer from "@/components/footer/footer";
import React from "react";
import BurgerComponent from "@/components/burger/burger.component";
import Menu from "@/components/mobile/menu.component";
import { usePathname, useSearchParams } from "next/navigation";
import { Whatsapp } from "@/constants/whatsapp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const section = searchParams.get("s");
  React.useEffect(() => {
    setOpen(false);
  }, [pathname, section]);
  const [offset, setOffset] = React.useState(0);
  const handleOffset = React.useCallback((v: number) => {
    setOffset(v);
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      handleOffset(window.scrollY);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleOffset]);

  return (
    <>
      <header
        className={clsx(
          "w-full",
          "px-2",
          "sm:px-12",
          "lg:px-36",
          "py-10",
          {
            "text-lime": !["/about", "/demo"].includes(pathname) || offset > 40,
          },
          "fixed",
          "top-0 z-30",
          "bg-transparent"
        )}
      >
        <div
          className="w-full h-full bg-primary z-30 absolute top-0 left-0"
          style={{
            opacity: offset > 90 ? 1 : offset / 90,
          }}
        ></div>
        <Flex justify="space-between" align="center">
          <div className="hidden md:block">
            <Flex gap={24} align={"center"}>
              <Link className="relative z-40" href="/about">
                About
              </Link>
              <Link className="relative z-40" href="/about?s=faq">
                FAQ
              </Link>
            </Flex>
          </div>
          <Link
            href={"/"}
            className={clsx(
              { "!text-white": !["/about"].includes(pathname) || offset > 40 },
              "relative z-40"
            )}
          >
            <Logo color={"currentColor"} />
          </Link>
          <div className="hidden md:block relative z-40">
            <Flex gap={16} align={"center"}>
              <Link href={Whatsapp.url}>
                <Button
                  type="button"
                  className={[
                    "bg-orange",
                    "px-5",
                    "py-3",
                    "rounded",
                    "text-sm text-white",
                  ]}
                  text={"Get Started"}
                />
              </Link>
            </Flex>
          </div>
          <div className="block md:hidden relative z-40">
            <BurgerComponent onClick={() => setOpen(true)} />
          </div>
        </Flex>
      </header>
      <main className="bg-white w-full">{children}</main>
      <Footer />
      {open && <Menu onClick={() => setOpen(false)} action={() => {}} />}
    </>
  );
}
