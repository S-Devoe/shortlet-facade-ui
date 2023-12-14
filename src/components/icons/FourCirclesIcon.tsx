import { ThemeColors } from "@/constants/colors";
import React from "react";

const FourCirclesIcon = () => {
  return (
    <svg
      width="36"
      height="6"
      viewBox="0 0 36 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill="#B9BCC8" />
      <circle cx="13" cy="3" r="3" fill="white" />
      <circle cx="23" cy="3" r="3" fill="#B9BCC8" />
      <circle cx="33" cy="3" r="3" fill="#B9BCC8" />
    </svg>
  );
};

export const CircleIcon = ({ active }: { active?: boolean }) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="3"
        cy="3"
        r="3"
        fill={active ? ThemeColors.white.hex : ThemeColors.graySix.hex}
      />
    </svg>
  );
};

export default FourCirclesIcon;
