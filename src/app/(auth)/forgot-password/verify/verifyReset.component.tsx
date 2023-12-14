"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/button/button";
import { Otp } from "@/components/forms/inputs/otp";

const verifySchema = z.object({
  otp: z.string().length(4),
});

type FormValues = {
  otp: string;
};
export default function VerifyForgotPasswordForm() {
  const { push } = useRouter();
  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(verifySchema),
  });

  const { getValues, register, setValue, watch } = methods;
  const OTP = watch("otp") ?? "";

  const isValid = OTP.length === 4;

  const onSubmit = async () => {
    push("/forgot-password/reset");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
        <fieldset className="grow w-full md:w-fit">
          <FormProvider {...methods}>
            <form className="my-4" onSubmit={onSubmit} noValidate>
              <div className="mb-12">
                <input
                  {...register("otp", {
                    required: "required",
                  })}
                  type="text"
                  className="hidden"
                  value={getValues("otp")}
                  onChange={() => {}}
                />
                <Otp setValue={(v: string) => setValue("otp", v)} />
              </div>

              <div className="w-full text-white">
                <Button
                  className={["py-4 text-white shrink-0"]}
                  text={"Continue"}
                  type={"button"}
                  width="full"
                  onClick={onSubmit}
                  disabled={!isValid}
                />
              </div>
            </form>
          </FormProvider>
        </fieldset>
      </div>
    </div>
  );
}
