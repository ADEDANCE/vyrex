"use client";

import { CircleCheck } from "lucide-react";
import Button from "../../components/Button";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { courseData } from "@/data";
import { FaArrowRightLong } from "react-icons/fa6";
import { useParams } from "next/navigation";

type Lesson = {
  id: number;
  title: string;
  videoUrl: string;
  duration: string;
  completed: boolean;
  notes: string;
  resources: string;
};

type Module = {
  title: string;
  lessons: Lesson[];
};

type Level = "beginner" | "intermediate" | "expert";
export default function page() {
  const router = useRouter();
  const [courseModules, setCourseModules] = useState<Module[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  //

  useEffect(() => {
    if (courseModules.length > 0 && !currentLesson) {
      setCurrentLesson(courseModules[0].lessons[0]);
    }
  }, [courseModules]);

  // Get level safely
  const params = useParams();

  const rawLevel = Array.isArray(params.level) ? params.level[0] : params.level;

  const level: Level | null =
    rawLevel === "beginner" ||
    rawLevel === "intermediate" ||
    rawLevel === "expert"
      ? rawLevel
      : null;

  if (!level) return null;

  // Use level to pick correct course
  // const modules = courseData[level];

  // Fetch progress on page load
  useEffect(() => {
    const fetchProgress = async () => {
      const res = await fetch("/api/me", { credentials: "include" });
      const data = await res.json();

      // Check access
      if (!data.user.access[level]) {
        router.push("/course");
        return;
      }

      // Extract Completed Lessons
      const completedLessons =
        data?.user?.progress?.[level]?.completedLessons || [];

      const updatedModules = courseData[level].map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) => ({
          ...lesson,
          completed: completedLessons.includes(lesson.id),
        })),
      }));

      // Save Updated Modules
      setCourseModules(updatedModules);

      // set first lesson AFTER data loads
      setCurrentLesson(updatedModules[0].lessons[0]);

      setLoading(false);
    };

    if (level) fetchProgress();
  }, [level]);

  // update level copleted
  const claimCertificate = async () => {
    const res = await fetch("/api/complete-level", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ level }),
    });

    // Get response
    const data = await res.json();

    // Validate

    if (!res.ok) {
      alert(data.message);
      return;
    }

    router.push(`/course/${level}/certificate`);
  };

  // mark completed logic
  const markAsCompleted = async () => {
    const res = await fetch("/api/lesson-complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        level,
        lessonId: currentLesson?.id,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("Failed");
      return;
    }

    const completedLessons = data.progress[level].completedLessons;

    // update UI immediately
    setCourseModules((prev) =>
      prev.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) => ({
          ...lesson,
          completed: completedLessons.includes(lesson.id),
        })),
      })),
    );

    if (currentLesson) {
      setCurrentLesson({
        ...currentLesson,
        completed: true,
      });
    }
  };
  // next tutorial
  const goToNextLesson = () => {
    for (let i = 0; i < courseModules.length; i++) {
      const module = courseModules[i];

      const lessonIndex = module.lessons.findIndex(
        (l) => l.id === currentLesson?.id,
      );

      if (lessonIndex !== -1) {
        //  Case 1: Next lesson exists in same module
        if (module.lessons[lessonIndex + 1]) {
          const nextLesson = module.lessons[lessonIndex + 1];

          setCurrentLesson(nextLesson);
          // saveProgress(courseModules, nextLesson);

          return;
        }

        // Case 2: Move to next module
        if (courseModules[i + 1]) {
          const nextLesson = courseModules[i + 1].lessons[0];

          setCurrentLesson(nextLesson);
          // saveProgress(courseModules, nextLesson);

          return;
        }

        // //  Case 3: End of course
        // alert("Course completed ");
        return;
      }
    }
  };

  // check if course completed
  const isCourseCompleted = courseModules
    .flatMap((m) => m.lessons)
    .every((lesson) => lesson.completed);

  return (
    <section className=" bg-linear-to-b from-blue-200 to-blue-50 w-full py-10 px-4 ">
      <div className=" flex flex-col items-start ">
        <p className=" text-gray-600">Editing Foundations</p>
        <h2 className=" font-medium text-black text-2xl">Welcome to VYREX</h2>
        {/* <div className="relative"> */}
        <video
          className="mt-7 rounded-lg w-full"
          src={currentLesson?.videoUrl}
          controls
          controlsList="nodownload"
          // prevent right click
          onContextMenu={(e) => e.preventDefault()}
          disablePictureInPicture
        />

        <div className=" flex flex-wrap gap-6 mt-7">
          <Button
            children={
              currentLesson?.completed ? "Completed " : "Mark as completed"
            }
            onClick={markAsCompleted}
            className=" bg-linear-to-r from-blue-500 to-blue-300 rounded-xl text-white "
          />

          <Button
            children="Next lesson"
            icon={<FaArrowRightLong />}
            className=" border border-gray-300 rounded-lg flex gap-3 items-center"
            onClick={goToNextLesson}
          />

          {isCourseCompleted && (
            <Button
              onClick={claimCertificate}
              children="Claim Certificate"
              className=" bg-linear-to-r from-blue-500 to-blue-300 rounded-xl text-white font-medium"
            />
          )}
        </div>

        {/* lesson notes */}
        <div className=" mt-10 py-4 px-4 text-start border border-gray-200 shadow bg-white rounded-xl">
          <h3 className=" font-medium text-xl">Lesson notes</h3>

          <p className="text-gray-600">{currentLesson?.notes}</p>

          <Button children="Download resources" />
        </div>

        {/*Curriculum  */}
        <h3 className=" mt-8  text-gray-600 font-medium"></h3>

        {/* Module 1 */}
        {courseModules.map((module, moduleIndex) => (
          <div key={moduleIndex} className=" mt-4 w-full">
            <p className=" text-gray-600">{module.title}</p>

            {module.lessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => setCurrentLesson(lesson)}
                className={`flex justify-between cursor-pointer ${
                  currentLesson?.id === lesson.id ? "bg-blue-100" : ""
                }`}
              >
                <div className="flex gap-6 mb-2">
                  {lesson.completed ? (
                    <CircleCheck className="text-green-500 text-2xl" />
                  ) : (
                    <MdOutlineSlowMotionVideo className="text-2xl" />
                  )}

                  <p>{lesson.title}</p>
                </div>

                <p>{lesson.duration}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
