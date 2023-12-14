import BackBtn from "@/components/button/backButton";
import React from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:my-[4.5rem] mb-[6rem] md:mb-[4.5rem]">
      <BackBtn className="cursor-pointer" />
      <div className="mt-2 md:mt-10">{children}</div>
    </div>
  );
}
