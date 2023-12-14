"use client";
import { useRouter } from "next/navigation";

interface Props {
  btnLink?: string;
  title: string;
  icon: JSX.Element;
  btnText?: string;
  body: string;
  showBtn?: boolean;
}

const EmptyPage = ({
  btnLink,
  title,
  icon,
  btnText,
  body,
  showBtn = true,
}: Props) => {
  const router = useRouter();

  return (
    <section className="flex items-center flex-col">
      {icon}
      <h2 className="text-primary-lighter leading-[2.625rem] font-[600] text-[2rem] font-serif mt-[2.5rem]">
        {title}
      </h2>
      <p className="text-gray mt-[0.5rem] font-sans leading-[162.5%] text-[1rem] text-center max-w-[18rem] md:max-w-[80%] ">
        {body}
      </p>
      {showBtn && (
        <button
          type="button"
          onClick={() => router.push(btnLink ?? "")}
          className="w-full h-[3rem] bg-orange rounded-[0.5rem] text-white mt-[1.75rem] max-w-[20.3rem] "
        >
          {btnText}
        </button>
      )}
    </section>
  );
};

export default EmptyPage;
