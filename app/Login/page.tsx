import Button from "../components/Button";
import Textfield from "../components/Textfield";
import Link from "next/link";

export default function Signup() {
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50  py-10 px-10 md:px-96 flex flex-col ">
      <div className="   flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Welcome back</h1>
        <p className=" text-gray-600 text-xl">
          Log in to continue your creative journey.
        </p>

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
      </div>
      <Link href={""} className=" text-blue-500 hover:underline text-right ">
        Forgot password?
      </Link>

      <div className="   flex flex-col items-center">
        {/* button */}
        <Button
          children="Sign In"
          className=" bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
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
