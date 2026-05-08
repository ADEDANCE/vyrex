"use client";
import CourseCard from "../components/Coursecard";
import { useRouter } from "next/navigation";
import PayButton from "../components/PayButton";
import { useState, useEffect } from "react";
import Button from "../components/Button";

export default function Page() {
  type User = {
    email: string;
    currentLevel?: string;

    progress: {
      beginner: {
        paid: boolean;

        completed: boolean;
      };

      intermediate: {
        paid: boolean;
        completed: boolean;
      };

      expert: {
        paid: boolean;
      };
    };
  };

  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  // fetch user
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/me", { credentials: "include" });
      const data = await res.json();

      console.log("ME API RESPONSE:", data);

      // Save User to State
      setUser(data.user);
    };

    getUser();
  }, []);

  if (!user) {
    return <div className="p-5">Loading...</div>;
  }
  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50 w-full py-10 px-4 ">
      <div className=" flex flex-col items-start ">
        <p className=" text-blue-500">Library</p>
        <h1 className=" text-black font-bold text-2xl">
          The complete course
          <span className=" bg-linear-to-tr from-blue-300 to-blue-900 bg-clip-text text-transparent ">
            {" "}
            library
          </span>
        </h1>
        <p className=" text-xs">
          {" "}
          Progress through three structured stages, each unlocking new
          techniques, projects and certifications.
        </p>

        <div className=" mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <CourseCard
            image="/Beginner.jpg"
            title="Editing Foundations"
            subtitle="Master cuts, pacing & storytelling"
            action={
              user &&
              (user.progress.beginner.paid ? (
                <Button
                  onClick={() => router.push("/course/beginner")}
                  children="Continue Learning"
                  className="w-full bg-green-500 text-white rounded-xl"
                />
              ) : (
                <PayButton level="beginner" amount={3000} email={user.email} />
              ))
            }
          />

          <CourseCard
            image="/Intermediate.jpg"
            title="Intermediate"
            subtitle="Master cuts, pacing & storytelling"
            action={
              user &&
              (!user.progress.beginner.completed ? (
                <Button
                  children="Unlock after Beginner"
                  disabled
                  className="w-full bg-gray-300 text-gray-600 rounded-xl cursor-not-allowed"
                />
              ) : user.progress.intermediate.paid ? (
                <Button
                  onClick={() => router.push("/course/intermediate")}
                  children="Continue Learning"
                  className="w-full bg-green-500 text-white rounded-xl"
                />
              ) : (
                <PayButton
                  level="intermediate"
                  amount={3000}
                  email={user.email}
                />
              ))
            }
          />

          <CourseCard
            image="/Expert.jpg"
            title="Advanced Editing"
            subtitle="Cinematic storytelling & transitions"
            action={
              user &&
              (!user.progress.intermediate.completed ? (
                <Button
                  children="Unlock after Intermediate"
                  disabled
                  className="w-full bg-gray-300 text-gray-600 rounded-xl cursor-not-allowed"
                />
              ) : user.progress.expert.paid ? (
                <Button
                  onClick={() => router.push("/course/expert")}
                  children="Continue Learning"
                  className="w-full bg-green-500 text-white rounded-xl"
                />
              ) : (
                <PayButton
                  level="intermediate"
                  amount={4000}
                  email={user.email}
                />
              ))
            }
          />
        </div>
      </div>
    </section>
  );
}
