import React from "react";
import Textfield from "../components/Textfield";
import Link from "next/link";
import Button from "../components/Button";

const page = () => {
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50  py-10 px-10 md:px-96 flex flex-col ">
      <div className="   flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Forgot password?</h1>
        <p className=" text-gray-600 text-xl">
          Enter your email and we'll send you a reset link.
        </p>

        <Textfield
          className=" w-full mt-3"
          type="email"
          label="Email"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          placeholder="Example@email.com"
        />

        <div className="   flex flex-col items-center">
          {/* button */}
          <Button
            //   onClick={handleLogin}
            //   disabled={loading}
            children="Send reset link"
            className="bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
            //   {
            //     isButtonDisabled
            //       ? "opacity-70 cursor-not-allowed rounded-xl mt-6 w-full text-white bg-blue-200"
            //       : "bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
            //   }
          />

          <div className=" flex text-lg">
            <p className=" text-gray-600">Remembered it?</p>
            <Link
              href={"/reset-password"}
              className=" text-blue-400 hover:underline"
            >
              {" "}
              Back to log in
            </Link>
          </div>

          {/* policy */}
          <div className=" flex text-sm mt-3">
            <p>By continuing you agree to VYREX </p>
            <Link href={""} className=" text-blue-500 underline">
              Terms
            </Link>
            <p>and</p>
            <Link href={""} className=" text-blue-500 underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
