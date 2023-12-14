"use client";
import Icon from "@/assets/icons.component";
import Button from "@/components/button/button";
import { Input, InputType } from "@/components/forms/inputs/input";
import { ThemeColors } from "@/constants/colors";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  country: z.string(),
  phone: z.string(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/
    ),
});

type FormValues = {
  name: string;
  email: string;
  country: string;
  phone: string;
  password: string;
};

export default function SignUpForm() {
  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(signupSchema),
  });

  const {
    watch,
    formState: { isValid },
    reset,
  } = methods;
  const password = watch("password") ?? "";
  const passwordRules = {
    uppercase: password.match(/[A-Z]/),
    lowercase: password.match(/[a-z]/),
    special: password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/),
    number: password.match(/[0-9]/),
  };
  return (
    <FormProvider {...methods}>
      <form className="my-4">
        <div>
          <Input
            name="name"
            type={InputType.text}
            placeholder="Name"
            className={"mb-4"}
            icon={
              <Icon
                name="userIcon"
                color={ThemeColors.grayFive.hex}
                className="w-8 h-8"
              />
            }
          />
          <Input
            name="email"
            type={InputType.email}
            placeholder="Email address"
            className={"mb-4"}
            icon={
              <Icon
                name={"emailIcon"}
                color={ThemeColors.grayFive.hex}
                className="h-8 w-8"
              />
            }
          />
          <Input
            name="country"
            type={InputType.text}
            placeholder="Country"
            className={"mb-4"}
          />
          <Input
            name="phone"
            type={InputType.phone}
            placeholder="Phone"
            className={"mb-4"}
            icon={
              <span className="text-sm pt-1.5 -ml-1 text-gray-five">+ 234</span>
            }
          />
          <Input
            name="password"
            type={InputType.password}
            placeholder="Password"
            icon={
              <Icon
                name="lockIcon"
                color={ThemeColors.grayFive.hex}
                className="h-8 w-8 text-gray-five"
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
          <Button type="button" width="full" text="Create Account" />
        </div>
      </form>
    </FormProvider>
  );
}
