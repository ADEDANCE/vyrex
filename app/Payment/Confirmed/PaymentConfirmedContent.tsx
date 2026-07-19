"use client";

import Button from "@/app/components/Button";
import { LuCircleCheckBig } from "react-icons/lu";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function PaymentConfirmedContent() {
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  const router = useRouter();

  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50 w-full py-16 px-4 md:px-96">
      <div className=" flex flex-col items-center ">
        <div className=" py-4 px-14 bg-linear-to-br from-blue-500 to-blue-200 border border-blue-400 rounded-2xl w-full flex flex-col items-center">
          <div className=" bg-green-500 text-white rounded-full py-2 px-2 w-16 h-16 flex items-center justify-center text-3xl animate-[float_2s_ease-in-out_infinite] delay-200">
            <LuCircleCheckBig />
          </div>

          <h2 className=" font-medium text-white text-2xl mt-7">
            {" "}
            Payment Confirmed!
          </h2>

          <p className=" text-white text-lg">
            Your {level} course access has been unlocked
          </p>

          <div className=" py-4 px-4 bg-linear-to-bl from-blue-400 to-blue-200 shadow rounded-lg w-full flex flex-col items-center mt-7">
            <p className=" text-white text-lg text-center">
              Congratulations! Your payment has been verified and your course is
              now available
            </p>

            <p className=" text-white  text-center">
              Start learning now and track your progress in the dashboard.
            </p>
          </div>

          <Button
            children="Go to Dashboard"
            onClick={() => router.push(`/course/${level}`)}
            className=" bg-white text-blue-600 rounded-xl mt-8"
          />
        </div>
      </div>{" "}
    </section>
  );
}
