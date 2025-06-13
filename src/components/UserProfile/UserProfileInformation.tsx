"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, MapPin, Phone, ShoppingBag } from "lucide-react";
import { CardDescription, CardTitle } from "../ui/card";

const UserProfileInformation = () => {
  return (
    <div className="bg-[#F5F5F5] container lg:w-1/3 lg:p-8 p-8 flex flex-col items-center">
      <div className="relative">
        <img
          src="https://i.pravatar.cc/150?img=1"
          alt=""
          className="rounded-full size-42 lg:size-auto"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute bottom-0 right-4"
        >
          <path
            className="fill-background"
            d="M3.046 8.277A4.402 4.402 0 0 1 8.303 3.03a4.4 4.4 0 0 1 7.411 0 4.397 4.397 0 0 1 5.19 3.068c.207.713.23 1.466.067 2.19a4.4 4.4 0 0 1 0 7.415 4.403 4.403 0 0 1-3.06 5.187 4.398 4.398 0 0 1-2.186.072 4.398 4.398 0 0 1-7.422 0 4.398 4.398 0 0 1-5.257-5.248 4.4 4.4 0 0 1 0-7.437Z"
          ></path>
          <path
            className="fill-primary"
            d="M4.674 8.954a3.602 3.602 0 0 1 4.301-4.293 3.6 3.6 0 0 1 6.064 0 3.598 3.598 0 0 1 4.3 4.302 3.6 3.6 0 0 1 0 6.067 3.6 3.6 0 0 1-4.29 4.302 3.6 3.6 0 0 1-6.074 0 3.598 3.598 0 0 1-4.3-4.293 3.6 3.6 0 0 1 0-6.085Z"
          ></path>
          <path
            className="fill-background"
            d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
          ></path>
        </svg>
      </div>
      <h1 className="text-center text-xl mt-2">Alice Johnson</h1>
      <Badge variant="outline" className="text-center">5.2k Followers</Badge>
      <div className="px-2 my-3 mt-4 flex gap-4  ">
        <Button className="rounded-none flex gap-4 ">Follow</Button>
        <Button className="rounded-none" variant="outline">Messages</Button>
      </div>
      <div className="my-2 ">
        <div className="flex gpp-4 items-center">
          <Calendar className="w-3 text-[#737373]" />
          <CardDescription>Joined 2022-03-15</CardDescription>
        </div>
        <div className="flex gpp-4 my-1 items-center">
          <Phone className="w-3 text-[#737373]" />
          <CardDescription>+1 (555) 123-4567</CardDescription>
        </div>
        <div className="flex gpp-4 items-center">
          <MapPin className="w-3 text-[#737373]" />
          <CardDescription>San Francisco, USA</CardDescription>
        </div>
      </div>
      <div className="mt-2">
        <h6 className="font-normal text-sm">About</h6>
        <CardDescription className="my-2">
          Experienced IT professional with a passion for cybersecurity and
          network optimization.
        </CardDescription>
      </div>
      <div className="mt-2 w-full">
        <h2 className="my-2 text-sm">Seller Stats</h2>
        <div className="lg:flex items-center gap-2 w-full grid grid-cols-2">
          <div className="flex items-center bg-white p-2 gap-2 lg:justify-between w-full">
            <ShoppingBag />
            <div>
              <CardDescription className="text-sm">Items Sold</CardDescription>
              <CardTitle className="text-sm">150</CardTitle>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 gap-1 lg:justify-between w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-star text-yellow-400 mr-2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <div>
              <CardDescription className="text-sm">Avg Rating</CardDescription>
              <CardTitle className="text-sm">4.8/5</CardTitle>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className=" mt-3 text-sm ">Favourite Tags</h2>
        <div className="flex gap-1 flex-wrap mt-2 w-full">
          <Badge variant="outline" className="bg-white">cybersecurity</Badge>
          <Badge variant="outline" className="bg-white">networking</Badge>
          <Badge variant="outline" className="bg-white">cloud</Badge>
          <Badge variant="outline" className="bg-white">devops</Badge>
          <Badge variant="outline" className="bg-white">ai</Badge>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInformation;
