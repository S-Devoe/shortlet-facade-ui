import React from "react";
import StoreProvider from "../store/storeProvider";

export default async function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <main className="mx-auto max-w-3xl">{children}</main>
    </StoreProvider>
  );
}
