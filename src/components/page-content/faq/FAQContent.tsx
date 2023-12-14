import Accordion from "@/components/accordion";
import { FAQ } from "@/components/accordion/accordion-type";
import BackBtn from "@/components/button/BackBtn";
import Container from "@/components/container/Container";
import PageHeader from "@/components/headers/PageHeader";

const FAQContent = () => {
  return (
    <Container>
      <BackBtn className="my-[2.5rem]" />
      <PageHeader header="FAQs" />
      <Accordion faqs={faqs} containerClassName="mt-4" />
    </Container>
  );
};

export default FAQContent;

const faqs: FAQ[] = [
  {
    id: 1,
    title: "Where are you located?",
    body: "We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos.",
  },
  {
    id: 2,
    title: "Who is eligible to apply for income protection?",
    body: "We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos.",
  },
  {
    id: 3,
    title:
      "What other options are available to me within my yearly subscription?",
    body: "We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos.",
  },
  {
    id: 4,
    title:
      "What other options are available to me within my yearly subscription?",
    body: "We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos.",
  },
  {
    id: 5,
    title:
      "What other options are available to me within my yearly subscription?",
    body: "We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos.",
  },
  {
    id: 6,
    title:
      "What other options are available to me within my yearly subscription?",
    body: "We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos We are currently only open to employees with companies headquartered in Lagos.",
  },
  // Add more FAQ items as needed
];
