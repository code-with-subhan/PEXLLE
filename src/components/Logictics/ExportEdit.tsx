"use client";
import { Download, Pen, PenLine, Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Indicator } from "./indicatorData";
import StepIndicator from "./StepIndicator";
import { CardDescription, CardTitle } from "../ui/card";

const ExportEdit = ({showlogic} : {showlogic : boolean}) => {
  return (
    <div className={`lg:w-1/2 mt-4 lg:block ${showlogic ? "hidden" : "block"}`}>
      
      <div className="mt-17 flex justify-between items-center px-3">
        <h2 className="font-bold text-[1rem]">Stops</h2>
        <Button size="icon" variant='ghost' className="rounded-none cursor-pointer ml-auto lg:ml-none">
          <Plus />
        </Button>
        <Button size="icon" variant='ghost' className="rounded-none cursor-pointer">
          <PenLine />
        </Button>
      </div>
      <div className="grid gap-8 mt-5">
        {Indicator.map((e) => (
          <div key={e.id} className="flex gap-5">
            <StepIndicator />
            <div>
              <CardTitle className="text-sm">{e.title}</CardTitle>
              <CardTitle className="text-sm">{e.id}</CardTitle>
              <CardDescription className="text-sm">{e.subtitle}</CardDescription>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-[#F5F5F5] mt-5 pl-6 pt-6 pb-5 pr-7">
        <div className="flex justify-between items-center mb-6">
          <CardTitle className="font-bold">Notes</CardTitle>
          <PenLine className="w-4"/>
        </div>
        <CardDescription className="text-xs mt-3">
          Please ensure that all goods are in a safe and secure condition before
          departure. Pay attention to meeting the delivery deadlines and
          familiarize yourself with the route to avoid any delays.
        </CardDescription>
        <CardDescription className="text-xs mt-3">
          In case of any questions or setbacks, please contact us immediately.
          Our support team is available 24/7 to assist you with any concerns
          regarding the shipment, route, or delivery requirements.
        </CardDescription>
      </div>
    </div>
  );
};

export default ExportEdit;
