"use client";

import Link from "next/link";
import ArrowSquareRight from "@/components/icons/ArrowSquareRight";
import Badge from "@/components/badge/badge";

interface Props {
  icon?: JSX.Element;
  title: string;
  link: string;
  badge?: string;
}
const LinkWithBorder = ({ icon, title, badge, link }: Props) => {
  return (
    <Link
      href={link ?? ""}
      className="border-b border-gray-six flex items-center justify-between py-4"
    >
      <div className="flex items-center gap-1 text-gray-five ">
        <div className="w-[2rem] shrink-0 ">{icon}</div>
        <h4 className="text-black-six text-[1rem] font-[500] ">{title}</h4>
        {badge && <Badge variant="success" className="ml-2" text={badge} />}
      </div>
      <div className="text-gray-five">
        <ArrowSquareRight />
      </div>
    </Link>
  );
};

export default LinkWithBorder;
