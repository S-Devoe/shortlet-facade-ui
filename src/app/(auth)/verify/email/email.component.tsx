"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input, InputType } from "@/components/forms/inputs/input";
import Button from "@/components/button/button";
import { MdEmail, MdLock } from "react-icons/md";
import { Otp } from "@/components/forms/inputs/otp";

const signinSchema = z.object({
  otp: z.string().length(4),
});

type FormValues = {
  otp: string;
};
export default function VerifyEmailForm() {
  const { push } = useRouter();
  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(signinSchema),
  });

  const { register, getValues, setValue, watch, reset } = methods;
  const OTP = watch("otp") ?? "";
  const isValid = OTP.length === 4;
  const onSubmit = async (event: any) => {
    console.log(getValues());
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <fieldset className="mx-auto grow w-full md:w-fit">
        <FormProvider {...methods}>
          <form className="my-4" onSubmit={onSubmit} noValidate>
            <div className="mb-12">
              <input
                {...register("otp", {
                  required: "required",
                })}
                type="text"
                className="hidden"
              />
              <Otp setValue={(v: string) => setValue("otp", v)} />
            </div>
            <div className="w-full text-white">
              <Button
                className={["py-4 text-white shrink-0"]}
                text={"Continue"}
                type={"submit"}
                width="full"
                onClick={onSubmit}
                disabled={!isValid}
              />
            </div>
          </form>
        </FormProvider>
      </fieldset>
    </div>
  );
}
