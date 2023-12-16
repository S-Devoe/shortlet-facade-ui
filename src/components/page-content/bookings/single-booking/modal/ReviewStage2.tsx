import Button from "@/components/button/button";

interface Props {
  onClose: () => void;
}
const ReviewStage2 = ({ onClose }: Props) => {
  return (
    <section className="w-full flex flex-col items-center gap-4 ">
      <h1 className="text-center font-serif text-[2rem] text-primary-lighter font-semibold ">
        Review successfully submitted
      </h1>
      <Button
        text="Finish"
        onClick={onClose}
        className="w-full max-w-[17rem] rounded-lg font-bold text-[1rem] py-[0.8rem]"
      />
    </section>
  );
};

export default ReviewStage2;
