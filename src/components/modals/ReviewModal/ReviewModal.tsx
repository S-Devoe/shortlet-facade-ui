"use client";
import BackBtn from "@/components/button/BackBtn";
import { Modal } from "antd";
import { useState } from "react";
import ReviewStage1 from "./ReviewStage1";
import ReviewStage2 from "./ReviewStage2";

interface Props {
  open: boolean;
  onClose: () => void;
}
const ReviewModal = ({ open, onClose }: Props) => {
  const [section, setSection] = useState(1);

  const modalStyles = {
    body: {
      width: "100%",
    },
    content: {
      borderRadius: "1rem",
      maxWidth: "42rem",
      padding: "3rem",
      backgroundColor: section === 3 ? "#E0FFA9" : "#ffffff",
    },
  };

  const reviewStage: any = {
    1: <ReviewStage1 setSection={setSection} />,
    2: (
      <ReviewStage2
        onClose={() => {
          setSection(1);
          onClose();
        }}
      />
    ),
  };

  return (
    <Modal
      closeIcon={null}
      open={open}
      onCancel={onClose}
      footer={null}
      styles={modalStyles}
    >
      <BackBtn onClick={onClose} />
      <section className="mt-4">{reviewStage[section]}</section>
    </Modal>
  );
};

export default ReviewModal;
