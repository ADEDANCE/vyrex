"use client";

import { CircleCheck } from "lucide-react";
import Button from "../components/Button";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
export default function page() {
  const router = useRouter();
  const modules = [
    {
      title: "Module 1",
      lessons: [
        {
          id: 1,
          title: "Welcome to VYREX",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes: "Welcoming message",
          resources: "file.pdf",
        },
        {
          id: 2,
          title: "Psychology of video editing",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes:
            "In this lesson we explore how great editors think. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
        {
          id: 3,
          title: "Video editing principle",
          videoUrl: "/welcome.mp4",
          duration: "9:12",
          completed: false,
          notes:
            "In this lesson we explore Video editing principle. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
      ],
    },

    {
      title: "Module 2",
      lessons: [
        {
          id: 4,
          title: "Intro to capcut 1",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes: "Welcoming message",
          resources: "file.pdf",
        },
        {
          id: 5,
          title: "Intro to capcut 2",
          videoUrl: "/welcome.mp4",
          duration: "12:12",
          completed: false,
          notes:
            "In this lesson we explore how great editors think. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
      ],
    },

    {
      title: "Module 3",
      lessons: [
        {
          id: 6,
          title: "Sourcing for resources 1",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes: "Welcoming message",
          resources: "file.pdf",
        },
        {
          id: 7,
          title: "Sourcing for resources 2",
          videoUrl: "/welcome.mp4",
          duration: "12:12",
          completed: false,
          notes:
            "In this lesson we explore how great editors think. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
      ],
    },

    {
      title: "Module 4",
      lessons: [
        {
          id: 8,
          title: "Video Scripting Formula",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes: "Welcoming message",
          resources: "file.pdf",
        },
        {
          id: 9,
          title: "Video Scripting",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes:
            "In this lesson we explore how great editors think. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
      ],
    },

    {
      title: "Module 5",
      lessons: [
        {
          id: 10,
          title: "Slide Show 1",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes: "Welcoming message",
          resources: "file.pdf",
        },
        {
          id: 11,
          title: "Slide Show 2",
          videoUrl: "/welcome.mp4",
          duration: "4:12",
          completed: false,
          notes:
            "In this lesson we explore how great editors think. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
      ],
    },

    {
      title: "Module 6",
      lessons: [
        {
          id: 12,
          title: "Smart hub",
          videoUrl: "/welcome.mp4",
          duration: "9:12",
          completed: false,
          notes:
            "In this lesson we explore Video editing principle. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
        {
          id: 13,
          title: "Smart hub",
          videoUrl: "/welcome.mp4",
          duration: "9:12",
          completed: false,
          notes:
            "In this lesson we explore Video editing principle. Use the project files in the resources tab, and remember: cuts are about emotion before they're about technique.",
          resources: "file.pdf",
        },
      ],
    },
  ];

  const [currentLesson, setCurrentLesson] = useState<Lesson>(
    modules[0].lessons[0],
  );

  // mark completed state
  const [courseModules, setCourseModules] = useState<Module[]>(modules);

  // mark completed logic
  const markAsCompleted = () => {
    const updated = courseModules.map((module) => ({
      ...module,
      lessons: module.lessons.map((lesson) =>
        lesson.id === currentLesson.id
          ? { ...lesson, completed: true }
          : lesson,
      ),
    }));

    setCourseModules(updated);

    // update currentLesson reference
    const newLesson = updated
      .flatMap((m) => m.lessons)
      .find((l) => l.id === currentLesson.id);

    if (newLesson) {
      setCurrentLesson(newLesson);
    }
    // saveProgress(updated, currentLesson);
  };
  // next tutorial
  const goToNextLesson = () => {
    for (let i = 0; i < courseModules.length; i++) {
      const module = courseModules[i];

      const lessonIndex = module.lessons.findIndex(
        (l) => l.id === currentLesson.id,
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

        //  Case 3: End of course
        alert("Course completed ");
        return;
      }
    }
  };

  // // save progress
  // const saveProgress = (modules: Module[], currentLesson: Lesson) => {
  //   const completedLessons = modules
  //     .flatMap((m) => m.lessons)
  //     .filter((l) => l.completed)
  //     .map((l) => l.id);

  //   const data = {
  //     currentLessonId: currentLesson.id,
  //     completedLessons,
  //   };

  //   localStorage.setItem("vyrex-progress", JSON.stringify(data));
  // };

  // // Restore progress
  // useEffect(() => {
  //   const saved = localStorage.getItem("vyrex-progress");

  //   if (!saved) return;

  //   const parsed = JSON.parse(saved);

  //   // restore completed lessons
  //   const updatedModules = modules.map((module) => ({
  //     ...module,
  //     lessons: module.lessons.map((lesson) => ({
  //       ...lesson,
  //       completed: parsed.completedLessons.includes(lesson.id),
  //     })),
  //   }));

  //   setCourseModules(updatedModules);

  //   // restore current lesson
  //   const lesson = updatedModules
  //     .flatMap((m) => m.lessons)
  //     .find((l) => l.id === parsed.currentLessonId);

  //   if (lesson) {
  //     setCurrentLesson(lesson);
  //   }
  // }, []);

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
        {/* <div className="absolute top-78 left-25 text-white text-9xl opacity-60">
            VYREX
          </div>
        </div> */}

        <div className=" flex gap-6 mt-7">
          <Button
            children={
              currentLesson?.completed ? "Completed " : "Mark as completed"
            }
            onClick={markAsCompleted}
            className=" bg-linear-to-r from-blue-500 to-blue-300 rounded-xl text-white "
          />

          <Button children="Next lesson" onClick={goToNextLesson} />

          {isCourseCompleted && (
            <Button
              onClick={() => router.push("/Beginner/Certificate")}
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
