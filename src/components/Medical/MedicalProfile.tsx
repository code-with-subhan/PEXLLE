"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { CardDescription, CardTitle } from "../ui/card";
import { Building, Mail, Phone } from "lucide-react";
import { MedicalCalendar } from "./MedicalCalendar";
import Image from "next/image";

const MedicalProfile = () => {
  return (
    <div className="bg-[#F5F5F5] p-6 lg:block hidden">
      <div className="flex justify-center items-center ">
        <Image
          src="https://i.pravatar.cc/150?img=4"
          alt="a"
          blurDataURL="blur"
          height={780}
          width={1080}
          className="rounded-full size-32"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-xl font-bold">Dr. Petr Insburry</h1>
        <p className="text-sm text-[#737373]">WNH-GM-001</p>
        <Badge
          className="mt-3 cursor-pointer bg-green-50 text-green-700 rounded-full"
          variant="outline"
        >
          Available
        </Badge>
      </div>
      <div className="mt-6">
        <CardTitle className="text-sm mb-2">Specialist</CardTitle>
        <CardDescription>Routine Check-Ups</CardDescription>
      </div>
      <div className="mt-6">
        <CardTitle className="text-sm">About</CardTitle>
        <CardDescription className="mt-2">
          Dr. Petr Insburry is a seasoned general medicine practitioner with
          over 15 years of experience in providing comprehensive healthcare
          services.
        </CardDescription>
      </div>
      <div className="my-5">
        <div className="flex gap-2 items-center ">
          <Phone className="w-4" />
          <span className="text-sm ]">(808) 555-0111</span>
        </div>
        <div className="flex gap-2 items-center">
          <Mail className="w-4" />
          <span className="text-sm ]">p.insburry@example.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <Building className="w-4" />
          <span className="text-sm ]">
            2464 Royal Ln. Mesa, New Jersey 45463
          </span>
        </div>
      </div>
      <div>
        <CardTitle className="text-sm mb-3">Work Experience</CardTitle>
        <div className="grid gap-2">
          <div className="flex gap-2">
            <div className="size-10 p-3 bg-blue-50 flex justify-center items-center">
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
                className="lucide lucide-stethoscope h-5 w-5 text-blue-500"
              >
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                <circle cx="20" cy="10" r="2"></circle>
              </svg>
            </div>
            <div>
              <CardTitle className="text-sm">General Practitioner</CardTitle>
              <CardDescription className="text-sm">
                VitalHealth Hospital
              </CardDescription>
              <CardDescription className="text-sm">
                Full-Time • 2010-Present
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="size-10 p-3 bg-red-50 flex justify-center items-center">
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
                className="lucide lucide-user h-5 w-5 text-red-500"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <CardTitle className="text-sm">Resident Doctor</CardTitle>
              <CardDescription className="text-sm">
                City General Hospital
              </CardDescription>
              <CardDescription className="text-sm">
                Full-Time • 2005-2010
              </CardDescription>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <MedicalCalendar />
      </div>
    </div>
  );
};

export default MedicalProfile;
