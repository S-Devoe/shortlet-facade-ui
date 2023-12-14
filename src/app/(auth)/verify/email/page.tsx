import Link from "next/link";
import React from "react";
import VerifyEmailForm from "./email.component";
import Icon from "@/assets/icons.component";
import { ThemeColors } from "@/constants/colors";

interface Props {}

const VerifyEmail: React.FC<Props> = () => {
  return (
    <section>
      <div className="mb-2">
        <h1 className="font-serif font-semibold text-center text-primary-lighter text-3xl mb-2">
          4 Digit Code
        </h1>
        <p className="text-center text-gray-three mb-2">
          Please enter the code we sent to your email address
        </p>
        <p className="text-center text-primary-darker font-medium">
          madeline@gmail.com
        </p>
      </div>
      <VerifyEmailForm />
      <div className="w-fit mx-auto flex gap-2">
        <span>
          <Icon name="clockIcon" color={ThemeColors.grayFive.hex} />
        </span>
        <span className="text-gray-five">Resend codes in 00:30</span>
      </div>
    </section>
  );
};

export default VerifyEmail;
