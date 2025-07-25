"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal } from "lucide-react";
import { Bookmark } from "lucide-react";
import { JobDetail } from "../data/data";
import { JobData } from "../data/data";
import Image from "next/image";

const CompanyJobCards = ({
  WorkObj,
  setWorkObj,
  setshowWork,
  showWork,
}: {
  WorkObj: JobData;
  setWorkObj: (value: JobData) => void;
  setshowWork: (value: boolean | ((prev: boolean) => boolean)) => void;
  showWork: boolean;
}) => {
  return (
    <div
      className={`lg:w-[calc(300px)] py-3 ${showWork ? "block" : "hidden"
        }  lg:block`}
    >
      <div className="bg-white flex gap-2 ">
        <Input
          placeholder={` UI Designer`}
          className="rounded-none pl-13 focus:border-none active:border-none bg-[#F5F5F5]"
        />
        <Button size="icon" variant="outline" className="rounded-none">
          <SlidersHorizontal />
        </Button>
      </div>
      <Badge className="mt-6 p-1 px-2 flex justify-center items-center text-sm rounded-full">
        Search Result 6 Jobs Found{" "}
      </Badge>
      <div className="p-8 pt-3 mt-2 px-1 flex flex-col gap-4 h-[75vh] overflow-auto">
        {/*  */}
        {JobDetail.map((e) => (
          <div
            className={`p-4  cursor-pointer ${WorkObj.id == e.id
                ? "border-black bg-[rgba(0,0,0,0.1)] border"
                : "bg-[#f5F5F5]"
              }`}
            key={e.id}
            onClick={() => {
              setshowWork((prev) => !prev);
              setWorkObj(e);
            }}
          >
            <div className="flex gap-4 items-start">
              <Image src={e.img} alt="abcd" blurDataURL="blur" width={1080} height={780} className="w-10 h-10" />
              <div>
                <h6 className="text-sm font-bold">{e.title}</h6>
                <p className="text-xs text-[#737373]">{e.JobTitle}</p>
                <p className="text-xs text-[#737373]">{e.description}</p>
              </div>
              <div className="ml-auto p-1.5 px-3 hover:bg-[#F1F1F1] cursor-pointer bg-white">
                <Bookmark className="w-4" />
              </div>
            </div>
            <div className="flex gap-2  mt-5">
              <Badge
                variant="secondary"
                className="bg-white p-0 px-1.5 text-xs"
              >
                {e.Salary}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white p-0 px-1.5 text-xs"
              >
                Full-Time
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white p-0 px-1.5 text-xs"
              >
                Senior
              </Badge>
            </div>
            <div className="text-sm text-[#737373] mt-2">{e.Requirements}</div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-[#737373]">{e.Verified}</span>
              <span className="text-xs text-[#737373]">{e.time}</span>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default CompanyJobCards;
