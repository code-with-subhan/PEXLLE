"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Building, House, MapPin, Store } from "lucide-react";
import { CheckboxDemoFilters } from "./checkboxListingFilters";

const RealStateListingFilters = () => {
  return (
    <div className="bg-[#F5F5F5] p-5 h-140 overflow-y-auto w-1/2  ">
      <div>
        <h1 className="font-bold text-xl">Filters</h1>
        <Input placeholder="Location" className="mt-7 mb-6 bg-white rounded-none" />
      </div>
      <h2 className="font-semibold text-sm mb-3">Property Type</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 my-2">
        <Button size='lg' className="border border-black rounded-none bg-[rgba(0 , 0 , 0 , 0.5)] flex flex-col justify-center" variant='outline'>
          <House className="block" />
          <span className="block">House</span>
        </Button>
        <Button className="rounded-none " variant='outline'>
          <Building />
          <span>Apartment</span>
        </Button>
        <Button className="rounded-none " variant='outline'>
          <Store /> <span>Commercial</span>
        </Button>
        <Button className="rounded-none " variant='outline'>
          <MapPin />
          <span>Land Plot</span>
        </Button>
      </div>
      <h2 className="text-sm font-semibold mt-6 mb-5">Price Range</h2>
      <div></div>
      <h2 className="text-sm font-semibold mt-6 mb-3 ">Number Of Rooms</h2>
      <div className="flex items-center justify-between my-2">
        <CheckboxDemoFilters text={"1"}/>
        <CheckboxDemoFilters text={"2"}/>
        <CheckboxDemoFilters text={"3"}/>
        <CheckboxDemoFilters text={"4+"}/>
      </div>
      <h2 className="mt-5 text-sm font-semibold mt-5">Basic Creteria</h2>
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
