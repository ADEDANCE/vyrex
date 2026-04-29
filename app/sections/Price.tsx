"use client";
import { FaComments } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import {
  MdOutlineFileDownload,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import { WiStars } from "react-icons/wi";
import Button from "../components/Button";
import { IoIosLock } from "react-icons/io";
import Aboutcard from "../components/Aboutcard";
import PayButton from "../components/PayButton";

export default function Price() {
  return (
    <section className=" w-full py-10 px-6 bg-blue-50">
      <div className=" flex flex-col justify-center items-center ">
        <h2 className=" text-black text-2xl">Level up your skill,</h2>

        <h2 className=" text-2xl bg-linear-to-l  from-blue-900 to-blue-400 bg-clip-text text-transparent">
          one stage at a time.
        </h2>
        <p className=" text-gray-600 text-center">
          You don't just buy a course — you level up your skill. Progress
          through three structured stages, each unlocking new techniques,
          projects and certifications.
        </p>

        {/* card */}
        {/* first card */}
        <div className=" w-full mt-5 flex flex-col md:flex-row gap-4">
          <div className=" w-full py-5 px-4 bg-white border border-blue-400 rounded-2xl">
            <div className=" flex justify-between items-center">
              <div className=" bg-linear-to-bl from-blue-500 to-blue-300 flex items-center justify-center rounded-xl py-2 w-10 h-10 px-2 text-white">
                <IoRocketSharp />
              </div>

              <div className=" flex flex-col items-end">
                <p>STEP 1</p>
                <p className=" text-green-500">Recommended start</p>
              </div>
            </div>

            <div className=" text-start mt-3">
              <h3 className=" font-bold text-black">Beginner Level</h3>
              <p className=" text-gray-600">Your launchpad into editing</p>

              <h2 className=" text-2xl bg-linear-to-l  from-blue-900 to-blue-400 bg-clip-text text-transparent">
                ₦3,000
              </h2>

              {/* content */}
              <div className=" mt-3">
                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <MdOutlineSlowMotionVideo />
                  </div>

                  {/* text */}
                  <p>4 intro video lessons</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className=" w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <WiStars />
                  </div>

                  {/* text */}
                  <p>Basic editing techniques</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <MdOutlineFileDownload />
                  </div>

                  {/* text */}
                  <p>Downloadable video resources</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <FaComments />
                  </div>

                  {/* text */}
                  <p>Community access</p>
                </div>

                {/* button */}
                <Button
                  children="Start your journey"
                  className=" bg-linear-to-r from-blue-500 to-blue-300 rounded-xl mt-6 w-full text-white"
                />

                <PayButton />
              </div>
            </div>
          </div>
          {/* second card */}
          <div className=" w-full py-5 px-4 bg-white border border-blue-400 rounded-2xl">
            <div className=" flex justify-between items-center text-gray-600">
              <div className=" bg-gray-300  text-gray-600 flex items-center justify-center rounded-xl py-2 w-10 h-10 px-2">
                <IoIosLock />
              </div>

              <p>STEP 2</p>
            </div>

            <div className=" text-start mt-3">
              <h3 className=" font-bold text-black">Intermediate Level</h3>
              <p className=" text-gray-600">
                Sharpen real-world workflow skills
              </p>

              <h2 className=" text-2xl text-gray-500">₦3,000</h2>

              {/* content */}
              <div className=" mt-3">
                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <MdOutlineSlowMotionVideo />
                  </div>

                  {/* text */}
                  <p>Advanced editing techniques</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className=" w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <WiStars />
                  </div>

                  {/* text */}
                  <p>Real-world projects</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <MdOutlineFileDownload />
                  </div>

                  {/* text */}
                  <p>More resources & assets</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <FaComments />
                  </div>

                  {/* text */}
                  <p>Progress tracking</p>
                </div>

                {/* button */}
                <Button
                  children="Unlock afteer Beginner"
                  className=" border border-gray-400 rounded-xl mt-6 w-full text-gray-500"
                />
              </div>
            </div>
          </div>
          {/* third card */}
          <div className=" w-full py-5 px-4 bg-white border border-blue-400 rounded-2xl text-gray-600">
            <div className=" flex justify-between items-center">
              <div className=" bg-gray-300  text-gray-600 flex items-center justify-center rounded-xl py-2 w-10 h-10 px-2">
                <IoIosLock />
              </div>

              <p>STEP 3</p>
            </div>

            <div className=" text-start mt-3">
              <h3 className=" font-bold text-black">Expert Level</h3>
              <p className=" text-gray-600">
                Become a paid, client-ready editor
              </p>

              <h2 className=" text-2xl text-gray-500">₦4,000</h2>

              {/* content */}
              <div className=" mt-3">
                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <MdOutlineSlowMotionVideo />
                  </div>

                  {/* text */}
                  <p>Client-level editing workflows</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className=" w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <WiStars />
                  </div>

                  {/* text */}
                  <p>Monetization strategies</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <MdOutlineFileDownload />
                  </div>

                  {/* text */}
                  <p>DPremium assets</p>
                </div>

                <div className=" flex gap-4">
                  {/* icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 py-1 px-1">
                    <FaComments />
                  </div>

                  {/* text */}
                  <p>Final certification</p>
                </div>

                {/* button */}
                <Button
                  children="Unlock afteer Intermediate"
                  className=" border border-gray-400 rounded-xl mt-6 w-full text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* info */}
        {/* <Aboutcard
          className=" text-center items-center max-w-2xl mt-7 "
          icon={<WiStars className=" text-white" />}
          title="Each level must be purchased and completed before unlocking the next stage."
          subtitle="Progress through levels to unlock new skills, certificates and advanced content. Your journey is gated by mastery — not just access."
        /> */}
      </div>
    </section>
  );
}
