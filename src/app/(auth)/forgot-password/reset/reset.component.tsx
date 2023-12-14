"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, InputType } from "@/components/forms/inputs/input";
import Button from "@/components/button/button";
import Icon from "@/assets/icons.component";
import { ThemeColors } from "@/constants/colors";
import clsx from "clsx";
import { IoIosCheckmarkCircle } from "react-icons/io";

const resetSchema = z.object({
  password: z.string(),
  confirmPassword: z.string(),
});

type FormValues = {
  password: string;
  confirmPassword: string;
};
export default function ResetPasswordForm() {
  const { push } = useRouter();
  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(resetSchema),
  });

  const {
    getValues,
    formState: { isValid },
    reset,
    watch,
  } = methods;
  const password = watch("password") ?? "";
  const passwordRules = {
    uppercase: password.match(/[A-Z]/),
    lowercase: password.match(/[a-z]/),
    special: password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/),
    number: password.match(/[0-9]/),
  };

  const onSubmit = async (event: any) => {
    // push("/forgot-password/verify");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
        <fieldset className="grow w-full md:w-fit">
          <FormProvider {...methods}>
            <form className="my-4" onSubmit={onSubmit} noValidate>
              <div>
                <Input
                  name="password"
                  type={InputType.password}
                  placeholder="Password"
                  className="mb-4"
                  icon={
                    <Icon
                      name={"lockIcon"}
                      color={ThemeColors.grayFive.hex}
                      className="h-8 w-8"
                    />
                  }
                />
                <Input
                  name="confirmPassword"
                  type={InputType.password}
                  placeholder="Confirm Password"
                  className="mb-4"
                  icon={
                    <Icon
                      name={"lockIcon"}
                      color={ThemeColors.grayFive.hex}
                      className="h-8 w-8"
                    />
                  }
                />
              </div>
              <div className="w-fit mt-2 mb-6">
                <p className="text-gray-five text-sm">
                  Please make sure your password contains:
                </p>
                <div
                  className={clsx("flex gap-2 text-sm items-center my-2", {
                    "text-gray-six": !passwordRules.uppercase,
                    "text-brun-light": passwordRules.uppercase,
                  })}
                >
                  <span className="">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span>An uppercase character</span>
                </div>
                <div
                  className={clsx("flex gap-2 text-sm items-center my-2", {
                    "text-gray-six": !passwordRules.lowercase,
                    "text-brun-light": passwordRules.lowercase,
                  })}
                >
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  <span>A lowercase character</span>
                </div>
                <div
                  className={clsx("flex gap-2 text-sm items-center my-2", {
                    "text-gray-six": !passwordRules.special,
                    "text-brun-light": passwordRules.special,
                  })}
                >
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  <span>A Special character (ex: @#$%#@#)</span>
                </div>
                <div
                  className={clsx("flex gap-2 text-sm items-center my-2", {
                    "text-gray-six": !passwordRules.number,
                    "text-brun-light": passwordRules.number,
                  })}
                >
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  <span>A Number</span>
                </div>
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
