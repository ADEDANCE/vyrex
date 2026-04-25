import { CircleCheck } from "lucide-react";
import Button from "../components/Button";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function page() {
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50 w-full py-10 px-4 ">
      <div className=" flex flex-col items-start ">
        <p className=" text-gray-600">Editing Foundations</p>
        <h2 className=" font-medium text-black text-2xl">Welcome to VYREX</h2>

        <video className=" mt-7 rounded-lg w-full" src=""></video>

        <div className=" flex gap-6">
          <Button
            children="Mark as completed"
            className=" bg-linear-to-r from-blue-500 to-blue-300 rounded-xl"
          />

          <Button children="Next lesson" />
        </div>

        {/* lesson notes */}
        <div className=" mt-10 py-4 px-4 text-start border border-gray-200 shadow bg-white rounded-xl">
          <h3 className=" font-medium text-xl">Lesson notes</h3>

          <p className=" text-gray-600">
            In this lesson we explore setting up your workspace. Use the project
            files in the resources tab, and remember: cuts are about emotion
            before they're about technique.
          </p>

          <Button children="Download resources" />
        </div>

        {/*Curriculum  */}
        <h3 className=" mt-8  text-gray-600 font-medium"></h3>

        {/* Module 1 */}
        <div className=" mt-4 w-full">
          <p className=" text-gray-600">Module 1 · The Editor's Mindset</p>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <CircleCheck className=" text-green-500" />
              <p>Welcome to VYREX</p>
            </div>
            <p className=" text-gray-600">4:12</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <CircleCheck className=" text-green-500" />
              <p>Phycology of video editing</p>
            </div>
            <p className=" text-gray-600">12:30</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Video editing principle</p>
            </div>
            <p className=" text-gray-600">9:15</p>
          </div>
        </div>

        {/* Module 2 */}
        <div className=" mt-4 w-full">
          <p className=" text-gray-600">Module 2 · The Language of Cuts</p>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />

              <p>Intro to capcut 1</p>
            </div>
            <p className=" text-gray-600">4:12</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />

              <p>Intro to capcut 2</p>
            </div>
            <p className=" text-gray-600">12:30</p>
          </div>
        </div>

        {/* Module 3 */}
        <div className=" mt-4 w-full">
          <p className=" text-gray-600">Module 3 · The Editor's Mindset</p>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Sourcing for resources 1 </p>
            </div>
            <p className=" text-gray-600">4:12</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Sourcing for resources 2 </p>
            </div>
            <p className=" text-gray-600">12:30</p>
          </div>
        </div>

        {/* Module 4 */}
        <div className=" mt-4 w-full">
          <p className=" text-gray-600">Module 4 · The Editor's Mindset</p>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Video Scripting Formula</p>
            </div>
            <p className=" text-gray-600">4:12</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Video Scripting</p>
            </div>
            <p className=" text-gray-600">12:30</p>
          </div>
        </div>

        {/* Module 5 */}
        <div className=" mt-4 w-full">
          <p className=" text-gray-600">Module 5 · The Editor's Mindset</p>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Slide Show 1</p>
            </div>
            <p className=" text-gray-600">4:12</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Slide Show 2</p>
            </div>
            <p className=" text-gray-600">12:30</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Smart hub </p>
            </div>
            <p className=" text-gray-600">9:15</p>
          </div>
        </div>

        {/* Module 6 */}
        <div className=" mt-4 w-full">
          <p className=" text-gray-600">Module 1 · The Editor's Mindset</p>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Slide show 1 </p>
            </div>
            <p className=" text-gray-600">9:15</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Slide show 2 </p>
            </div>

            <p className=" text-gray-600">12:30</p>
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <MdOutlineSlowMotionVideo className=" text-gray-500 text-2xl" />
              <p>Congratulattion And Encouragement Message </p>
            </div>

            <p className=" text-gray-600">9:15</p>
          </div>
        </div>
      </div>
    </section>
  );
}
