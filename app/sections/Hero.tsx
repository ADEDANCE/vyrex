"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="w-full bg-[#00267C] text-white flex justify-between items-stretch">
      <div className="py-6 sm:py-8 md:py-10 px-2 sm:px-3 md:px-6 flex flex-col justify-center items-center w-1/2">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl text-center font-bold">
          Create Amazing Videos.{" "}
          <span className="text-blue-400">
            Right From Your <span className="text-blue-500">Phone.</span>
          </span>
        </h1>

        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg mt-2 md:mt-3 text-center">
          Turn your smartphone into a creative studio. Learn how to edit
          stunning videos, create engaging ads, and bring your creative ideas to
          life with VYREX.
        </p>

        <Button
          onClick={() => router.push("/Signup")}
          children="Start Learning"
          className="mt-3 sm:mt-5 md:mt-7 bg-blue-500 text-white rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base px-3 sm:px-5 md:px-6"
        />
      </div>

        <div className="w-1/2 relative self-stretch">
    <Image
      src="/images/Veditinghero.jpg"
      alt="Mobile video editing"
      fill
      priority
      sizes="50vw"
      className="object-cover"
    />
  </div>
    </section>
  );
}
