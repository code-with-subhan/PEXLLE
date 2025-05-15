"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Building, House, MapPin, Store } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxDemoFilters } from "./checkboxListingFilters";

const RealStateListingFilters = () => {
  return (
    <div className="bg-[#F5F5F5] p-4 h-90% overflow-y-auto w-1/3">
      <div>
        <h1 className="font-bold">Filters</h1>
        <Input placeholder="Location" className="mt-4 mb-2" />
      </div>
      <h2 className="font-semibold text-sm">Property Type</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 my-2">
        <Button className="border border-black ">
          <House />
          <span>House</span>
        </Button>
        <Button className="">
          <Building />
          <span>Apartment</span>
        </Button>
        <Button className="">
          <Store /> <span>Commercial</span>
        </Button>
        <Button className="">
          <MapPin />
          <span>Land Plot</span>
        </Button>
      </div>
      <h2 className="text-sm font-semibold">Price Range</h2>
      <div></div>
      <h2 className="text-sm font-semibold ">Number Of Rooms</h2>
      <div className="flex items-center justify-between my-2">
        <CheckboxDemoFilters text={"1"}/>
        <CheckboxDemoFilters text={"2"}/>
        <CheckboxDemoFilters text={"3"}/>
        <CheckboxDemoFilters text={"4+"}/>
      </div>
      <h2>Basic Creteria</h2>
      <div className="mt-2 mb-5">
        <CheckboxDemoFilters text="Newly Build"/>
        <CheckboxDemoFilters text="Parking Space"/>
        <CheckboxDemoFilters text="Furnished"/>
        <CheckboxDemoFilters text="Swimming Pool"/>
      </div>
      <Button variant="outline">All Filters</Button>

    </div>
  );
};

export default RealStateListingFilters;
