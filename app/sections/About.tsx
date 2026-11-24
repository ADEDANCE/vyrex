
import Aboutcard from "../components/Aboutcard";
import { IoBookOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

export default function About() {
  return (
    <section
      id="features"
      className="w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-10 bg-blue-50"
    >
      <div className="text-center text-black max-w-7xl mx-auto">

        <p className="text-blue-600 text-sm sm:text-lg md:text-xl">
          Built for your growth
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1">
          More than just learning.
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Learn practical skills, track your progress, connect with a
          community, and turn your knowledge into real opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 md:mt-8 gap-4 md:gap-5">

          <Aboutcard
            icon={<IoBookOutline className="text-white text-xl" />}
            title="Structured Learning"
            subtitle="Explore practical courses designed to help you build skills step by step."
          />

          <Aboutcard
            icon={<GoTrophy className="text-white text-xl" />}
            title="Track Your Progress"
            subtitle="Stay motivated with learning milestones, achievements, and certificates."
          />

          <Aboutcard
            icon={<MdPeopleOutline className="text-white text-xl" />}
            title="Learning Community"
            subtitle="Connect with learners, share ideas, and grow alongside others."
          />

          <Aboutcard
            icon={<TbCertificate className="text-white text-xl" />}
            title="Earn Certificates"
            subtitle="Showcase your achievements with certificates that reflect your learning journey."
          />

        </div>
      </div>
    </section>
  );
}
