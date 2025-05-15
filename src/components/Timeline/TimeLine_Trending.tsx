"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

const TimeLine_Trending = () => {
  return (
    <div className=" bg-[#F5F5F5] py-3 px-3 mt-4">
      <h4 className="text-sm font-bold ">Trending Topics</h4>
      <div className="mt-4 grid grid-rows-4 gap-1">
        <div className="mt-1 flex justify-between items-center">
          <CardTitle className="text-sm font-semibold">#TechInnovation </CardTitle>
          <CardDescription className="text-[#737373] text-sm">5.2K posts</CardDescription>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <CardTitle className="text-sm font-semibold">#ArtificialIntelligence</CardTitle>
          <CardDescription className="text-[#737373] text-sm">12K posts</CardDescription>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <CardTitle className="text-sm font-semibold">#ClimateAction</CardTitle>
          <CardDescription className="text-[#737373] text-sm">8.7K posts</CardDescription>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <CardTitle className="text-sm font-semibold">#SpaceExploration</CardTitle>
          <CardDescription className="text-[#737373] text-sm">3.9K posts</CardDescription>
        </div>
      </div>
    </div>
  );
};

export default TimeLine_Trending;
