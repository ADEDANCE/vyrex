import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CiCircleQuestion } from "react-icons/ci";

const Faq = () => {
  return (
    <section id="faq" className=" w-full py-10 px-6 bg-blue-50">
      <div className=" text-center text-black">
        <h3 className=" text-blue-500 text-xl">FAQ</h3>
        <h1 className=" text-2xl font-medium">Questions? We got answers.</h1>

        <div className=" mt-6 py-5 px-4 bg-white shadow rounded-2xl ">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className=" text-start"
          >
            <AccordionItem value="item-1" className=" border-b">
              <AccordionTrigger className=" items-center gap-2">
                <CiCircleQuestion className=" text-blue-500" />
                How does the level system work?
              </AccordionTrigger>
              <AccordionContent>
                VIREX is structured as a journey. You start at the Beginner
                level, complete the curriculum, earn your certificate, and then
                unlock the option to purchase the next level. Each phase builds
                on the last so your skills compound
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className=" border-b">
              <AccordionTrigger className=" items-center gap-2">
                <CiCircleQuestion className=" text-blue-500" />
                Can i download the course materials?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Every lesson includes downloadable project files, footage,
                and notes so you can follow along offline and keep practicing at
                your own pace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className=" border-b">
              <AccordionTrigger className=" items-center gap-2">
                <CiCircleQuestion className=" text-blue-500" />
                Do I get a certificate after completing a level?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. Once you finish all lessons and pass the final
                assessment, you unlock a verified certificate you can download,
                share, and add to your portfolio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className=" border-b">
              <AccordionTrigger className=" items-center gap-2">
                <CiCircleQuestion className=" text-blue-500" />I am a complete
                beginner. Is VIREX for me?
              </AccordionTrigger>
              <AccordionContent>
                VIREX was built for exactly that. The Beginner level assumes
                zero prior experience and walks you through the software,
                theory, and your first real edits step-by-step.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
