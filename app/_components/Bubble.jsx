import React from "react";

function Bubble({ color, value, selectedValue, disabled }) {
  return (
    <button
      className={`w-[50px] h-[50px] rounded-full border border-[#f0f0f0] flex justify-center items-center bubble-shadow text-xs transition-colors delay-[20ms] disabled:bg-[#f5f5f5] disabled:text-black  ${
        selectedValue === value
          ? `${
              color == "green"
                ? "bg-green"
                : color == "cyan"
                ? "bg-cyan"
                : color == "levender"
                ? "bg-levender"
                : color == "pink"
                ? "bg-pink"
                : ""
            } text-white`
          : `${
              color == "green"
                ? "hover:bg-green"
                : color == "cyan"
                ? "hover:bg-cyan"
                : color == "levender"
                ? "hover:bg-levender"
                : color == "pink"
                ? "hover:bg-pink"
                : ""
            } hover:text-white`
      }`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default React.memo(Bubble);
