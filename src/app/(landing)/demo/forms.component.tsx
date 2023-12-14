"use client";
import Button from "@/components/button/button";
import { Input, InputType } from "@/components/forms/inputs/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Body, Heading } from "@/components/typography";
import React, { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";

export const demoSchema = z.object({
  sample: z.string().min(5).max(10),
});

export type Demo = z.infer<typeof demoSchema>;

export default function Forms() {
  const methods = useForm<FormData>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(demoSchema),
  });
  const { handleSubmit } = methods;
  return (
    <div>
      <Heading text={"Forms"} level={2} />
      <div className="pl-6">
        <div className="my-2">
          <Suspense fallback={<div>Loading...</div>}>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(() => console.log("here"))}
                noValidate
                className="flex flex-col gap-6"
              >
                <Input
                  name="sample"
                  label="Sample"
                  placeholder="Sample"
                  type={InputType.text}
                />
                <Button text="Submit" variant="default" type="submit" />
              </form>
            </FormProvider>
          </Suspense>
          <code className="block text-sm font-mono bg-gray/25 w-fit px-2 py-1">
            &lt;Input type={"{'primary'}"} /&gt;
          </code>
        </div>
      </div>
    </div>
  );
}
