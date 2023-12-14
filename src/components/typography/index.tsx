import clsx from "clsx";
import React from "react";

interface BaseProps {
  className?: string;
}

interface BasePropsWithText extends BaseProps {
  text?: string;
  children?: never;
}

interface BasePropsWithChildren extends BaseProps {
  text?: never;
  children?: React.ReactNode;
}

interface BaseHeadingPropsWithText extends BasePropsWithText {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

interface BaseHeadingPropsWithChildren extends BasePropsWithChildren {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

interface BodyPropsWithText extends BasePropsWithText {
  level: 1 | 2 | "subtext" | "caption";
}

interface BodyPropsWithChildren extends BasePropsWithChildren {
  level: 1 | 2 | "subtext" | "caption";
}

type BodyProps = BodyPropsWithText | BodyPropsWithChildren;

type HeadingProps = BaseHeadingPropsWithChildren | BaseHeadingPropsWithText;

const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  text,
  className,
}) => {
  const textClass = "text-primary-darker";
  switch (level) {
    case 1:
      return (
        <h1
          className={clsx(
            textClass,
            className,
            "font-serif text-[3rem] md:text-[4rem] leading-[5rem] font-black"
          )}
        >
          {text || children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={clsx(
            textClass,
            "font-serif text-5xl leading-[4rem] font-black",
            className
          )}
        >
          {text || children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={clsx(
            textClass,
            "font-serif text-[2.5rem] leading-[3.5rem] font-bold",
            className
          )}
        >
          {text || children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={clsx(
            textClass,
            "font-serif text-[2rem] leading-[2.5rem] font-semibold",
            className
          )}
        >
          {text || children}
        </h4>
      );
    case 5:
      return (
        <h5
          className={clsx(
            textClass,
            "font-sans text-[1.5rem] leading-[2rem] font-bold",
            className
          )}
        >
          {text || children}
        </h5>
      );
    case 6:
      return (
        <h6
          className={clsx(
            textClass,
            "font-sans text-[1.125rem] leading-[1.5rem] font-black",
            className
          )}
        >
          {text || children}
        </h6>
      );
    default:
      return (
        <h1
          className={clsx(
            textClass,
            "font-serif text-[4rem] leading-[5rem] font-black"
          )}
        >
          {text || children}
        </h1>
      );
  }
};

const Body: React.FC<BodyProps> = ({ children, className, level, text }) => {
  const textClass = "text-primary-darker";
  switch (level) {
    case 1:
      return (
        <p
          className={clsx(
            className,
            textClass,
            "font-sans text-[1.125rem] leading-[1.875rem]"
          )}
        >
          {text || children}
        </p>
      );
    case 2:
      return (
        <p
          className={clsx(
            className,
            textClass,
            "font-sans text-base leading-[1.75rem]"
          )}
        >
          {text || children}
        </p>
      );
    case "subtext":
      return (
        <p
          className={clsx(
            className,
            textClass,
            "font-sans text-sm leading-[1.5rem]"
          )}
        >
          {text || children}
        </p>
      );
    case "caption":
      return (
        <p
          className={clsx(
            className,
            textClass,
            "font-sans text-xs leading-[1.25rem]"
          )}
        >
          {text || children}
        </p>
      );
    default:
      return (
        <p
          className={clsx(
            className,
            textClass,
            "font-sans text-[1.125rem] leading-[1.875rem]"
          )}
        >
          {text || children}
        </p>
      );
  }
};

export { Heading, Body };
