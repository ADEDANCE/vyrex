import React from "react";
import { FaRegCreditCard } from "react-icons/fa";

export default function page() {
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50 w-full py-10 px-4 md:px-80">
      <div className=" flex items-center ">
        <div className=" bg-linear-to-bl from-blue-500 to-blue-300 flex items-center justify-center rounded-xl py-2 w-14 h-14 px-2 text-white">
          <FaRegCreditCard />
        </div>

        <h2 className=" font-bold mt-3 text-2xl">Complete Your Payment</h2>

        <p className=" text-gray-600">
          Follow the instructions below to complete your course purchase
        </p>

        <div className=" py-4 px-4"></div>
      </div>
    </section>
  );
}
