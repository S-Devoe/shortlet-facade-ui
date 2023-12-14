"use client";
import { Modal } from "antd";
import EditProfileModalSection from "../sections/EditProfileModalSection";
import { useState } from "react";
import EditProfileOtpSection from "../sections/EditProfileOtpSection";
import EditProfileSuccess from "../sections/EditProfileSuccess";

interface Props {
  open: boolean;
  onClose: () => void;
}
const EditProfileModal = ({ open, onClose }: Props) => {
  const [section, setSection] = useState(1);

  const formSections: any = {
    1: <EditProfileModalSection setSection={setSection} onClose={onClose} />,
    2: <EditProfileOtpSection setSection={setSection} />,
    3: <EditProfileSuccess setSection={setSection} onClose={onClose} />,
  };

  const modalStyles = {
    body: {
      width: "100%",
    },
    content: {
      borderRadius: "1rem",
      maxWidth: "30rem",
      padding: "2.5rem",
      backgroundColor: section === 3 ? "#E0FFA9" : "#ffffff",
    },
  };

  return (
    <Modal
      centered
      closeIcon={null}
      open={open}
      onCancel={onClose}
      footer={null}
      styles={modalStyles}
    >
      {formSections[section]}
    </Modal>
  );
};

export default EditProfileModal;
