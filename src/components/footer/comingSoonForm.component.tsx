import { Input, InputType } from "../forms/inputs/input";
import Button from "../button/button";
import { MdEmail } from "react-icons/md";
import { useForm as useHookForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const waitlistSchema = z.object({
  email: z.string().email(),
});
export default function ComingSoonForm({
  reference,
}: {
  reference: React.RefObject<HTMLInputElement>;
}) {
  const { push } = useRouter();
  const methods = useHookForm<FormData>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(waitlistSchema),
  });

  const {
    getValues,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const { ok } = await fetch("https://formspree.io/f/xjvqzloj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getValues()),
    });
    if (ok) {
      push("/coming-soon/success");
      reset();
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
        <fieldset className="grow w-full md:w-fit">
          <FormProvider {...methods}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="flex flex-col md:flex-row gap-6 w-full items-start"
            >
              <Input
                name="email"
                type={InputType.email}
                placeholder="Email address"
                className="grow w-full"
                icon={<MdEmail className="h-8 w-8 text-[#6E717C]" />}
                reference={reference}
              />
              <Button
                className={["py-4 w-full md:w-fit text-white shrink-0"]}
                text={"Join the waitlist"}
                type={"submit"}
                onClick={onSubmit}
                disabled={!isValid}
              />
            </form>
          </FormProvider>
        </fieldset>
      </div>
    </div>
  );
}
