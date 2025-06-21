"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { CardDescription, CardTitle } from "../ui/card";
// import { Progress } from "@/components/ui/progress";
import { BuildingChart } from "./BuildingChart";
import { Garden } from "./Data";
import { Progress } from "@radix-ui/react-progress";
import { ProgressDemo } from "./BuildingProgress";
import BuildingAvatar from "./BuildingAvatar";

const BuildingLeftView = () => {
  return (
    <div className="p-4 w-full bg-[#F5F5F5]">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop"
          alt=""
          className="w-full h-60 object-cover"
        />
        <Badge className="absolute top-3 left-3 rounded-full">Residential</Badge>
      </div>
      <div className="px-2">
        <h1 className=" mb-3 font-bold text-xl my-5">Sobha Garden</h1>
        <div className="my-4 lg:flex justify-between items-center grid grid-cols-2 gap-5">
          {Garden.map(e => (
            <div>
              <CardTitle className="text-xl font-bold">{e.value}</CardTitle>
              <CardDescription>{e.title}</CardDescription>
            </div>
          ))}
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-sm mb-2">Leased by 87%</h3>
          <ProgressDemo/>
        </div>
        <div className="my-3">
          <h3 className="font-bold mb-5">Work Orders</h3>
          <BuildingChart />
        </div>
        <h2 className="my-2 font-bold mb-3">On-site Staff</h2>
        <div className="my-2">
          <div className="flex justify-between items-center mb-1 ">
            <CardTitle className="text-sm">Security</CardTitle>
            <CardDescription>Louie Hodges</CardDescription>
          </div>
          <CardDescription>+971 5 927 6701</CardDescription>
        </div>
        <div className="my-2 mt-4">
          <div className="flex justify-between items-center mb-1 ">
            <CardTitle className="text-sm">Maintenance</CardTitle>
            <CardDescription>Haris Bowman</CardDescription>
          </div>
          <CardDescription>+971 5 927 6701</CardDescription>
        </div>
        <div className="mt-2">
        <BuildingAvatar/>
        </div>
        <CardDescription>34 staff members</CardDescription>
      </div>
    </div>
  );
};

export default BuildingLeftView;
