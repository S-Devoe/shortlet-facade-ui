"use client";
import { Rating } from "@smastrom/react-rating";
import Hotel from "@/assets/images/hotel-img1.png";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { customRatingStyles } from "./rating-style";
import Textarea from "@/components/forms/textarea/textarea";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/button/button";

interface Props {
  setSection: Dispatch<SetStateAction<number>>;
}
const ReviewStage1 = ({ setSection }: Props) => {
  const [rating, setRating] = useState(1);
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setSection(2);
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className=" text-center font-serif text-[2rem] text-primary-lighter font-semibold ">
        Please review your stay
      </h1>
      <p className="text-[1rem] text-gray text-center font-normal">
        Kindly submit a review of your stay at Eko Atlantic Shortstays.
      </p>
      {/* card
       */}
      <div className="my-8 rounded-lg bg-nude p-[0.7rem] w-full max-w-[22rem] flex items-center gap-5 ">
        <div className="relative h-[5rem] w-[7rem] rounded-lg ">
          <Image
            src={Hotel}
            alt="img"
            fill
            sizes="100%"
            className="rounded-lg"
          />
        </div>
        <div className="text-black">
          <h2 className="text-[0.875rem] font-normal">Aremu’s</h2>
          <h3 className="font-bold text-[1rem]  ">Eko Atlantic Shortstays</h3>
          <p className="text-[0.75rem] font-normal text-gray-two ">
            Lagos, Nigeria
          </p>
        </div>
      </div>
      {/* rating  */}
      <div className="w-full flex justify-center ">
        <Rating
          style={{ maxWidth: 180 }}
          value={rating}
          onChange={setRating}
          itemStyles={customRatingStyles(16, 16)}
        />
      </div>
      <FormProvider {...methods}>
        <form
          className="w-full flex flex-col items-center gap-4 my-5"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Textarea name="review" placeholder="Enter mesage here" required />
          <Button
            type="submit"
            text="Submit"
            className="w-full max-w-[17rem] rounded-lg font-bold text-[1rem] py-[0.8rem]"
          />
        </form>
      </FormProvider>
    </section>
  );
};

export default ReviewStage1;
