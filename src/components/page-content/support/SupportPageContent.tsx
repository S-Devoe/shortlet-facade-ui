import BackBtn from "@/components/button/BackBtn";
import Container from "@/components/container/Container";
import PageHeader from "@/components/headers/PageHeader";
import React from "react";
import SupportLinks from "./sections/SupportLinks";

const SupportPageContent = () => {
  return (
    <Container>
      <BackBtn />
      <section className="mt-7 flex flex-col gap-7 ">
        <PageHeader header="Support" />
        <SupportLinks />
      </section>
   
    </Container>
  );
};

export default SupportPageContent;
