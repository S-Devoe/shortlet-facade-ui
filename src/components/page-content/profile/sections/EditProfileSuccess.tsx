import BackBtn from "@/components/button/BackBtn";
import Button from "@/components/button/button-cva";
import LadyJubilatingSvg from "@/components/charcters/LadyJubilatingSvg";
import PageHeader from "@/components/headers/PageHeader";

interface Props {
  onClose: () => void;
  setSection: (_: number) => void;
}

const EditProfileSuccess = ({ setSection, onClose }: Props) => {
  return (
    <section>
      <BackBtn onClick={() => setSection(1)} />
      <div className="mt-6 flex flex-col items-center  ">
        <PageHeader
          headerClassName="text-[2rem] text-primary-lighter"
          header="Change Successful!"
        />
        <p className="mb-4 text-[#444854] text-center text-[1rem] font-normal leading-[1.625rem] ">
          You have successfully changed your shortlet app official email to
          <span className="text-grayBlack"> madison@emailsample.co</span>
        </p>
        <LadyJubilatingSvg />
        <Button
          onClick={() => {
            onClose();
            setSection(1);
          }}
          className="py-[0.8rem] mt-4"
          text="Finish"
        />
      </div>
    </section>
  );
};

export default EditProfileSuccess;
