"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input, InputType } from "@/components/forms/inputs/input";
import Button from "@/components/button/button";
import { MdEmail, MdLock } from "react-icons/md";
import Icon from "@/assets/icons.component";
import { ThemeColors } from "@/constants/colors";

const signinSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export default function SignInForm() {
  const { push } = useRouter();
  const methods = useForm<FormData>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(signinSchema),
  });

  const {
    getValues,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async (event: any) => {
    console.log(getValues());
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

                <Input
                  name="password"
                  type={InputType.password}
                  placeholder="Password"
                  icon={<MdLock className="h-8 w-8 text-[#6E717C]" />}
                />
              </div>
              <div className="w-fit ml-auto mt-2 mb-6">
                <Link
                  href={"/forgot-password"}
                  className="text-orange cursor-pointer hover:text-orange-dark text-sm"
                >
                  Forgot password
                </Link>
              </div>
              <div className="w-full text-white">
                <Button
                  className={["py-4 text-white shrink-0"]}
                  text={"Login"}
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
    </div>
  );
}
