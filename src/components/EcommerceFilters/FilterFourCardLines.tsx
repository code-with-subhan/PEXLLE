"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Clock, MapPin, User } from "lucide-react";
import { Button } from "../ui/button";
import { Product } from "./data/FilterData";
import Image from "next/image";

interface props {
  data: Product
  ke: number
  pag: number
  pagActive: number
}

const FilterfourLInes = ({ data, ke, pag, pagActive }: props) => {
  return (
    <div key={ke} className={`border border-[#F5F5F5] relative w-full lg:max-w-[200px] overflow-hidden ${ke < 8 * pagActive && ke >= ( pagActive - 1) * 8 ? "block" : "hidden"}`}>
      <Image
        alt="a"
        blurDataURL="blur"
        width={1080}
        height={780}
        src={data.image}
        className="w-[290px] lg:h-[270px] h-150 sm:h-120 hover:scale-125 relative  cursor-pointer object-cover mx-auto"
      />
      <div className="absolute top-0 left-0 flex justify-between items-center z-20 w-full p-2 ">
        <Badge>{data.category}</Badge>
        <Badge variant="secondary">${data.price}</Badge>
      </div>
      <div className="absolute w-full h-full bottom-0  bg-[rgba(0,0,0,0.4)] transition duration-300 ease-in-out opacity-0 hover:opacity-100">
        <div className=" text-white absolute bottom-0 p-4">
          <h1 className=" font-semibold">{data.title.slice(0, 25)}</h1>
          <p className="text-sm mt-2 text-white">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="flex items-center gap-1 mt-3">
            <MapPin className="w-4" />
            <span className="text-xs">Downtown</span>
          </div>
          <div className="flex items-center justify-between  mt-2">
            <div className="flex  gap-1">
              <Clock className="w-4" />
              <span className="text-xs"></span>
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

export default FilterfourLInes;
