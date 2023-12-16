import BackBtn from "@/components/button/BackBtn";
import Container from "@/components/container/Container";
import BookingPageContents from "./BookingPageContents";

const SingleBookingPage = () => {
  return (
    <Container className="flex flex-col gap-[2rem]">
      <BackBtn />
      <BookingPageContents />
    </Container>
  );
};

export default SingleBookingPage;
