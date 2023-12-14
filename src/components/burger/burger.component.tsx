import React from "react";

export default function BurgerComponent({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="rounded-lg bg-orange p-2.5 cursor-pointer select-none"
      onClick={onClick}
    >
      <button className="w-11 h-10 p-1.5 flex flex-col gap-1.5 justify-center items-center">
        <span className="w-full h-1 rounded-sm shadow-sm bg-white"></span>
        <span className="w-full h-1 rounded-sm shadow-sm bg-white"></span>
        <span className="w-full h-1 rounded-sm shadow-sm bg-white"></span>
      </button>
    </div>
  );
}
