"use client";
import { clsx } from "clsx";
import React from "react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Refs {
  [key: number]: React.RefObject<HTMLInputElement>;
}

interface Props {
  setValue: (v: string) => void;
  setError?: Dispatch<SetStateAction<string>>;
  count?: number;
}
export const Otp: React.FC<Props> = ({
  setValue: setOtp,
  setError,
  count = 4,
}) => {
  const refs: Refs = {};
  Array.from(Array(count + 1).keys()).forEach((i) => {
    refs[i] = React.createRef();
  });
  const [activeInput, setActiveInput] = useState(0);
  const [value, setValue] = useState(new Array(count) as string[]);

  useEffect(() => {
    refs[0].current?.focus();
  }, []);
  useEffect(() => {
    setOtp(value.join(""));
  }, [value, activeInput]);

  return (
    <>
      <div className="mx-auto max-w-[650px] h-fit flex justify-center">
        {Array.from(Array(count).keys()).map((i) => (
          <div
            key={i}
            className={clsx(
              "border border-myGrey rounded-md mx-2 px-2 py-1 w-16 h-16",
              activeInput == i && "bg-primary/10 border-0",
              activeInput == i && "shadow",
              activeInput != i && "bg-white"
            )}
          >
            <input
              maxLength={1}
              ref={refs[i]}
              value={value?.[i] ?? ""}
              type="tel"
              inputMode="numeric"
              autoComplete="one-time-code"
              style={{ caretColor: "transparent" }}
              className={[
                "outline-none w-full h-full text-4xl text-center border-b bg-transparent",
                activeInput == i ? "border-primary" : "",
              ].join(" ")}
              onClick={() => setActiveInput(i)}
              onChange={() => {}}
              onFocus={() => setActiveInput(i)}
              onBlur={() => setActiveInput(-1)}
              onKeyUp={async (e) => {
                if (
                  (e.key == "Backspace" || e.key == "ArrowLeft") &&
                  activeInput > -1
                ) {
                  refs[
                    activeInput - 1 > 0 ? activeInput - 1 : 0
                  ].current?.focus();
                  e.key == "Backspace" && activeInput == 0
                    ? setValue(new Array(6) as string[])
                    : setValue(value.splice(activeInput, 1, "") && value);
                  if (activeInput > 0) setActiveInput(activeInput - 1);
                } else if (
                  (e.key == "ArrowRight" || e.key.match(/^\w$/)) &&
                  activeInput < count
                ) {
                  refs[
                    activeInput + 1 < count - 1 ? activeInput + 1 : count - 1
                  ].current?.focus();
                  setActiveInput(activeInput + 1);
                  e.key.match(/^\w+$/) &&
                    setValue(value.splice(activeInput, 1, e.key) && value);
                }
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
