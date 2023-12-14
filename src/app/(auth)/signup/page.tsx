import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignUpForm from "./SignUpForm";

interface Props {}

interface SocialProps {
  icon: React.ReactNode;
}

const Social: React.FC<SocialProps> = ({ icon }) => (
  <div className="rounded-full bg-white py-2 px-2 w-fit">{icon}</div>
);

const Socials: Record<string, React.ReactElement> = {
  Google: <Social icon={<FaFacebook className="text-[#4285F4] h-8 w-8" />} />,
  Facebook: <Social icon={<FcGoogle className="h-8 w-8" />} />,
  Twitter: <Social icon={<FaApple className="h-8 w-8" />} />,
};

const SignUp: React.FC<Props> = () => {
  return (
    <section>
      <div className="mb-12">
        <h1 className="font-serif font-semibold text-center text-[#322B8C] text-3xl">
          Create Account
        </h1>
        <p className="text-center">Please fill in the details below</p>
      </div>
      <SignUpForm />

      <div className="w-fit mx-auto mt-4 mb-5">
        <span>
          I have an account,{" "}
          <Link className="text-orange hover:text-orange-dark" href="signin">
            Log in
          </Link>
        </span>
      </div>
      <Divider className="text-[#575A65] text-sm">or sign up with</Divider>
      <div className="flex gap-5 justify-center">
        {Object.keys(Socials).map((value, index) =>
          React.cloneElement(Socials[value], { key: index })
        )}
      </div>
    </section>
  );
};

export default SignUp;
