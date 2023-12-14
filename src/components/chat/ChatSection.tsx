"use client";
import Person from "@/assets/images/user-img.png";
import SendIcon from "@/components/icons/SendIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  header: string;
  chatIcon?: JSX.Element;
  containerClassName?: string;
}

const ChatSection = ({ header, chatIcon, containerClassName }: Props) => {
  const userId = 1;
  const chatSectionRef = useRef<any>(null);

  useEffect(() => {
    // Scroll to the last chat element when the component mounts
    const chatSection = chatSectionRef.current;
    if (chatSection) {
      const lastChatElement = chatSection.lastChild;
      if (lastChatElement) {
        lastChatElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  return (
    <section
      className={cn(
        "mt-[1.5rem] h-full flex flex-col justify-between",
        containerClassName
      )}
    >
      <div className="">
        <h2 className="font-serif text-primary font-[600] text-[1.5rem] leading-[2.625rem]">
          {header}
        </h2>

        <p className="text-gray-six text-[0.75rem] font-[400] ">
          Response time: 20 mins
        </p>
      </div>
      <div className="mt-[1.5rem] h-full w-full overflow-scroll hide-scroll">
        <h3 className="text-gray-seven-five text-[1rem] leading-[1.125rem] font-[500] mb-[1rem]">
          {mockChat.messageTime}
        </h3>
        <section className="w-full" ref={chatSectionRef}>
          {mockChat.chat.map((chat, i) => (
            <div className="flex gap-4 w-full mb-4" key={`chat-${i + 1}`}>
              {userId !== chat.chatId && (
                <div className="relative h-[2.25rem] w-[2.25rem] ">
                  <Image src={chat.senderImage!} alt="img" sizes="100%" fill />
                </div>
              )}
              <div
                className={`w-full flex flex-col ${
                  userId !== chat.chatId ? "" : "items-end"
                } `}
              >
                <p
                  className={`p-3 rounded-[1rem] text-black-two-three text-[0.875rem] font-[400] ${
                    userId !== chat.chatId
                      ? "border border-gray-seven w-full"
                      : "self-end bg-nude w-[90%]"
                  } `}
                >
                  {chat.messageBody}
                </p>
                <p className="text-gray-seven-five text-[0.625rem] font-[400] mt-[2px]">
                  {chat.messageTime}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="flex items-center justify-between gap-4 w-full bg-gray-ten p-4 md:p-[1.25rem]  rounded-[1rem] mb-[4.5rem] md:mb-0 ">
        <div className="w-full flex gap-2 items-center text-primary-lighter">
          {chatIcon && chatIcon}
          <input
            type="text"
            placeholder="Write a message"
            className="outline-none border-none bg-transparent h-full w-full font-[400] text-[0.875rem] text-gray placeholder:text-[0.875rem]"
          />
        </div>
        <button type="button" className="text-primary-lighter">
          <SendIcon />
        </button>
      </div>
    </section>
  );
};

export default ChatSection;

const mockChat = {
  messageTime: "Today",
  chat: [
    {
      chatId: 123,
      senderImage: Person,
      messageBody: "Hey Jane!, I’d like to enquire more about your space.",
      messageTime: "2:48 PM",
    },
    {
      chatId: 1,
      messageBody:
        "Oh great man, thanks for inquiring, what would you like to know?",
      messageTime: "2:49 PM",
    },
    {
      chatId: 1,
      messageBody: "Any specifics?",
      messageTime: "2:49 PM",
    },
    {
      chatId: 123,
      senderImage: Person,
      messageBody: "Hey Jane!, I’d like to enquire more about your space.",
      messageTime: "2:48 PM",
    },
    // end
    {
      chatId: 123,
      senderImage: Person,
      messageBody: "Hey Jane!, I’d like to enquire more about your space.",
      messageTime: "2:48 PM",
    },
    {
      chatId: 1,
      messageBody:
        "Oh great man, thanks for inquiring, what would you like to know?",
      messageTime: "2:49 PM",
    },
    {
      chatId: 1,
      messageBody: "Any specifics?",
      messageTime: "2:49 PM",
    },
    {
      chatId: 123,
      senderImage: Person,
      messageBody: "Hey Jane!, I’d like to enquire more about your space.",
      messageTime: "2:48 PM",
    },
    {
      chatId: 123,
      senderImage: Person,
      messageBody: "Hey Jane!, I’d like to enquire more about your space.",
      messageTime: "2:48 PM",
    },
    {
      chatId: 1,
      messageBody:
        "Oh great man, thanks for inquiring, what would you like to know?",
      messageTime: "2:49 PM",
    },
    
  ],
};
