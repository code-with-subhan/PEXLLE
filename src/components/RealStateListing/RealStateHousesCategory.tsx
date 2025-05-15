"use client";
import React from "react";
import { HousesData } from "./RealStateHouseData";
import { Heart, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const RealStateHousesCategory = () => {
  return (
    <div>
      {HousesData.map((e) => (
        <Card key={e.id} className="my-2">
          <div className={`bg-[url(${e.img})] bg-no-repeat bg-cover bg-center `}></div>
          <CardContent className="p-3">
            <div className="flex items-center">
                <MapPin/>
                <CardDescription className="w-2/3 ">{e.title}</CardDescription>
                <Heart className="ml-auto"/>
            </div>
            <CardTitle className="font-bold text-2xl w-2/3 mt-2">{e.subTitle}</CardTitle>
            <div className="flex gap-3 mt-2">
                <CardDescription>2 Bedrooms</CardDescription>
                <CardDescription>2 Guests</CardDescription>
            </div>
            <CardDescription className="mt-3">2 Baths</CardDescription>
            <div className="mt-2 flex items-center ">
                <CardDescription>4x7 m²                </CardDescription>
                <CardTitle className="font-bold text-2xl">{e.price}</CardTitle>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RealStateHousesCategory;
