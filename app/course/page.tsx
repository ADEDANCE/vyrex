import CourseCard from "../components/Coursecard";

export default function page() {
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
            buttonText="Enroll Now"
            className=" bg-blue-500 text-white"
          />

          <CourseCard
            image="/Intermediate.jpg"
            title="Intermediate"
            subtitle="Master cuts, pacing & storytelling"
            buttonText="Unlock After Beginner"
            className=" border border-gray-300"
          />

          <CourseCard
            image="/Expert.jpg"
            title="Advanced Editing"
            subtitle="Cinematic storytelling & transitions"
            buttonText="Unlock After Intermediate"
            className=" border border-gray-300"
          />
        </div>
      </div>
    </section>
  );
}
