"use client";
import User from "@/assets/images/user-img.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const MessageSection = () => {
  const router = useRouter();

  return (
    <section className="mt-[2.5rem] flex flex-col gap-8 ">
      {mockMessages.map((message, i) => (
        <button
          type="button"
          className={`pb-4 flex items-center gap-[1.5rem] ${
            mockMessages.length == i + 1 ? "" : "border-gray-six border-b "
          }`}
          key={`message-${i + 1}`}
          onClick={() => router.push(`/messages/${i + 1}`)}
        >
          <div className="relative h-[2.75rem] w-[2.75rem] shrink-0 ">
            <Image
              src={message.image}
              alt="img"
              fill
              sizes="100%"
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col items-start ">
            <h3 className="text-[1rem] font-[700] leading-[1.5rem] text-black-six">
              {message.name}
            </h3>
            <p className="text-start text-[1.125rem] text-gray-two font-[400] leading-[1.25rem] ">
              {message.body}
            </p>
            <h4 className="mt-[2px] text-[0.75rem] text-gray-five font-[400] leading-[1.25rem] ">
              {message.date}
            </h4>
          </div>
        </button>
      ))}
    </section>
  );
};

export default MessageSection;

const mockMessages = Array(6).fill({
  image: User,
  name: "John Kerry",
  body: "This very stylish modern contemporary house is designed for having great group.",
  date: "09:00am - 10/02/23",
});
