"use client";
import { useState } from "react";
import Button from "../components/Button";
import Textfield from "../components/Textfield";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const isFormValid = email.trim() && password.trim();

  const isButtonDisabled = loading || !isFormValid;

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (!email.trim() || !password.trim()) {
        setMessage("All fields are required");
        return;
      }

      // send requeest
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ensures cookies are accepted
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (result.success) {
        setMessage(result.message);

        setTimeout(() => {
          router.push("/course");
        }, 100);
      } else {
        setMessage(
          // "Something went wrong",
          result.error,
        );
      }
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50  py-10 px-10 md:px-96 flex flex-col ">
      <div className="   flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Welcome back</h1>
        <p className=" text-gray-600 text-xl">
          Log in to continue your creative journey.
        </p>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <Textfield
          className=" w-full mt-3"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Example@email.com"
        />

        <Textfield
          className=" w-full mt-3"
          type="text"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 6 characters"
        />
      </div>
      <Link href={""} className=" text-blue-500 hover:underline text-right ">
        Forgot password?
      </Link>

      <div className="   flex flex-col items-center">
        {/* button */}
        <Button
          onClick={handleLogin}
          disabled={loading}
          children={loading ? "Signing in..." : "Sign In"}
          className={
            isButtonDisabled
              ? "opacity-70 cursor-not-allowed rounded-xl mt-6 w-full text-white bg-blue-200"
              : "bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
          }
        />

        <div className=" flex text-lg">
          <p className=" text-gray-600">Don't have an account?</p>
          <Link href={""} className=" text-blue-400 hover:underline">
            {" "}
            Sign up
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
}
