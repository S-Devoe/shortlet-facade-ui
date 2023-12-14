import React from "react";
import ForgotPasswordForm from "./forgotPasswordForm.component";
import { Body, Heading } from "@/components/typography";

interface Props {}

const ForgotPassword: React.FC<Props> = () => {
  return (
    <section>
      <div className="mb-12">
        <Heading
          level={4}
          className="text-center text-primary-lighter"
          text="Forgot Password"
        />
        <Body
          level={2}
          className="text-center text-gray-three"
          text="Please enter your email address below to receive your password reset instructions"
        />
      </div>
      <ForgotPasswordForm />
    </section>
  );
};

export default ForgotPassword;
