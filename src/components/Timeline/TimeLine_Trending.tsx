"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

const TimeLine_Trending = () => {
  return (
    <div className="my-3 bg-[#F5F5F5]">
      <h4>Trending Topics</h4>
      <Card className="my-4">
        <div className="my-1">
          <CardTitle className="text-sm font-semibold">#TechInnovation </CardTitle>
          <CardDescription className="text-[#737373] text-sm">5.2K posts</CardDescription>
        </div>
        <div className="my-1">
          <CardTitle className="text-sm font-semibold">#ArtificialIntelligence</CardTitle>
          <CardDescription className="text-[#737373] text-sm">12K posts</CardDescription>
        </div>
        <div className="my-1">
          <CardTitle className="text-sm font-semibold">#ClimateAction</CardTitle>
          <CardDescription className="text-[#737373] text-sm">8.7K posts</CardDescription>
        </div>
        <div className="my-1">
          <CardTitle className="text-sm font-semibold">#SpaceExploration</CardTitle>
          <CardDescription className="text-[#737373] text-sm">3.9K posts</CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default TimeLine_Trending;
