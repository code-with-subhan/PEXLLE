"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Building, House, MapPin, Store } from "lucide-react";
import { CheckboxDemoFilters } from "./checkboxListingFilters";

const RealStateListingFilters = ({bool} : {bool : boolean}) => {
  return (
    <div className={`bg-[#F5F5F5] p-5 h-150 overflow-y-auto lg:w-1/3 mb-6 lg:mb-0  ${bool ? "block" : "hidden"}`}>
      <div>
        <h1 className="font-bold text-xl">Filters</h1>
        <Input placeholder="Location" className="mt-7 mb-6 bg-white rounded-none" />
      </div>
      <h2 className="font-semibold text-sm mb-3">Property Type</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 my-2">
        <div className="border border-black rounded-none bg-[rgba(0 , 0 , 0 , 0.5)] flex flex-col items-center justify-center py-3   gap-2" >
          <House className="block text-[#737373]" />
          <span className="block">House</span>
        </div>
        <div className="rounded-none  bg-white flex items-center justify-center flex-col py-3 gap-2" >
          <Building className="text-[#737373]"/>
          <span>Apartment</span>
        </div>
        <div className="rounded-none  bg-white flex flex-col items-center justify-center py-3 gap-2" >
          <Store className="text-[#737373]"/> <span>Commercial</span>
        </div>
        <div className="rounded-none  bg-white flex flex-col items-center justify-center py-3 gap-2" >
          <MapPin className="text-[#737373]"/>
          <span>Land Plot</span>
        </div>
      </div>
      <h2 className="text-sm font-semibold mt-6 mb-5">Price Range</h2>
      <div></div>
      <h2 className="text-sm font-semibold mt-6 mb-3 ">Number Of Rooms</h2>
      <div className="md:flex items-center justify-between my-2 grid grid-cols-2 gap-4
      ">
        <CheckboxDemoFilters text={"1"}/>
        <CheckboxDemoFilters text={"2"}/>
        <CheckboxDemoFilters text={"3"}/>
        <CheckboxDemoFilters text={"4+"}/>
      </div>
      <h2 className="mt-5 text-sm font-semibold ">Basic Creteria</h2>
      <div className="mt-2 mb-5 grid grid-rows-4 gap-2">
        <CheckboxDemoFilters text="Newly Build"/>
        <CheckboxDemoFilters text="Parking Space"/>
        <CheckboxDemoFilters text="Furnished"/>
        <CheckboxDemoFilters text="Swimming Pool"/>
      </div>
      <Button variant="outline" className="w-full rounded-none cursor-pointer">All Filters</Button>

    </div>
  );
};

export default RealStateListingFilters;
