"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DeleteIcon, LogOut } from "lucide-react";

const PreferencesAccount = () => {
  return (
    <div className="mx-5">
      <h6 className="text-sm font-bold">Account Preferences</h6>
      <p className="text-[#8A8A8A] text-sm font-medium">
        Customize your account settings
      </p>
      <div className="mt-6">
        <h6 className="text-sm mb-1.5 font-medium text-[#0B0B0D]">Theme</h6>
        <p className="text-[#8A8A8A] text-sm font-medium">
          Choose your preferred theme
        </p>
      </div>
      <div className="mt-4 sm:flex gap-4">
        <div className="flex  flex-col">
          <div className="flex h-42 w-42 gap-2 p-3 bg-white border-3 border-black">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="grid grid-rows-2  w-full">
              <div className="grid grid-rows-3 gap-3.5 mb-5">
                <div className="rounded-full w-1/2 bg-[#636391] h-3 opacity-10"></div>
                <div className="rounded-full w-3/4 bg-[#636391] h-3 opacity-10"></div>
                <div className="rounded-full w-1/3 bg-[#636391] h-3 opacity-10"></div>
              </div>
              <div className="grid grid-rows-2 gap-1 mt-3">
                <div className="rounded-full w-full bg-[#636391] h-6 opacity-10"></div>
                <div className="rounded-full w-full bg-[#636391] h-6 opacity-10"></div>
              </div>
            </div>
          </div>

          <h6 className="text-center text-sm font-semibold text-[#131315] mt-1 mb-3 w-42">Light</h6>
        </div>
        <div>
          <div className="flex h-42 w-42 gap-2 p-3 bg-[#1A1A1A]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="grid grid-rows-2  w-full">
              <div className="grid grid-rows-3 gap-3.5 mb-5">
                <div className="rounded-full w-1/2 bg-[#F5F5F5] h-3 opacity-10"></div>
                <div className="rounded-full w-3/4 bg-[#F5F5F5] h-3 opacity-10"></div>
                <div className="rounded-full w-1/3 bg-[#F5F5F5] h-3 opacity-10"></div>
              </div>
              <div className="grid grid-rows-2 gap-1 mt-3">
                <div className="rounded-full w-full bg-[#F5F5F5] h-6 opacity-10"></div>
                <div className="rounded-full w-full bg-[#F5F5F5] h-6 opacity-10"></div>
              </div>
            </div>
          </div>
          <h6 className="text-center text-sm font-semibold text-[#131315] mt-1 mb-3  w-42">Dark</h6>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-7">
        <Label>Language</Label>
        <Input className="bg-[#F5F5F5] rounded-none" value="English" />
      </div>
      <div className="flex flex-col gap-3 mt-7">
        <Label>Time Zone</Label>
        <Input className="bg-[#F5F5F5] rounded-none" value="UTC" />
      </div>
      <Button className="bg-black rounded-none mt-6">Save Preferences</Button>
    </div>
  );
};

export default PreferencesAccount;
