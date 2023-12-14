import Button from "@/components/button/button";
import { Body, Heading } from "@/components/typography";
import React from "react";

export default function Buttons() {
  return (
    <div>
      <Heading text={"Buttons"} level={2} />
      <div className="pl-6">
        <div className="my-2">
          <Button
            text={"Primary"}
            type={"button"}
            width="large"
            height="medium"
          />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Button type={"{'button'}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Button
            text={"Secondary"}
            variant={"orangeOutline"}
            width="large"
            height="medium"
          />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Button variant={"{'orangeOutline'}"} /&gt;
          </code>
        </div>
      </div>
    </div>
  );
}
