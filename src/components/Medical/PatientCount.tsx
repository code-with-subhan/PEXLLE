"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { MedicalProgress } from "./MedicalProgress";
import { CardDescription } from "../ui/card";

const PatientCount = () => {
  return (
    <div className="flex gap-6 justify-between">
      <div className="p-6 bg-blue-50 pb-9">
        <div className="flex justify-between items-center">
          <div className="size-12  flex justify-center items-center bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users h-6 w-6 text-blue-500"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <Badge className="text-blue-500 bg-blue-100 rounded-full">+15.9%</Badge>
        </div>
        <CardDescription className="text-sm my-3 font-semibold">Total Patients</CardDescription>
        <h1 className="text-blue-500 text-3xl mt-3 font-bold">1,250</h1>
      </div>
      <div className="p-6 bg-green-50 pb-9">
        <div className="flex justify-between items-center">
          <div className="size-12  flex justify-center items-center bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user-plus h-6 w-6 text-emerald-500"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
          </div>
          <Badge className="text-green-500 bg-green-100 rounded-full">+22.4%</Badge>
        </div>
        <CardDescription className="text-sm my-3 font-semibold">New Patients</CardDescription>
        <h1 className="text-green-500 text-3xl mt-3 font-bold">260</h1>
      </div>
      <div className="p-6 bg-purple-50 pb-9">
        <div className="flex justify-between items-center">
          <div className="size-12  flex justify-center items-center bg-purple-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user-cog h-6 w-6 text-purple-500"
            >
              <circle cx="18" cy="15" r="3"></circle>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M10 15H6a4 4 0 0 0-4 4v2"></path>
              <path d="m21.7 16.4-.9-.3"></path>
              <path d="m15.2 13.9-.9-.3"></path>
              <path d="m16.6 18.7.3-.9"></path>
              <path d="m19.1 12.2.3-.9"></path>
              <path d="m19.6 18.7-.4-1"></path>
              <path d="m16.8 12.3-.4-1"></path>
              <path d="m14.3 16.6 1-.4"></path>
              <path d="m20.7 13.8 1-.4"></path>
            </svg>
          </div>
          <Badge className="text-purple-500 bg-purple-200 rounded-full">+12.7%</Badge>
        </div>
        <CardDescription className="text-sm my-3 font-semibold">Follow-Up Patients</CardDescription>
        <h1 className="text-purple-500 text-3xl mt-3 font-bold">560</h1>
      </div>
      <div className="p-6 bg-gray-100 pb-9">
        <div className="flex justify-between items-center">
          <div className="size-12  flex justify-center items-center bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-trending-up h-6 w-6 text-primary"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <Badge className="text-gray-500 bg-gray-200 rounded-full">98%</Badge>
        </div>
        <CardDescription className="text-sm my-3 font-semibold">Patient Satisfaction</CardDescription>
        <MedicalProgress />
      </div>
    </div>
  );
};

export default PatientCount;
