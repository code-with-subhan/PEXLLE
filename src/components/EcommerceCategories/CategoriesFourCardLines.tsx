"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Clock, MapPin, User } from "lucide-react";
import { Button } from "../ui/button";
import { Product } from "./product";

interface props {
  data: Product
  ke: number
  pag: number
  pagActive: number
}

const CategoriesFourCardLines = ({ data, ke, pag, pagActive }: props) => {
  console.log(ke)
  return (
    <div key={ke} className={`border border-[#F5F5F5] relative max-w-[250px] overflow-hidden ${ke < 8 * pagActive && ke >= (8 * pagActive) - 8 ? "block" : "hidden"}`}>
      <img
        alt=""
        src={data.image}
        className="w-[290px] h-[330px] hover:scale-125 relative  cursor-pointer object-contain"
      />
      <div className="absolute top-0 left-0 flex justify-between items-center z-20 w-full p-2 ">
        <Badge>{data.category}</Badge>
        <Badge variant="secondary">${data.price}</Badge>
      </div>
      <div className="absolute w-full h-full bottom-0  bg-[rgba(0,0,0,0.4)] transition duration-300 ease-in-out opacity-0 hover:opacity-100">
        <div className=" text-white absolute bottom-0 p-4">
          <h1 className=" font-semibold">{data.title.slice(0, 25)}</h1>
          <p className="text-sm mt-2 text-white">
            {data.description?.slice(0, 70)}
          </p>
          <div className="flex items-center gap-1 mt-3">
            <MapPin className="w-4" />
            <span className="text-xs">Downtown</span>
          </div>
          <div className="flex items-center justify-between  mt-2">
            <div className="flex  gap-1">
              <Clock className="w-4" />
              <span className="text-xs">6/4/2023</span>
            </div>
            <div className="flex  items-center gap-1">
              <User className="w-4" />
              <span className="text-xs">RetroCollector</span>
            </div>
          </div>
          <Button variant='outline' className="text-black rounded-none w-full  mt-2">View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFourCardLines;
