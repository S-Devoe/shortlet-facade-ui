import { Body, Heading } from "@/components/typography";
import React from "react";

export default function Typography() {
  return (
    <div>
      <Heading text={"Typography"} level={2} />
      <div className="pl-6">
        <div className="my-2">
          <Heading text={"Heading 1"} level={1} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Heading level={"{1}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Heading text={"Heading 2"} level={2} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Heading level={"{2}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Heading text={"Heading 3"} level={3} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Heading level={"{3}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Heading text={"Heading 4"} level={4} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Heading level={"{4}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Heading text={"Heading 5"} level={5} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Heading level={"{5}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Heading text={"Heading 6"} level={6} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Heading level={"{6}"} /&gt;
          </code>
        </div>
      </div>
      <div className="pl-6">
        <div className="my-2">
          <Body text={"Body 1"} level={1} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Body level={"{1}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Body text={"Body 2"} level={2} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Body level={"{2}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Body text={"Subtext"} level={"subtext"} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Body level={"{subtext}"} /&gt;
          </code>
        </div>
        <div className="my-2">
          <Body text={"Caption"} level={"caption"} />
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Body level={"{caption}"} /&gt;
          </code>
        </div>
      </div>
    </div>
  );
}
