"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TabsContents = ({ time, price }: { time: string; price: string }) => {
  return (
    <div className="grid md:grid-cols-3 w-full gap-7 mb-5 px-4 grid-cols-1">
      <div className="w-full border border-[#FSFSFS]">
        <div className="bg-[#F5F5F5] p-6">
          <div className="mb-12 h-16">
            <h2 className="font-normal text-xl mb-2">Free</h2>
            <p className="text-[#7F7D7B] text-sm ">
              For individuals that just want to explore.
            </p>
          </div>
          <h1 className=" mt-5 text-3xl font-meduim">
            $0/
            <span className="font-normal text-xl text-[#737377]">{time}</span>
          </h1>
          <div className="px-3">
            <Button
              size="sm"
              variant="outline"
              className="rounded-none bg-[#FAFAFA] text-[#8F8E8D] w-full mt-7 "
            >
              Current Plan
            </Button>
          </div>
        </div>
        <div className="p-6 py-5 grid gap-2">
          <div className="flex gap-2 text-sm items-center text-[#7C7577]">
            <Check className="text-black w-4" />
            Access to v0.dev/chat
            <Badge className="rounded-full text-black bg-[#CCCCCC]">New</Badge>
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            200 credits/month
          </div>
        </div>
      </div>
      <div className="w-full border border-black">
        <div className="bg-[#F5F5F5] p-6">
          <div className="mb-12 h-16">
            <h2 className="font-normal text-xl mb-2">Premium</h2>
            <p className="text-[#7F7D7B] text-sm mb-12">
              For users that want more messages and generations.
            </p>
          </div>
          <h1 className=" mt-5 text-3xl font-meduim">
            ${price}/
            <span className="font-normal text-xl text-[#737377]">{time}</span>
          </h1>
          <div className="px-3">
            <Button
              size="default"
              className="rounded-none cursor-pointer bg-black  w-full mt-7 hover:bg-transparent hover:text-black"
            >
              Choose Premium
            </Button>
          </div>
        </div>
        <div className="p-6 py-5 grid gap-2">
          <div className="flex gap-2 text-sm items-center text-[#7C7577]">
            <Check className="text-black w-4 mr-auto" />
            Higher usage limits on v0.dev/chat
            <Badge className="rounded-full text-black bg-[#CCCCCC]">New</Badge>
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            5000 credits/month
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Optional credits purchase
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Vision generations
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Custom themes
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Private generations
          </div>
        </div>
      </div>
      <div className="w-full border border-[#FSFSFS]">
        <div className="bg-[#F5F5F5] p-6">
          <div className="mb-12 h-16">
            <h2 className="font-normal text-xl mb-2">Enterprise</h2>
            <p className="text-[#7F7D7B] text-sm mb-12">
              For companies and teams that require robust features and higher
              limits.
            </p>
          </div>
          <h1 className=" mt-5 text-3xl font-meduim">Contact Us</h1>
          <div className="px-3">
            <Button
              size="sm"
              variant="outline"
              className="rounded-none font-normal cursor-pointer hover:bg-[#DCDCDC] w-full mt-7 "
            >
              Talk to Sales
            </Button>
          </div>
        </div>
        <div className="p-6 py-5 grid gap-2">
          <div className="flex gap-2 text-sm items-center text-[#7C7577]">
            <Check className="text-black w-4" />
            Custom usage limits on v0.dev/chat
            <Badge className="rounded-full text-black bg-[#CCCCCC] mr-auto">
              New
            </Badge>
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Custom credits/month
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Optional credits purchase
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Vision generations
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Vision generations
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Custom themes
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            Private generations
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />
            SAML SSO
          </div>
          <div className="flex gap-2 text-sm items-center text-[#7C7577] ">
            <Check className="text-black w-4" />7 other features
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContents;
