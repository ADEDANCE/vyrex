import { FaUser } from "react-icons/fa";
import Aboutcard from "../components/Aboutcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
  return (
    <section className=" w-full py-10 px-6 bg-blue-50">
      <div className=" text-center text-black">
        <p className=" text-blue-500">Why VIREX</p>
        <h2 className=" text-2xl">A complete creative learning system</h2>
        <p className=" text-gray-600">
          Everything you need to go from raw footage to a portfolio that gets
          you hired.
        </p>

        <div className=" flex mt-3 gap-4 flex-col md:flex-row">
          <Aboutcard
            icon={<FaUser className="text-white text-xl" />}
            title="Structured Courses"
            subtitle="Curated learning paths from beginner to pro, taught by working editors."
          />
          <Aboutcard
            icon={<FaUser className="text-white text-xl" />}
            title="Gamified Progress"
            subtitle="Earn XP, badges and milestone certificates as you complete modules."
          />
          <Aboutcard
            icon={<FaUser className="text-white text-xl" />}
            title="Creative Community"
            subtitle="Get feedback, find collaborators and grow with thousands of editors."
          />
        </div>

        <div className=" flex gap-4 flex-col md:flex-row mt-3">
          <Aboutcard
            icon={<FaUser className="text-white text-xl" />}
            title="Mentorship"
            subtitle="Book 1:1 sessions with mentors to unlock your next creative level.."
          />
          <Aboutcard
            icon={<FaUser className="text-white text-xl" />}
            title="Project Files"
            subtitle="Download every project source so you can practice on real footage."
          />
          <Aboutcard
            icon={<FaUser className="text-white text-xl" />}
            title="Verified Certificates"
            subtitle="Showcase shareable certificates that prove your craft."
          />
        </div>

        <h2 className=" text-2xl mt-6">A community on a creative mission</h2>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className=" basis-full sm:basis-1/2 md:basis-1/3">
              <Aboutcard
                subtitle="VYREX transformed my editing skills. The structured learning path and community support are unmatched."
                image={
                  <img
                    src={
                      "/waist-up-portrait-smiling-contented-bespectacled-kid-standing-with-his-arms-folded-against-white-background.jpg"
                    }
                    alt="student"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                }
                studentname="Alli Umar"
              />
            </CarouselItem>
            <CarouselItem className="basis-full  sm:basis-1/2 md:basis-1/3 ">
              <Aboutcard
                subtitle="VYREX transformed my editing skills. The structured learning path and community support are unmatched."
                image={
                  <img
                    src={
                      "/waist-up-portrait-smiling-contented-bespectacled-kid-standing-with-his-arms-folded-against-white-background.jpg"
                    }
                    alt="student"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                }
                studentname="Alli Umar"
              />
            </CarouselItem>
            <CarouselItem className="basis-full  sm:basis-1/2 md:basis-1/3 ">
              <Aboutcard
                subtitle="VYREX transformed my editing skills. The structured learning path and community support are unmatched."
                image={
                  <img
                    src={
                      "/waist-up-portrait-smiling-contented-bespectacled-kid-standing-with-his-arms-folded-against-white-background.jpg"
                    }
                    alt="student"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                }
                studentname="Alli Umar"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>

        {/* <div className=" flex gap-4  mt-3">
        {" "}
          <Aboutcard
            subtitle="VYREX transformed my editing skills. The structured learning path and community support are unmatched."
            image={
              <img
                src={
                  "/waist-up-portrait-smiling-contented-bespectacled-kid-standing-with-his-arms-folded-against-white-background.jpg"
                }
                alt="student"
                className="w-14 h-14 rounded-full object-cover"
              />
            }
            studentname="Alli Umar"
          />{" "}
          <Aboutcard
            subtitle="VYREX transformed my editing skills. The structured learning path and community support are unmatched."
            image={
              <img
                src={
                  "/waist-up-portrait-smiling-contented-bespectacled-kid-standing-with-his-arms-folded-against-white-background.jpg"
                }
                alt="student"
                className="w-14 h-14 rounded-full object-cover"
              />
            }
            studentname="Alli Umar"
          />{" "}
        </div> */}
      </div>
    </section>
  );
}
