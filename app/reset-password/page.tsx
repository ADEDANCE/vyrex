"use client";
import React, { useState } from "react";
import Link from "next/link";
import Textfield from "../components/Textfield";
import Button from "../components/Button";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isButtonDisabled = loading;

  const searchParams = useSearchParams();
  // get the token:
  const token = searchParams.get("token");
  console.log(token);

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        setIsSuccess(true);
        setMessage(data.message);

        // redirect to login here.
        router.push("/Login");
      } else {
        setIsSuccess(false);
        setMessage(data.message);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50  py-10 px-10 md:px-96 flex flex-col ">
      <div className="   flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Reset your password</h1>
        <p className=" text-gray-600 text-xl">
          Choose a new password to secure your account.
        </p>
        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              isSuccess ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <div className="relative w-full">
          <Textfield
            className=" w-full mt-3"
            type={showPassword ? "text" : "password"}
            label="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
          />

          <div
            className="absolute right-3 bottom-1 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <div className="relative w-full">
          <Textfield
            className=" w-full mt-3"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat your password"
          />

          <div
            className="absolute right-3 bottom-1 -translate-y-1/2 cursor-pointer"
            onClick={() => setConfirmShowPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>
      </div>

      <div className="   flex flex-col items-center">
        {/* button */}
        <Button
          onClick={handleResetPassword}
          disabled={loading}
          children="Reset password"
          className={
            isButtonDisabled
              ? "opacity-70 cursor-not-allowed rounded-xl mt-6 w-full text-white bg-blue-200"
              : "bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
          }
        />

        <div className=" flex text-lg">
          <p className=" text-gray-600">Back to </p>
          <Link href={"/Login"} className=" text-blue-400 hover:underline">
            {" "}
            log in
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
    </section>
  );
};

export default page;
