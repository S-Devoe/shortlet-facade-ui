"use client";
import React, { useEffect, useRef } from "react";
import ReservationComponent from "./reservation.component";
import CustomDisclosure from "@/components/disclosure/disclosure.component";
import { useSearchParams } from "next/navigation";
import { Heading } from "@/components/typography";

const faqs = [
  {
    question: "Where are you located",
    answer: `If you're unhappy with your purchase for any reason,
  email us within 90 days and we'll refund you in full, no
  questions asked.`,
  },
  {
    question: "Who is eligible to apply for income protection?",
    answer: `We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos..`,
  },
  {
    question:
      "What other options are available to me within my yearly subscription?",
    answer: `We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos..`,
  },
  {
    question:
      "What other options are available to me within my yearly subscription?",
    answer: `We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos..`,
  },
  {
    question:
      "What other options are available to me within my yearly subscription?",
    answer: `We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos..`,
  },
];

export default function CitiesAboutComponent() {
  const ref = useRef<HTMLElement>(null);
  const queryParams = useSearchParams();
  const section = queryParams?.get("s");
  useEffect(() => {
    if (section === "faq") {
      if (ref.current != null)
        ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);
  return (
    <>
      <section className="bg-jasmine-fainter md:pt-14 pb-10 px-5 md:px-32 text-center">
        <Heading
          level={4}
          className="font-serif text-center text-4xl md:text-5xl font-semibold"
        >
          Hassle-free holiday & short stay homes for Everyone.
        </Heading>
        <div className="mt-8 md:mx-20">
          <span className="leading-8 text-lg">
            Are you dreaming of a hassle-free holiday? Look no further than our
            short stay homes for everyone. We pride ourselves on providing
            comfortable and convenient accommodations that cater to your every
            need. Our well-equipped homes offer a cozy and inviting atmosphere,
            perfect for unwinding after a day of exploring. Whether you&apos;re
            traveling solo, with family, or friends, our homes are designed to
            accommodate all. From spacious living areas to fully equipped
            kitchens, we&apos;ve thought of everything to ensure your stay is as
            comfortable as possible. Plus, our prime locations offer easy access
            to nearby attractions and amenities, making your vacation even more
            enjoyable. So why wait? Book your stay with us today and experience
            a truly hassle-free holiday that you&apos;ll cherish forever. Get
            ready to relax, rejuvenate, and create unforgettable memories. We
            can&apos;t wait to welcome you!
          </span>
        </div>
      </section>
      <section className="bg-jasmine-fainter bg-home-hero bg-cover md:bg-contain bg-no-repeat bg-right py-20 md:px-24">
        <div className="mx-auto md:mx-0 w-fit">
          <ReservationComponent />
        </div>
      </section>
      <section className="bg-white py-32 px-5 md:px-32" ref={ref}>
        <Heading
          level={4}
          className="font-serif text-4xl md:text-5xl font-semibold pb-8"
        >
          Frequently Asked Questions
        </Heading>

        <CustomDisclosure faqs={faqs} />
      </section>
    </>
  );
}
