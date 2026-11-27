"use client";

import { FaComments } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import {
  MdOutlineFileDownload,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import { WiStars } from "react-icons/wi";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

// Reusable feature row
function FeatureRow({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 text-gray-600 text-sm sm:text-base">
      <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mt-0.5">
        {icon}
      </div>
      <p className="flex-1 min-w-0">{children}</p>
    </div>
  );
}

export default function Price() {
  const router = useRouter();

  return (
    <section
      id="pricing"
      className="w-full py-10 sm:py-14 px-4 sm:px-6 bg-[#00267C] text-white"
    >
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          What You Will Learn
        </h2>

        <h2 className="text-xl sm:text-2xl mt-2 text-center">
          One journey, split{" "}
          <span className="bg-linear-to-l from-blue-600 to-blue-400 bg-clip-text text-transparent font-bold">
            50 / 50.
          </span>
        </h2>

        <p className="text-center text-sm sm:text-base mt-2 max-w-2xl text-blue-100">
          Master the foundations, earn your certificate, and unlock the next
          level when you're ready. Pay only for the stage you want to learn.
        </p>

        {/* Pricing Cards */}
        <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Beginner Card */}
          <div className="w-full p-5 sm:p-6 bg-white border border-blue-400 rounded-2xl flex flex-col">
            {/* Card Header */}
            <div className="flex justify-between items-center gap-3">
              <div className="bg-[#1c5ff9] px-3 sm:px-4 py-2 rounded-xl">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  Start Here
                </h3>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <p className="text-[#1c5ff9] font-bold text-xl">₦5,000</p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  One-time payment
                </p>
              </div>
            </div>

            {/* Course Details */}
            <div className="mt-5">
              <h3 className="font-bold text-black text-xl">Beginner Level</h3>

              <p className="text-gray-500 text-lg">Editing Foundations</p>

              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Learn the fundamentals of mobile video editing, develop your
                creative skills, and create engaging videos using your
                smartphone.
              </p>
            </div>

            {/* Beginner Features */}
            <div className="mt-5 space-y-3">
              <FeatureRow icon={<MdOutlineSlowMotionVideo />}>
                Introduction to CapCut
              </FeatureRow>

              <FeatureRow icon={<WiStars />}>
                Basic video editing techniques
              </FeatureRow>

              <FeatureRow icon={<WiStars />}>
                Psychology of video editing
              </FeatureRow>

              <FeatureRow icon={<MdOutlineFileDownload />}>
                How to source video resources
              </FeatureRow>

              <FeatureRow icon={<MdOutlineFileDownload />}>
                Video scripting
              </FeatureRow>

              <FeatureRow icon={<WiStars />}>
                AI voice-over generation
              </FeatureRow>

              <FeatureRow icon={<WiStars />}>Kinetic typography</FeatureRow>

              <FeatureRow icon={<MdOutlineSlowMotionVideo />}>
                Smart hub advert creation
              </FeatureRow>

              <FeatureRow icon={<MdOutlineFileDownload />}>
                Downloadable video resources
              </FeatureRow>

              <FeatureRow icon={<FaComments />}>Community access</FeatureRow>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Button
                onClick={() => router.push("/Signup")}
                children="Start Your Journey"
                className="bg-[#1c5ff9] hover:bg-blue-700 rounded-xl w-full text-white py-3"
              />
            </div>
          </div>

          {/* Expert Card */}
          <div className="w-full p-5 sm:p-6 bg-white border border-blue-400 rounded-2xl text-gray-600 flex flex-col">
            {/* Card Header */}
            <div className="flex justify-between items-center">
              <div className="bg-gray-200 text-gray-600 flex items-center justify-center rounded-xl w-10 h-10">
                <IoIosLock className="text-xl" />
              </div>

              <p className="text-sm font-semibold text-gray-500">STEP 2</p>
            </div>

            {/* Course Details */}
            <div className="mt-5">
              <h3 className="font-bold text-black text-xl">Expert Level</h3>

              <p className="text-gray-500 text-lg">
                Advanced Editing & Monetization
              </p>

              <h2 className="text-2xl font-bold text-[#1c5ff9] mt-2">₦5,000</h2>

              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Take your editing skills further, master advanced techniques,
                and learn how to turn your skills into income.
              </p>
            </div>

            {/* Expert Features */}
            <div className="mt-5 space-y-3">
              <FeatureRow icon={<MdOutlineFileDownload />}>
                Renderforest
              </FeatureRow>

              <FeatureRow icon={<WiStars />}>Whiteboard animation</FeatureRow>

              <FeatureRow icon={<WiStars />}>
                Advanced kinetic typography
              </FeatureRow>

              <FeatureRow icon={<MdOutlineSlowMotionVideo />}>
                Promotional video creation
              </FeatureRow>

              <FeatureRow icon={<MdOutlineSlowMotionVideo />}>
                Client-level editing workflows
              </FeatureRow>

              <FeatureRow icon={<WiStars />}>
                Monetization strategies
              </FeatureRow>

              <FeatureRow icon={<MdOutlineFileDownload />}>
                Premium editing assets
              </FeatureRow>

              <FeatureRow icon={<FaComments />}>Final certification</FeatureRow>
            </div>

            {/* Locked Button */}
            <div className="mt-6">
              <Button
                children="Unlock After Beginner Level"
                className="border border-gray-400 rounded-xl w-full text-gray-500 py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
