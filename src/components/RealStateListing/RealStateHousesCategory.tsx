"use client";
import React from "react";
import { HousesData } from "./RealStateHouseData";
import { Heart, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const RealStateHousesCategory = () => {
  return (
    <div className="w-full">
      {HousesData.map((e) => (
        <div key={e.id} className="my-2 flex gap-2 bg-[#F5F5F5] w-full">
          <img src={e.img} alt="" className="object-cover w-1/3" />
          <div className="p-4 whitespace-pre-wrap w-full">
            <div className="flex items-center gap-1 justify-between">
              <MapPin className="w-4 text-[#737373]" />
              <CardDescription className="w-2/3">{e.title}</CardDescription>
              <Heart className="ml-auto w-4" />
            </div>
            <CardTitle className="font-semibold  w-2/3 mt-2 text-[1rem]">
              {e.subTitle}
            </CardTitle>
            <div className="flex gap-3 mt-2">
              <CardDescription>2 Bedrooms</CardDescription>
              <CardDescription>2 Guests</CardDescription>
            </div>
            <CardDescription className="mt-3">2 Baths</CardDescription>
            <div className="mt-2 flex items-center justify-between w-full ">
              <CardDescription>4x7 m² </CardDescription>
              <CardTitle className="font-semibold text-[1rem]">{e.price}</CardTitle>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RealStateHousesCategory;
