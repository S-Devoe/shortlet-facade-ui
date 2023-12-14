"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const generateId = () => Math.random().toString(36).substring(2, 9);

interface Props {
  error?: boolean;
  length?: number;
  onChange: (_: number | string) => void;
  containerClassName?: string;
  inputClassName?: string;
}

const OtpInput = ({
  length = 4,
  onChange,
  containerClassName,
  inputClassName,
}: Props) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const updateOtp = (index: number | string, value: number | string) => {
    setOtp(otp.map((n, i) => (i === index ? value : n)));
  };

  useEffect(() => {
    onChange(otp.join(""));
  }, [onChange, otp]);

  const [inputIds] = useState(
    Array(length)
      .fill("")
      .map((_field) => generateId())
  );

  const otpInputs: Array<any> = [];

  useEffect(() => {
    inputFocus(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (value: string, index: number) => {
    if (/\D/.test(value)) {
      if (value === "Backspace") {
        // delete the current input
        updateOtp(index, "");
        // if current input is empty, focus the previous input and delete it
        if (otp[index] === "" && index > 0) {
          updateOtp(index - 1, "");
          inputFocus(index - 1);
        }
      }
      return;
    }

    updateOtp(index, value);

    if (index !== otp.length - 1) {
      inputFocus(index + 1);
    }
  };

  const inputFocus = (index: number) => otpInputs[index]?.focus();

  return (
    <div
      className={cn("flex items-center gap-4 flex-wrap", containerClassName)}
    >
      {inputIds.map((id, index) => (
        <div key={`otp-input-${id}`} onClick={() => inputFocus(index)}>
          <input
            // readOnly
            maxLength={1}
            id={id}
            ref={(element) => {
              otpInputs[index] = element;
            }}
            autoComplete="one-time-code"
            className={cn(
              "text-center border outline-none bg-[#F9FAFC] border-[#00E047] focus:outline-none focus-within:border-primary-lighter focus:border-[2px] h-[4rem] w-[4rem] rounded-[0.5rem] text-brun text-[1.5rem] font-bold ",
              inputClassName
            )}
            type="tel"
            inputMode="numeric"
            value={otp[index]}
            onKeyDown={(e) => handleInput(e.key, index)}
          />
        </div>
      ))}
    </div>
  );
};
