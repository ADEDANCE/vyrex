import React from "react";
import Aboutcard from "../components/Aboutcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimony = () => {
  return (
    <section id="testimony" className=" w-full py-10 px-6 bg-blue-50">
      <div className=" text-center text-black">
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
      </div>
    </section>
  );
};

export default Testimony;
