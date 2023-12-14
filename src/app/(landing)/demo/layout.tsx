import React from "react";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-12 bg-white min-h-screen py-32">{children}</div>;
}
