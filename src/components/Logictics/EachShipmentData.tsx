"use client";
import React from "react";
import InteractiveMap from "../RealStateListing/RealStateMap";
import { CardDescription, CardTitle } from "../ui/card";
import { MessageCircle } from "lucide-react";

const EachShipmentData = () => {
  return (
    <div>
      <div className="text-[#737373]">
        LoadId : <h1 className="font-bold text-black">9834</h1>
      </div>
      <div className="mt-8">
        <h1>Overview</h1>
        <InteractiveMap />
      </div>
      <div>
        <div className="bg-[#F5F5F5] p-3">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt=""
            className="rounded-full"
          />
          <div>
            <CardDescription>Driver</CardDescription>
            <CardTitle>Courtney Henry</CardTitle>
          </div>
          <MessageCircle />
        </div>
        <div className="bg-[#F5F5F5] p-3">
          <img
            src="https://i.pravatar.cc/80?img=23"
            alt=""
            className="rounded-full"
          />
          <div>
            <CardDescription>Customer</CardDescription>
            <CardTitle>Kristin Watson</CardTitle>
          </div>
          <MessageCircle />
        </div>
      </div>
      <div>
        <div>
          <CardDescription>Truck Number</CardDescription>
          <CardTitle>KT 71483</CardTitle>
        </div>
        <div>
          <CardDescription>Load Price</CardDescription>
          <CardTitle>$6,533.44</CardTitle>
        </div>
      </div>
    </div>
  );
};

export default EachShipmentData;
