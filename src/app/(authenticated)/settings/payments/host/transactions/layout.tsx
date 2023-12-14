import React from "react";
import Nav from "./nav.component";
import { Heading } from "@/components/typography";
export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Heading
        level={5}
        text={"Your Transactions"}
        className="!font-serif mt-2 mb-4 !font-semibold"
      />
      <Nav />
      {children}
    </div>
  );
}
