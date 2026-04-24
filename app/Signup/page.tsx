import Button from "../components/Button";
import Textfield from "../components/Textfield";
import Link from "next/link";

export default function Signup() {
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50">
      <div className=" py-10 px-10 md:px-96 flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Create your account</h1>
        <p className=" text-gray-600 text-xl">
          Start learning video editing today
        </p>

        <Textfield
          className=" w-full mt-7"
          label="Full Name"
          placeholder="Enter your full name"
        />

        <Textfield
          className=" w-full mt-3"
          type="email"
          label="Email"
          placeholder="Example@email.com"
        />

        <Textfield
          className=" w-full mt-3"
          type="text"
          label="Password"
          placeholder="At least 6 characters"
        />

        {/* button */}
        <Button
          children="Create account"
          className=" bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
        />

        <div className=" flex text-lg">
          <p className=" text-gray-600">Already a member?</p>
          <Link href={""} className=" text-blue-400 hover:underline">
            {" "}
            Log in
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
