import BackBtn from "@/components/button/BackBtn";
import Container from "@/components/container/Container";
import SupportChat from "./component/SupportChat";

const SupportChatSection = () => {
  return (
    <Container className="h-full" >
      <BackBtn />
      <SupportChat />
    </Container>
  );
};

export default SupportChatSection;
