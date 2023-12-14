import Image from "next/image";
import GuyPic from "@/assets/home/guy.svg";
import React from "react";

export default function Guy({ width = 500 }: { width?: number }) {
  return <Image src={GuyPic} alt="Guy" width={width} height={width} />;
}
