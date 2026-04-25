"use client";
import { BsBank2 } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import Bankcard from "../components/Bankcard";
import { RiErrorWarningLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Payment/Confirmed"); // navigate route
    }, 6000); //6 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50 w-full py-10 px-4 md:px-80">
      <div className=" flex flex-col items-center ">
        <div className=" bg-linear-to-bl from-blue-500 to-blue-300 flex items-center justify-center rounded-xl py-2 w-14 h-14 px-2 text-white">
          <FaRegCreditCard />
        </div>

        <h2 className=" font-bold mt-3 text-2xl">Complete Your Payment</h2>

        <p className=" text-gray-600">
          Follow the instructions below to complete your course purchase
        </p>

        <div className=" py-4 px-4 bg-blue-200 border border-blue-400 rounded-2xl w-full flex flex-col items-center">
          <p className=" text-xl text-gray-600">Amount to Pay</p>
          <h2 className=" text-2xl bg-linear-to-l  from-blue-900 to-blue-700 bg-clip-text text-transparent font-bold">
            ₦3,000
          </h2>
        </div>

        {/* details */}
        <div className=" py-4 px-4 bg-blue-200 border border-blue-400 rounded-2xl w-full mt-7">
          <div className=" text-2xl font-bold text-black flex gap-4 items-center">
            <BsBank2 className=" text-blue-500" />
            <h2>Bank Transfer Details</h2>
          </div>

          <div className=" flex flex-col items-center mt-5">
            <Bankcard title="Account Name" subtitle="VYREX EDUCATION LTD" />

            <Bankcard title="Account Number" subtitle="0123456789" />

            <Bankcard title="Bank Name" subtitle="Global Bank" />
          </div>
        </div>

        {/* instruction */}
        <div className=" py-4 px-4 bg-blue-200 border border-blue-400 rounded-2xl w-full mt-7">
          <div className=" text-2xl font-bold text-black flex gap-4 items-center">
            <RiErrorWarningLine className=" text-blue-500" />
            <h2>Payment Instructions</h2>
          </div>

          <div className=" pl-8">
            <div className=" text-lg text-black flex gap-1 items-center">
              <p className=" font-bold text-blue-500">1.</p>
              <p>
                Transfer the{" "}
                <span className=" font-bold">exact amount (₦3,000)</span> to the
                bank account above
              </p>
            </div>

            <div className=" text-lg text-black flex gap-1 items-center mt-3">
              <p className=" font-bold text-blue-500">2.</p>
              <p>Wait for confirmation</p>
            </div>

            <div className=" text-lg text-black flex gap-1 items-center mt-3">
              <p className=" font-bold text-blue-500">2.</p>
              <p>
                Once confirmed, your course access will be automatically
                unlocked
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
