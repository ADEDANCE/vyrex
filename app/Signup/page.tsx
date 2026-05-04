"use client";
import { useState } from "react";
import Button from "../components/Button";
import Textfield from "../components/Textfield";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const isFormValid = name.trim() && email.trim() && password.trim();

  const isButtonDisabled = loading || !isFormValid;
  const handleSignup = async () => {
    try {
      setLoading(true);

      if (!name.trim() || !email.trim() || !password.trim()) {
        setMessage("All fields are required");
        return;
      }

      const data = {
        name,
        email,
        password,
      };

      // fech
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // read response
      const result = await res.json();

      // handle sucess
      if (result.success) {
        setMessage(result.message);
        router.push("/Login");
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50">
      <div className=" py-10 px-10 md:px-72 flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Create your account</h1>
        <p className=" text-gray-600 text-xl">
          Start learning video editing today
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
          className=" w-full mt-7"
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />

        <Textfield
          className=" w-full mt-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Example@email.com"
        />

        <Textfield
          className=" w-full mt-3"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="At least 6 characters"
        />

        {/* button */}
        <Button
          onClick={handleSignup}
          disabled={loading}
          children={loading ? "Creating account..." : "Create account"}
          className={
            isButtonDisabled
              ? "opacity-70 cursor-not-allowed rounded-xl mt-6 w-full text-white bg-blue-200"
              : "bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
          }
        />

        <div className=" flex text-lg">
          <p className=" text-gray-600">Already a member?</p>
          <Link href={""} className=" text-blue-400 hover:underline">
            {" "}
            Log in
          </Link>
        </div>

        {/* policy */}
        <div className=" flex flex-wrap text-xs md:mt-3">
          <p>By continuing you agree to VYREX</p>
          <Link href={""} className=" ml-1 text-blue-500 underline">
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
