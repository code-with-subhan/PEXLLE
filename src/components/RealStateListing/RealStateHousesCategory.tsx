"use client";
import React from "react";
import { HousesData } from "./RealStateHouseData";
import { Heart, MapPin } from "lucide-react";
import { CardDescription, CardTitle } from "../ui/card";
import { RootState } from "@/store/store";
import {  useSelector } from "react-redux";
import Image from "next/image";

const RealStateHousesCategory = () => {
  const { query, PropertyType, rooms, BasicCreteria } = useSelector((state: RootState) => state.RealListing);
  const filterData = HousesData
    .filter((e : any) => query ? e.title.toLowerCase().includes(query.toLowerCase()) : true)
    .filter(e => PropertyType ? e.PropertyType.includes(PropertyType) : true)
    .filter(e => {
      if (rooms.length !== 0) {
        let element: string = "";
        for (let i = 0; i < rooms.length; i++) {
          const arrayElement = rooms[i]
          if (e.Rooms + "" >= "4" && arrayElement == "4") {
            element = arrayElement;
          } else if (e.Rooms + "" === arrayElement) {
            element = arrayElement;
          }
        }
        return element;
      } else {
        return e
      }
    })
    .filter(e => {
      if (BasicCreteria.length !== 0) {
        for (let i = 0; i < BasicCreteria.length; i++) {
          const arrayElement = BasicCreteria[i];
          for (const b of e.BasicCreteria) {
            if (b === arrayElement) {
              return e
            }
          }
        }
      } else {
        return e
      }
    })
  return (
    <div className="w-full">
      {filterData.map((e) => (
        <div key={e.id} className="my-2 sm:flex gap-2 bg-[#F5F5F5] w-full">
          <Image src={e.img} alt="a" blurDataURL="blur" width={1080} height={780} className="object-cover sm:w-1/3" />
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
