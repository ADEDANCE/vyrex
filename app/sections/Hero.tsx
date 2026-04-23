import Button from "../components/Button";

export default function Hero() {
  return (
    <section className=" w-full py-10 px-6 bg-linear-to-b from-blue-500 to-blue-50">
      <div className=" flex flex-col justify-center items-center ">
        <h1 className=" text-5xl md:text-7xl text-center">
          Master Video Editing.
        </h1>
        <h1 className="text-blue-500 text-3xl md:text-7xl text-center">
          Build Your <span className=" text-blue-600">Creative</span>{" "}
          <br className=" hidden md:block" />
          <span className=" text-blue-700">Future.</span>{" "}
        </h1>
        <p className=" text-xl mt-3 text-center">
          Join VYREX, the premium learning platform designed for video editors,
          <br />
          motion designers, and content creators who want to level up their
          craft
        </p>
        <Button
          children="Start learning"
          className=" mt-7 bg-blue-500 text-white rounded-2xl"
        />
      </div>
    </section>
  );
}
