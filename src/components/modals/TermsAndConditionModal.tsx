import { Modal } from "antd";
import BackBtn from "../button/BackBtn";
import PageHeader from "../headers/PageHeader";

interface Props {
  open: boolean;
  onClose: () => void;
}
const TermsAndConditionModal = ({ open, onClose }: Props) => {
  return (
    <Modal
      centered
      closeIcon={null}
      open={open}
      onCancel={onClose}
      footer={null}
      styles={modalStyles}
      className="!w-full max-w-[63rem] h-full md:max-h-[95vh] rounded-[1rem] md:overflow-scroll "
    >
      <BackBtn onClick={onClose} />
      <section className="mt-[2rem]">
        <PageHeader
          header="Terms & Conditions"
          headerClassName="text-primary text-serif text-[1.5rem] font-[600]  "
        />
        <ul className="flex flex-col gap-7 mt-3">
          {terms.map((term, i) => (
            <li
              className="text-1rem] text-black font-[400] "
              key={`term-${i + 1}`}
            >
              <h3>{term.header}</h3>
              <div className="">
                {term.list &&
                  term.list.map((list, i) => (
                    <div key={`list -${i + 1}`} className="">
                      <span>-  </span>
                      {list.body}{" "}
                    </div>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Modal>
  );
};

export default TermsAndConditionModal;

const terms = [
  {
    header:
      "Check-in and Check-out: Please adhere to the check-in and out times to ensure a smooth transition for all guests.",
  },
  {
    header: "House Rules:",
    list: [
      {
        body: "No smoking inside the property.",
      },
      {
        body: "No parties or events without prior permission.",
      },
      {
        body: "Respect the neighbors by keeping noise levels down, especially during quiet hours.",
      },
      {
        body: " Keep the property clean and tidy during your stay.",
      },
    ],
  },
  {
    header: "Cancellation Policy:",
    list: [
      {
        body: " Full refund if canceled within 48 hours of booking, partial refund if canceled within 7 days of arrival.",
      },
    ],
  },
  {
    header: "Security Deposit: ",
    list: [
      {
        body: "A security deposit may be required to cover any damages or excessive cleaning. It will be refunded after your stay, provided there are no issues.",
      },
    ],
  },
  {
    header: "Liability: ",
    list: [
      {
        body: "The host and Shortlet are not liable for any accidents, injuries, or stolen property that may occur during your stay. Please take necessary precautions and ensure the safety of yourself and your belongings.",
      },
    ],
  },
  {
    header: "Guest Responsibilities:",
    list: [
      {
        body: "Guests are responsible for any damage caused during their stay and should report it to the host immediately.",
      },
      {
        body: "Guests should follow any specific instructions provided by the host regarding the property.",
      },
    ],
  },
];

const modalStyles = {
  body: {
    width: "100%",
  },

  content: {
    borderRadius: "1rem",
    width: "100%",
    padding: "2.5rem",
    "@media (min-width: 900px)": {
      padding: "5rem",
    },
  },
};
