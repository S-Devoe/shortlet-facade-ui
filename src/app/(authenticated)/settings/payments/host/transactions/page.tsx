"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function MyPage() {
  const { replace } = useRouter();
  React.useEffect(() => {
    replace("/settings/payments/host/transactions/bookings");
  }, []);
  return <div></div>;
}
