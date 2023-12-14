import React from "react";
import ForgotPasswordForm from "./reset.component";
import { Body, Heading } from "@/components/typography";

interface Props {}

const ForgotPassword: React.FC<Props> = () => {
  return (
    <section>
      <div className="mb-12">
        <Heading
          level={4}
          className="text-center text-primary-lighter"
          text="Create New Password"
        />
        <Body
          level={2}
          className="text-center text-gray-three"
          text="Please create a new password"
        />
      </div>
      <ForgotPasswordForm />
    </section>
  );
};

export default ForgotPassword;
