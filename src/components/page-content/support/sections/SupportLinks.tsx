import HeadphoneIcon from "@/components/icons/HeadphoneIcon";
import MessageNotifIcon from "@/components/icons/MessageNotifIcon";
import MessageQuestionIcon from "@/components/icons/MessageQuestionIcon";
import LinkWithBorder from "@/components/link/LinkWithBorder";
import React from "react";

const SupportLinks = () => {
  return (
    <div className="flex flex-col gap-2">
      {supportLinks.map((link, i) => (
        <LinkWithBorder
          title={link.title}
          icon={link.icon}
          link={link.link}
          key={`link-${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SupportLinks;

const supportLinks = [
  {
    icon: <MessageQuestionIcon />,
    title: "FAQs",
    link: "/faq",
  },
  {
    icon: <MessageNotifIcon />,
    title: "Support Chat",
    link: "/support/chat",
  },
  {
    icon: <HeadphoneIcon />,
    title: "Contact Us",
    link: "/support/contact-us",
  },
];
