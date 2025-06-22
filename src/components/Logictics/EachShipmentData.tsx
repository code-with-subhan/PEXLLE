"use client";
import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import { MessageCircle } from "lucide-react";
import LogicticsMap from "./LogisticsMap";
import Image from "next/image";
const EachShipmentData = ({ showlogic }: {  showlogic: boolean }) => {
  return (
    <div className={`w-full mt-6 lg:block ${showlogic ? "hidden" : "block"} `}>
      
      <div className="mt-8">
        <h1 className="font-semibold mb-4">Overview</h1>
        <LogicticsMap />
      </div>
      <div className="flex flex-wrap items-center gap-6 mt-8 lg:grid grid-cols-2">
        <div className="flex items-center gap-3  justify-between bg-[#F5F5F5] p-3 py-5 w-full">
          <Image
            src="https://i.pravatar.cc/80?img=12"
            alt="blur"
            blurDataURL="i.pravatar.cc"
            width={1080}
            height={780}
            className="rounded-full size-9"
          />
          <div>
            <CardDescription>Driver</CardDescription>
            <CardTitle className="text-xl fon-bold">Courtney Henry</CardTitle>
          </div>
          <MessageCircle className="w-12 text-[#737373] lg:m-none ml-auto" />
        </div>
        <div className="flex items-center gap-3  justify-between bg-[#F5F5F5] p-3 py-5 w-full">
          <Image
            src="https://i.pravatar.cc/80?img=23"
            alt="blur"
            blurDataURL="i.pravatar.cc"
            width={1080}
            height={780}
            className="rounded-full size-9"
          />
          <div>
            <CardDescription>Customer</CardDescription>
            <CardTitle className="text-xl fon-bold">Kristin Watson</CardTitle>
          </div>
          <MessageCircle className="w-7 text-[#737373] lg:m-none ml-auto" />
        </div>
      </div>
      <div className="lg:flex grid gap-6 justify-between items-center mt-6 grid-cols-1">
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
