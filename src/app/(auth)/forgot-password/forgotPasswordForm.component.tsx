"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, InputType } from "@/components/forms/inputs/input";
import Button from "@/components/button/button";
import Icon from "@/assets/icons.component";
import { ThemeColors } from "@/constants/colors";

const forgotSchema = z.object({
  email: z.string().email(),
});
export default function ForgotPasswordForm() {
  const { push } = useRouter();
  const methods = useForm<FormData>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(forgotSchema),
  });

  const {
    getValues,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async (event: any) => {
    push("/forgot-password/verify");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
        <fieldset className="grow w-full md:w-fit">
          <FormProvider {...methods}>
            <form className="my-4" onSubmit={onSubmit} noValidate>
              <div>
                <Input
                  name="email"
                  type={InputType.email}
                  placeholder="Email address"
                  className="mb-4"
                  icon={
                    <Icon
                      name={"emailIcon"}
                      color={ThemeColors.grayFive.hex}
                      className="h-8 w-8"
                    />
                  }
                />
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
