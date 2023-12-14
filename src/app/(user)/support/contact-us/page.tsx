import BackBtn from "@/components/button/BackBtn";
import Container from "@/components/container/Container";
import PageHeader from "@/components/headers/PageHeader";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SMSIcon from "@/components/icons/navs/SMSIcon";

const ContactUsPage = () => {
  return (
    <Container className="">
      <BackBtn />
      <div className="mt-[2rem] mb-4 w-full bg-primary-lighter rounded-[1rem] p-[2.5rem] flex flex-col items-center justify-center ">
        <PageHeader
          header="Contact Us"
          headerClassName="text-white text-[3rem] font-[900] "
        />
        <p className="text-white text-[1rem] font-[600] leading-[1rem] ">
          Easily get in touch with us with the contact below
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {supportInfo.map((info, i) => (
          <div
            key={`info-${i + 1}`}
            className="text-primary flex items-center gap-2"
          >
            {info.icon}
            <h3 className="text-[1rem] font-[400] leading-[1rem] ">
              {info.title}
            </h3>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ContactUsPage;

const supportInfo = [
  {
    icon: <SMSIcon />,
    title: "support@shortletapp.com",
  },
  {
    icon: <PhoneIcon />,
    title: "+234-904-546-8759",
  },
];
