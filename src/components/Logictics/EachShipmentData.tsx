"use client";
import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import { MessageCircle } from "lucide-react";
import LogicticsMap from "./LogisticsMap";
const EachShipmentData = () => {
  return (
    <div className="w-full mt-6">
      <div className="text-[#737373] flex gap-2 text-xl">
        LoadID : <h1 className="font-bold text-black">#9834</h1>
      </div>
      <div className="mt-8">
        <h1 className="font-semibold mb-4">Overview</h1>
        {/* <LogicticsMap /> */}
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3  justify-between bg-[#F5F5F5] p-3 py-5 w-full">
          <img
          
            src="https://i.pravatar.cc/80?img=12"
            alt=""
            className="rounded-full size-9"
          />
          <div>
            <CardDescription>Driver</CardDescription>
            <CardTitle className="text-xl fon-bold">Courtney Henry</CardTitle>
          </div>
          <MessageCircle className="w-12 text-[#737373]" />
        </div>
        <div className="flex items-center gap-3  justify-between bg-[#F5F5F5] p-3 py-5 w-full">
          <img
            src="https://i.pravatar.cc/80?img=23"
            alt=""
            className="rounded-full size-9"
          />
          <div>
            <CardDescription>Customer</CardDescription>
            <CardTitle className="text-xl fon-bold">Kristin Watson</CardTitle>
          </div>
          <MessageCircle className="w-7 text-[#737373]" />
        </div>
      </div>
      <div className="flex gap-6 justify-between items-center mt-6">
        <div className="bg-[#F5F5F5] p-5 w-full">
          <CardDescription>Truck Number</CardDescription>
          <CardTitle className="text-xl font-bold mt-3">KT 71483</CardTitle>
        </div>
        <div className="bg-[#F5F5F5] p-5 w-full">
          <CardDescription>Load Price</CardDescription>
          <CardTitle className="text-xl font-bold mt-3">$6,533.44</CardTitle>
        </div>
      </div>
    </div>
  );
};

export default EachShipmentData;
