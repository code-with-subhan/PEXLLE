"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Clock, MapPin, User } from "lucide-react";
import { Button } from "../ui/button";

import { Product } from "./product";

interface props {
  data: Product
  pag: number
  ke: number
  pagActive: number
}
const CategoriesList = ({ data, ke, pag, pagActive }: props) => {
  return (
    <div key={ke} className={`relative flex border hover:shadow-md shadow-gray-300 transition duration-450 border-[#F5F5F5]  ${ke < 8 * pagActive && ke >= (8 * pagActive) - 8 ? "block" : "hidden"}`}>
      <div className="w-1/4  min-h-48 md:h-48">
        <img
          src={data.image}
          alt=""
          className="h-full  w-full md:object-contain object-cover"
        />
        <Badge className="absolute top-2 left-2">{data.category}</Badge>
      </div>
      <div className="w-full h-full">
        <div className=" w-full p-4 bottom-0  text-black">
          <h1 className="text-[1.2rem]">{data.title}</h1>
          <p className="text-sm text-[#737373] mt-1">
            {data.description?.slice(0, 90)}....
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-1 items-center text-sm">
              <MapPin className="w-4" />
              Downtown
            </div>
            <h3>${data.price}</h3>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-1 items-center text-xs text-[#737373]">
              <Clock className="w-3" />
              6/14/2023
            </div>
            <div className="flex gap-1 items-center text-xs text-[#737373]">
              <User className="w-3" />
              RetroCollector
            </div>
          </div>
          <div className="flex justify-end mt-2 w-full">
            <Button variant="outline" className="rounded-none">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
