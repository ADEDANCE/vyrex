
"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

const StartLearning = () => {
  const router = useRouter();

  return (
    <section
      id="features"
      className="w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-10 bg-blue-50"
    >
      <div className="rounded-2xl text-center px-4 sm:px-8 py-7 sm:py-10 bg-[#00267C]">

        <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl">
          Ready to Bring Your Creative Ideas to Life?
        </h2>

        <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Learn mobile video editing from scratch, master essential editing
          techniques, and turn your smartphone into a creative studio.
          Your editing journey starts here.
        </p>

        <Button
          onClick={() => router.push("/Signup")}
          children="Start Learning Today"
          className="mt-5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2 sm:py-3"
        />

      </div>
    </section>
  );
};

export default StartLearning;
