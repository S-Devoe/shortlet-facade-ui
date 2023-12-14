import Button from '@/components/button/button-cva';
import React from 'react'

const ShortletYourPlace = () => {
  return (
    <section className="my-[2rem] w-full p-[2rem] rounded-[1rem] bg-lime">
      <h2 className="text-[2rem] font-[600] text-primary-lighter leading-[2.625rem] font-serif ">
        Shortlet your place
      </h2>
      <p className="text-[1rem] font-[400] text-primary  ">
        And earn passive income?
      </p>
      <Button className="max-w-[13rem] mt-3" type="button" text="Get Started" />
    </section>
  );
}

export default ShortletYourPlace