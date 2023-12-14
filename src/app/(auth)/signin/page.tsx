import Button from "@/components/button/button";
import { Input, InputType } from "@/components/forms/inputs/input";
import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignInForm from "./signInForm.component";

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

const SignIn: React.FC<Props> = () => {
  return (
    <section>
      <div className="mb-12">
        <h1 className="font-serif font-semibold text-center text-[#322B8C] text-3xl">
          Welcome back!
        </h1>
        <p className="text-center">Sign in to your account.</p>
      </div>
      <div className="flex gap-5 justify-center">
        {Object.keys(Socials).map((value, index) =>
          React.cloneElement(Socials[value], { key: index })
        )}
      </div>
      <Divider className="text-[#575A65] text-sm">or use email</Divider>
      <SignInForm />
      <div className="w-fit mx-auto">
        <span>
          I&apos;m new,{" "}
          <Link className="text-orange hover:text-orange-dark" href="signup">
            Sign me up
          </Link>
        </span>
      </div>
    </section>
  );
};

export default SignIn;
