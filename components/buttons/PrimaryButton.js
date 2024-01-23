"use client";

export default function PrimaryButton({ type = "button", text, handleClick, bgColor, disabled=false }) {
  return (
    <button
      type={type}
      className={`bg-[${bgColor}] px-5 py-2 rounded-lg text-white hover:text-gray-100 hover:bg-[#3F37C9]`}
      onClick={type === "button" && handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
