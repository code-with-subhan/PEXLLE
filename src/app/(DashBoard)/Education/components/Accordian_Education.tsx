"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordian_Education = () => {
  return (
    <div>
      <h5 className="text-sm text-[#737373] font-bold">COURSE TABLE OF CONTENTS</h5>
      <div className="my-4">
        <Accordion type="single" collapsible={false}  className="w-full grid gap-1">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:bg-[#F5F5F5] rounded-none px-5 py-2">Introduction</AccordionTrigger>
            <Accordion type="single" collapsible={false}  className="w-full">
              <AccordionContent className="flex flex-col gap-4 bg-[#F5F5F5] p-7 py-4 mt-1">
                <AccordionItem value="item-8">
                  <AccordionTrigger>Preparing the Character</AccordionTrigger>
                  <AccordionContent className="text-[#737373]">
                  You will dive deep into the essential techniques and workflows required to effectively prepare a character model for advanced 3D modelling. From optimizing the topology and refining the geometry to setting up UV mapping and creating efficient rigging structures, this part of the course will equip you with the fundamental skills needed for character preparation.
                  </AccordionContent>
                </AccordionItem>{" "}
              </AccordionContent>
            </Accordion>
          </AccordionItem>
          <AccordionItem value="item-2 " className="border-none">
            <AccordionTrigger className="hover:bg-[#F5F5F5] rounded-none px-5 border-none py-2">Modeling the Head</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="hover:bg-[#F5F5F5] rounded-none px-5 border-none py-2">Modeling the Body</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="hover:bg-[#F5F5F5] rounded-none px-5 border-none py-2">Texuring</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="hover:bg-[#F5F5F5] rounded-none px-5 border-none py-2">Rigging</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="hover:bg-[#F5F5F5] rounded-none px-5 border-none py-2">Animation</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-7" className="border-none">
            <AccordionTrigger className="hover:bg-[#F5F5F5] rounded-none px-5 border-none py-2">Rendering</AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian_Education;
