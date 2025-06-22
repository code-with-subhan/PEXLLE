"use client";
import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import { Review } from "./ReviewListData";
import { Badge } from "../ui/badge";
import Image from "next/image";

const ReviewList = () => {
  return (
    <div className="mb-2">
      <CardTitle className="text-[1rem] mb-9 font-bold">Review List</CardTitle>
      <div className="lg:flex gap-3 grid md:grid-cols-2 sm:grid-cols-1  ">
        {Review.map((e) => (
          <div key={e.id} className="p-7 bg-[#F5F5F5] pb-11 w-full ">
            <div className="flex gap-3 items-center">
              <Image src={e.img} alt="a" blurDataURL="blur" width={1080} height={780}  className="sm:size-12 size-7 rounded-full" />
              <div>
                <CardTitle className="text-sm">{e.title}</CardTitle>
                <CardDescription>{e.subtitle}</CardDescription>
              </div>
              <Badge className="rounded-full bg-yellow-50 text-yellow-300 borde-none " >
                {e.BadgeRange}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star ml-1 h-3 w-3 fill-current"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </Badge>
            </div>
            <CardDescription className="text-black mt-6">
              {e.description}
            </CardDescription>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
