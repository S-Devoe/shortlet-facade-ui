"use client";
import BackBtn from "@/components/button/BackBtn";
import Button from "@/components/button/button-cva";
import { Otp } from "@/components/forms/inputs/otp";
import PageHeader from "@/components/headers/PageHeader";
import { useState } from "react";

interface Props {
  setSection: (_: number) => void;
}

const EditProfileOtpSection = ({ setSection }: Props) => {
  const [otp, setOtp] = useState<any>(null);

  const handleSubmit = () => {
    console.log(otp);
    if (otp.length >= 4) {
      setSection(3);
    }
  };

  return (
    <section>
      <BackBtn onClick={() => setSection(1)} />
      <div className="mt-6">
        <PageHeader
          headerClassName="text-[2rem] text-primary-lighter"
          header="4 Digit Code"
        />
        <p className="text-[#444854] text-[1rem] font-normal leading-[1.625rem] ">
          Please enter the code we sent to your phone number
          <span className="text-grayBlack"> madison@emailsample.co</span>
        </p>
        <div className="flex flex-col gap-4 items-center mt-5 ">
          <Otp setValue={(v: string | number) => setOtp(v)} />
          {otp?.length >= 4 && (
            <p className="text-[0.875rem] text-center font-normal text-brun ">
              Great Job!
            </p>
          )}
          <Button
            onClick={handleSubmit}
            className="py-[0.8rem] mt-4 "
            text="Save Changes"
          />
        </div>
      </div>
    </section>
  );
};

export default EditProfileOtpSection;
