import React from "react";
import { JobDetail } from "../data/data";
import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SpecificJobDetail = () => {
  return (
    <div className="w-1/2 p-6 bg-[#F5F5F5]">
      <div className="flex gap-4 items-start">
        <img src={JobDetail[0].img} alt="" className="w-17 h-17" />
        <div>
          <h6 className="text-xl font-bold">{JobDetail[0].title}</h6>
          <p className="text-sm text-[#737373]">{JobDetail[0].JobTitle}</p>
          <p className="text-sm text-[#737373]">{JobDetail[0].description}</p>
        </div>
        <div className="ml-auto p-1.5 px-3 hover:bg-[#F1F1F1] cursor-pointer bg-white">
          <Bookmark className="w-4" />
        </div>
      </div>
      <div className="my-9 flex gap-5 gap-y-4 flex-wrap w-[90%]">
        <Badge variant="outline" className= "font-bold">
          Salary: <span className ="font-normal text-[#737373]"> {JobDetail[0].Salary} </span>{" "}
        </Badge>
        <Badge variant="outline" className= "font-bold">
          Job Type:
          <span className ="font-normal text-[#737373]">Full-Time</span>
        </Badge>
        <Badge variant="outline" className= "font-bold">
          Applicants:
          <span className ="font-normal text-[#737373]">20 / 50</span>
        </Badge>
        <Badge variant="outline" className= "font-bold">
          Experience:
          <span className ="font-normal text-[#737373]">{JobDetail[0].Experience}</span>
        </Badge>
      </div>
      <div>
        <h2 className="font-semibold text-[1.1rem]">Job Description</h2>
        <p className="my-5 text-[.85rem] text-[#737373]">{JobDetail[0].JobDesc}</p>
        <ul className="flex flex-col gap-2 pl-4">
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Design and implement user-centered interfaces for web and mobile
            applications.
          </li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Collaborate with product managers and engineers to define and
            implement innovative solutions for the product direction, visuals
            and experience.
          </li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Execute all visual design stages from concept to final hand-off to
            engineering.
          </li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Conceptualize original ideas that bring simplicity and user
            friendliness to complex design roadblocks.
          </li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Create wireframes, storyboards, user flows, process flows and site
            maps to effectively communicate interaction and design ideas.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold my-6 text-[1.1rem] ">Requirements</h2>
        <ul className="flex flex-col gap-2 pl-4">
          <li className="list-disc text-[#737373] text-[.8rem] ">{JobDetail[0].Requirements}</li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Strong portfolio demonstrating user-centered design process
          </li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Excellent communication and collaboration skills
          </li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Experience with modern design tools and processes
          </li>
          <li className="list-disc text-[#737373] text-[.8rem] ">
            Ability to work effectively in a fast-paced environment
          </li>
        </ul>
      </div>
      <Button className="w-full mt-8 rounded-none bg-black">Apply Now</Button>
    </div>
  );
};

export default SpecificJobDetail;
