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
import { usePathname } from "next/navigation";
import BackBtn from "@/components/button/backButton";

interface Props {
  children: React.ReactNode;
}

const MyComponent: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const isSubRoute = pathname.split("/").filter((x) => !!x).length > 1;
  const backRoutes = ["/forgot-password"];
  return (
    <main className="bg-white w-full">
      <div className="w-full py-36">
        {(isSubRoute || backRoutes.includes(pathname)) && (
          <BackBtn className="ml-6 md:ml-[150px] cursor-pointer" />
        )}
        <div className="mx-6 md:mx-auto md:max-w-[40rem] md:px-32 my-14 bg-[#FFEFEB] px-6 pt-4 pb-10 md:pb-20 md:pt-20 rounded-3xl">
          {children}
        </div>
      </div>
    </main>
  );
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);
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
          <div className="text-[#322B8C]">
            <Logo color={"currentColor"} />
          </div>
          <div className="hidden md:block">
            <Flex gap={16} align={"center"}>
              <Link href={"/signin"}>
                <Button
                  type="button"
                  variant={"orangeOutline"}
                  width="large"
                  height="small"
                  className={["rounded", "leading-normal", "font-bold"]}
                  text={"Sign In"}
                />
              </Link>
              <Link href={"/signup"}>
                <Button
                  type="button"
                  width="large"
                  height="small"
                  className={[
                    "rounded",
                    "leading-normal",
                    "font-bold",
                    "border",
                  ]}
                  text={"Get Started"}
                />
              </Link>
            </Flex>
          </div>
          <div className="block md:hidden">
            <BurgerComponent onClick={() => setOpen(true)} />
          </div>
        </Flex>
      </header>
      <MyComponent>{children}</MyComponent>
      <Footer />
      {open && <Menu onClick={() => setOpen(false)} />}
    </>
  );
}
