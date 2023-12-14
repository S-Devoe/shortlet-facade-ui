import React from "react";
import ForgotPasswordForm from "./verifyReset.component";
import { Body, Heading } from "@/components/typography";

interface Props {}

const ForgotPassword: React.FC<Props> = () => {
  return (
    <section>
      <div className="mb-12">
        <Heading
          level={4}
          className="text-center text-primary-lighter"
          text="4 Digit Code"
        />
        <Body level={2} className="text-center text-gray-three">
          Please enter the reset code we&amp;ve sent to your email address{" "}
          <span>madeline@boffer.co</span>
        </Body>
      </div>
      <ForgotPasswordForm />
    </section>
  );
};

export default ForgotPassword;
