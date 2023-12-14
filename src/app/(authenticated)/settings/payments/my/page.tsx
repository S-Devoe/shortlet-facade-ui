"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function MyPage() {
  const { replace } = useRouter();
  React.useEffect(() => {
    replace("/settings/payments/my/wallet");
  }, []);
  return <div></div>;
}
