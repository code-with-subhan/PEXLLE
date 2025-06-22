"use client";
import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import { UpcomingPateint } from "./UpcomingDataAppointment";

const UpcomingAppointment = () => {
  return (
    <div className="border border-[#F5F5F5] p-6 w-full block">
      <CardTitle className="text-sm font-semibold">
        Upcoming Appointments
      </CardTitle>
      <div className="mt-5 grid grid-rows-3 gap-3">
        {UpcomingPateint.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <div className="rounded-full size-10 flex justify-center items-center bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock h-5 w-5 text-blue-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <CardTitle className="text-sm">{e.title}</CardTitle>
              <CardDescription>{e.description}</CardDescription>
            </div>
            <div className="ml-auto">
              <CardTitle className="text-sm">{e.time}</CardTitle>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointment;
