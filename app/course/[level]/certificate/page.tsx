"use client";

import Button from "@/app/components/Button";
import PayButton from "@/app/components/PayButton";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function page() {
  type User = {
    email: string;
    beginnerPaid?: boolean;
    currentLevel?: string;
  };

  type Level = "beginner" | "intermediate" | "expert";

  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  // fetch user
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/me", { credentials: "include" });
      const data = await res.json();

      console.log("ME API RESPONSE:", data);

      setUser(data.user);
    };

    getUser();
  }, []);

  // get level url
  const params = useParams();

  const paramsLevel = Array.isArray(params.level)
    ? params.level[0]
    : params.level;

  // level order
  const levelOrder: Level[] = ["beginner", "intermediate", "expert"];

  const level: Level | null = levelOrder.includes(paramsLevel as Level)
    ? (paramsLevel as Level)
    : null;

  if (!level) return <p>Invalid level</p>;

  if (!user) {
    return <div className="p-5">Loading...</div>;
  }

  const prices = {
    beginner: 3000,
    intermediate: 3000,
    expert: 4000,
  };

  const titles = {
    beginner: "Beginner ",
    intermediate: "Intermediate ",
    expert: "Expert ",
  };

  // find current level
  const currentIndex = levelOrder.indexOf(level);

  // get next level
  const nextLevel =
    currentIndex !== -1 && currentIndex < levelOrder.length - 1
      ? levelOrder[currentIndex + 1]
      : null;

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
            You've unlocked the foundation. The {nextLevel} phase gives you
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
              // <Button
              //   onClick={() => router.push(`/Payment/${nextLevel}`)}
              //   children={`Proceed to ${titles[nextLevel as keyof typeof titles]} Phase`}
              //   className="w-full md:w-xl bg-linear-to-r from-blue-500 to-blue-300 rounded-xl text-white font-bold"
              // />
              <PayButton
                level={nextLevel}
                amount={prices[nextLevel as keyof typeof prices]}
                email={user.email}
              />
            ) : (
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
