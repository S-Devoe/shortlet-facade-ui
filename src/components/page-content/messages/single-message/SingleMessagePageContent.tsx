import BackBtn from "@/components/button/BackBtn";
import Container from "@/components/container/Container";
import MessageDetails from "./components/MessageDetails";

const SingleMessagePageContent = () => {
  return (
    <Container className="h-full">
      <BackBtn />
      <MessageDetails />
    </Container>
  );
};

export default SingleMessagePageContent;
