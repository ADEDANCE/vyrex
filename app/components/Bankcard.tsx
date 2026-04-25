"use client";
import { FaRegCopy } from "react-icons/fa";

type BankProp = {
  title: string;
  subtitle: string;
};
export default function Bankcard({ title, subtitle }: BankProp) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(subtitle);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className=" py-4 px-4 bg-white  rounded-2xl w-full mt-4">
      <p className=" text-lg text-gray-600">{title}</p>
      <div className=" flex justify-between items-center">
        <h2 className=" font-medium text-black">{subtitle}</h2>
        <FaRegCopy onClick={handleCopy} className=" text-gray-600 text-2xl" />
      </div>
    </div>
  );
}
