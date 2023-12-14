"use client";
import BackBtn from "@/components/button/BackBtn";
import Button from "@/components/button/button-cva";
import { Input, InputType } from "@/components/forms/inputs/input";
import PageHeader from "@/components/headers/PageHeader";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SmsIcon from "@/components/icons/SmsIcon";
import { Avatar } from "antd";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  onClose: () => void;
  setSection: (_: number) => void;
}

const EditProfileModalSection = ({ onClose, setSection }: Props) => {
  const methods = useForm({
    defaultValues: {
      email: "madison@emailsample.co",
      phone: "+234 7625 562 653",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    setSection(2);
  };
  return (
    <section>
      <BackBtn onClick={onClose} />
      <div className="mt-6">
        <PageHeader
          headerClassName="text-[2rem] text-primary-lighter"
          header="Edit Profile"
        />
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <Avatar size={96} src="/profile/Avatar.png" alt="profile-img" />
            <Input
              icon={<SmsIcon />}
              name="email"
              required
              placeholder="Enter your email address"
              type={InputType.email}
              variant="style-two"
            />
            <Input
              icon={<PhoneIcon />}
              name="phone"
              placeholder="Enter your phone number"
              type={InputType.tel}
              containerClassName="flex items-center"
              variant="style-two"
              required
            />
            <Button
              className="py-[0.75rem] mt-2"
              type="submit"
              text="Save Changes"
            />
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default EditProfileModalSection;
