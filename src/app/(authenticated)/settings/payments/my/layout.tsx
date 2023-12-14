import React from "react";
import Nav from "./nav.component";
export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
