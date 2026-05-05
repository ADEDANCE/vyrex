"use client";

import Button from "@/app/components/Button";
import PayButton from "@/app/components/PayButton";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function page() {
  const router = useRouter();
  // get level url
  const params = useParams();

  const level = Array.isArray(params.level) ? params.level[0] : params.level;

  if (!level) return <p>Invalid level</p>;

  const titles = {
    beginner: "Beginner ",
    intermediate: "Intermediate ",
    expert: "Expert ",
  };
  // level order
  const levelOrder = ["beginner", "intermediate", "expert"];
  // find current level
  const currentIndex = levelOrder.indexOf(level);

  // get next level
  const nextLevel = levelOrder[currentIndex + 1];

  // if user is on expert
  if (!nextLevel) {
    // no next level
  }
  return (
    <section className=" bg-blue-50 w-full py-10 px-4 ">
      <div className=" flex flex-col items-center ">
        <h1 className=" font-bold text-black text-2xl">
          Congratulations, you've earned it.
        </h1>
        <p className=" text-gray-600 text-lg text-center">
          You just completed Editing Foundations. This is a real milestone —
          most people never finish what they start. You did
        </p>

        <div className=""></div>
        <div className=" w-full md:w-2xl mt-10 bg-white border border-blue-200 shadow py-4 px-4 rounded-2xl">
          <h2 className=" font-medium text-black text-xl">
            Don't stop now — the next phase is where it gets serious.
          </h2>

          <p>
            You've unlocked the foundation. The Intermediate phase gives you
            advanced techniques, project files, and 1:1 mentorship — the fastest
            path from competent to undeniable.
          </p>

          <div className=" flex flex-col gap-7 items-center ">
            {" "}
            <Button
              children="Download certificate"
              className="w-full md:w-xl border border-gray-300 rounded-xl mt-5"
            />
            {nextLevel ? (
              <PayButton />
            ) : (
              // <Button
              //   onClick={() => router.push(`/Payment/${nextLevel}`)}
              //   children={`Proceed to ${titles[nextLevel as keyof typeof titles]} Phase`}
              //   className="w-full md:w-xl bg-linear-to-r from-blue-500 to-blue-300 rounded-xl text-white font-bold"
              // />
              <Button
                // onClick={() => router.push("/dashboard")}
                children="You've completed all phases "
                className="w-full md:w-xl bg-green-500 rounded-xl text-white font-bold"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
