"use client";
import React from "react";
import { Button } from "../ui/button";
import { Calendar, Mail, UserPlus, Zap } from "lucide-react";
import PatientCount from "./PatientCount";
import { MedicalRadarChart } from "./MedicalRadarChart";
import RecentPatientRecord from "./RecentPatientRecord";
import UpcomingAppointment from "./UpcomingAppointment";
import PerformanceMatrics from "./PerformanceMatrics";
import ReviewList from "./ReviewList";
import { MedicalDialog } from "./MedicalForm";
import { MedicalResponsive } from "./MedicalResponsiveSidebar";


const MedicalAppointment = () => {
  return (
    <div className="p-3 ">
      <div className="sm:flex justify-between items-center grid grid-rows-2 gap-y-3">
        <div className="flex gap-5 items-center">
          <MedicalResponsive/>
          <h1 className="text-xl font-bold pl-3">Welcome, Dr. Insburry</h1>
        </div>
        <MedicalDialog />
      </div>
      <h2 className="mt-8 px-4 text-sm font-semibold ">Quick Action</h2>
      <div className="grid md:grid-cols-4 items-center mt-6 gap-3 justify-between px-4 grid-cols-2">
        <div className="sm:flex flex-col gap-2 border border-[#e6e3e3] py-4 grid grid-cols-1">
          <Calendar className="w-4 mx-auto block" />
          <p className="text-sm w-full mx-auto block font-semibold text-center">Schedule Appointment</p>
        </div>
        <div className="sm:flex flex-col gap-2 border border-[#e6e3e3] p-4 grid grid-cols-1">
          <UserPlus className="w-4 mx-auto block" />
          <p className="text-sm mx-auto block font-semibold text-center">Add new Patient</p>
        </div>
        <div className="sm:flex flex-col gap-2 border border-[#e6e3e3] p-4 grid grid-cols-1">
          <Mail className="w-4 mx-auto block" />
          <p className="text-sm mx-auto block font-semibold text-center">Send Message</p>
        </div>
        <div className="sm:flex flex-col gap-2 border border-[#e6e3e3] p-4 grid grid-cols-1">
          <Zap className="w-4 mx-auto block" />
          <p className="text-sm mx-auto block font-semibold text-center">View Reports</p>
        </div>
      </div>
      <div className="mt-11">
        <PatientCount />
      </div>
      <div className="md:flex gap-7 justify-between mt-7 grid grid-cols-1">
        <MedicalRadarChart />
        <RecentPatientRecord />
      </div>
      <div className="md:flex lg:gap-2 gap-7 justify-between mt-7 mb-8 grid grid-cols-1" >
        <UpcomingAppointment />
        <PerformanceMatrics />
      </div>
      <div className="">
        <ReviewList />
      </div>
    </div>
  );
};

export default MedicalAppointment;
