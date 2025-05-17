"use client";
import React from "react";
import { Button } from "../ui/button";
import {  Calendar, Mail, UserPlus, Zap } from "lucide-react";
import PatientCount from "./PatientCount";
import { MedicalRadarChart } from "./MedicalRadarChart";
import RecentPatientRecord from "./RecentPatientRecord";
import UpcomingAppointment from "./UpcomingAppointment";
import PerformanceMatrics from "./PerformanceMatrics";
import ReviewList from "./ReviewList";
import { MedicalDialog } from "./MedicalForm";


const MedicalAppointment = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold pl-3">Welcome, Dr. Insburry</h1>
        <MedicalDialog/>
      </div>
      <h2 className="mt-8 px-4 text-sm font-semibold ">Quick Action</h2>
      <div className="grid grid-cols-4 items-center mt-6 gap-3 justify-between px-4">
        <div className="flex flex-col gap-2 border border-[#e6e3e3] py-4 ">
          <Calendar className="w-4 mx-auto block"/>
          <p className="text-sm w-full mx-auto block font-semibold">Schedule Appointment</p>
        </div>
        <div className="flex flex-col gap-2 border border-[#e6e3e3] p-4 ">
          <UserPlus className="w-4 mx-auto block"/>
          <p className="text-sm mx-auto block font-semibold">Add new Patient</p>
        </div>
        <div className="flex flex-col gap-2 border border-[#e6e3e3] p-4 ">
          <Mail className="w-4 mx-auto block"/>
          <p className="text-sm mx-auto block font-semibold">Send Message</p>
        </div>
        <div className="flex flex-col gap-2 border border-[#e6e3e3] p-4 ">
          <Zap className="w-4 mx-auto block"/>
          <p className="text-sm mx-auto block font-semibold">View Reports</p>
        </div>
      </div>
      <div className="mt-11">
      <PatientCount />
      </div>
      <div className="flex gap-7 justify-between mt-7">
        <MedicalRadarChart/>
        <RecentPatientRecord />
      </div>
      <div className="flex gap-2 justify-between mt-7 mb-8" >
        <UpcomingAppointment/>
        <PerformanceMatrics/>
      </div>
      <div className="">
        <ReviewList/>
      </div>
    </div>
  );
};

export default MedicalAppointment;
