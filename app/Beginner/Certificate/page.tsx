"use client";

import Button from "@/app/components/Button";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <section className=" bg-blue-50 w-full py-10 px-4 ">
      <div className=" flex flex-col items-center ">
        <h1 className=" font-bold text-black text-2xl">
          Congratulations, you've earned it.
        </h1>
        <p className=" text-gray-600 text-lg text-center">
          You just completed Editing Foundations. This is a real milestone —
          most people never finish what they start. You did
        </p>

        <div className=" mt-10 bg-white border border-blue-200 shadow py-4 px-4 rounded-2xl">
          <h2 className=" font-medium text-black text-xl">
            Don't stop now — the next phase is where it gets serious.
          </h2>

          <p>
            You've unlocked the foundation. The Intermediate phase gives you
            advanced techniques, project files, and 1:1 mentorship — the fastest
            path from competent to undeniable.
          </p>

          <div className=" flex flex-col gap-7 items-center ">
            {" "}
            <Button
              children="Download certificate"
              className="w-sm md:w-2xl border border-gray-300 rounded-xl mt-5"
            />
            <Button
              onClick={() => router.push("/Beginner/Certificate")}
              children="Proceed to Intermidiate Phase"
              className=" md:w-2xl  bg-linear-to-r from-blue-500 to-blue-300 rounded-xl text-white  font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
