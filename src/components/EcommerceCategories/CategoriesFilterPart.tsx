"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LayoutGrid, List } from "lucide-react";
import { ComboboxFilter } from "./ComboBoxFilter";

const CategoriesFilterPart = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-black relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZb360NlZhomuQL-pSLFqIlCLtQ63jXopSUQ&s"
            alt=""
            className="h-53 w-full object-cover opacity-55"
          />
          <div className="absolute top-0 left-0 flex justify-center items-center h-full flex-col w-full gap-5">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Our Marketplace
            </h1>
            <p className="text-xl text-white">
              Discover amazing deals on unique items
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 flex items-center gap-4">
        <Input className="bg-[#F5F5F5] rounded-none focus:border-none focus:outline-none " placeholder="Search ads..." />
        <ComboboxFilter />
        <Button className="rounded-none" variant="outline" size='icon'>
          <LayoutGrid />
        </Button>
        <Button className="rounded-none" size='icon'>
          <List />
        </Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Button size="sm" className="rounded-none">All</Button>
        <Button size='sm' className="rounded-none" variant="secondary">
          Electronics
        </Button>
        <Button size='sm' className="rounded-none" variant="secondary">
          Fashion
        </Button>
        <Button size='sm' className="rounded-none" variant="secondary">
          Home & Garden
        </Button>
        <Button size='sm' className="rounded-none" variant="secondary">
          Sprots
        </Button>
        <Button size='sm' className="rounded-none" variant="secondary">
          Toys
        </Button>
        <Button size='sm' className="rounded-none" variant="secondary">
          Vehicles
        </Button>
        <Button size='sm' className="rounded-none" variant="secondary">
          Other
        </Button>
      </div>
    </div>
  );
};

export default CategoriesFilterPart;
