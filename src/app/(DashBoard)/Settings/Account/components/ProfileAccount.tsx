"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DeleteIcon, Trash2, UploadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { LogOut } from "lucide-react";

const ProfileAccount = () => {
  return (
    <div className="mx-5">
      <h6 className="font-bold text-sm">Profile Information</h6>
      <p className="text-[#8A8A8A] text-sm font-medium">Update your personal details and profile photo</p>
      <div className="lg:grid grid-cols-2 lg:w-1/4 lg:gap-20 mt-11 gap-8 flex-col items-center justify-center lg:justify-start">
        <div className=" lg:w-23 lg:h-23 size-30 flex justify-center items-center text-xs bg rounded-full bg-[#F5F5F5] mx-auto lg:mx-0 lg:my-0 my-3">SH</div>
        <div className="flex flex-col ">
          <Button variant="ghost" className="rounded-none">
            <UploadIcon /> Upload new picture
          </Button>
          <Button variant='ghost' className="text-red-500 rounded-none">
            <Trash2 /> Remove picture
          </Button>
        </div>
      </div>
      <div className="mt-4 lg:flex grid grid-cols-1 gap-3 justify-between items-center w-full">
        <div className="grid grid-rows-2 w-full">
          <Label>First Name</Label>
          <Input className="bg-[#F5F5F5] w-full rounded-none" value="Subhan"/>
        </div>
        <div className="grid grid-rows-2 w-full">
          <Label>Last Name</Label>
          <Input className="bg-[#F5F5F5] w-full rounded-none" value="Hassan"/>
        </div>
      </div>
      <div className="mt-2 lg:flex grid grid-cols-1 gap-3 justify-between items-center w-full">
        <div className="grid grid-rows-2 w-full">
          <Label>Email</Label>
          <Input className="bg-[#F5F5F5] w-full rounded-none" value="m@example.com"/>
        </div>
        <div className="grid grid-rows-2 w-full">
          <Label>Phone</Label>
          <Input className="bg-[#F5F5F5] w-full rounded-none" value="+92(5555) 123-456"/>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 ">
      <Label>Bio</Label>
      <Textarea value='Tell us about yourself' className="bg-[#F5F5F5] rounded-none"/>
      </div>

      <div className="mt-5">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Default" id="Default" />
            <Label htmlFor="Default">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Comfortable" id="Comfortable" />
            <Label htmlFor="Comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Compact" id="Compact" />
            <Label htmlFor="Compact">Compact</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex gap-2 mt-6 items-start ">
        <Checkbox className="shadow-none mt-1"/>
        <div className="">
          <h6 className="font-semibold text-sm">Accept terms and conditions</h6>
          <p className="text-[#8A8A8A] text-sm font-medium">You agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
      <Button className="bg-black rounded-none mt-5">Save Changes</Button>
      
     
    </div>
  );
};

export default ProfileAccount;
