import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, Mail, Phone, Plus } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadsInfo } from "../data/data";
import { AdressInfo } from "../data/data";

const LeadsProfile = () => {
  return (
    <div className="p-7 bg-[#F5F5F5]  h-[100vh] overflow-auto">
      <div className="flex gap-2 items-center text-sm text-[#8b8b8b] hover:text-[#636262]">
        <ChevronLeft className="w-4" />
        Back to Leads
      </div>
      <div className="flex justify-center flex-col items-center py-10 pb-8">
        <img src="https://i.pravatar.cc/128?u=jerome" alt="" className="rounded-full "/>
        <h2 className="mt-3.5 font-bold text-xl">Jerome Bell</h2>
        <div className="flex gap-1 text-[#8b8b8b] items-center text-sm mt-1.5">
          <img
            src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Flogo.clearbit.com%2Fgoogle.com&w=48&q=75"
            alt=""
            className="w-5"
          />
          Google
        </div>
      </div>
      <div className="grid gap-2 grid-cols-4 mb-7">
        <Button
          className="rounded-none w-full flex flex-col gap-1 py-7"
          variant="outline"
        >
          <Plus /> <span>Log</span>
        </Button>
        <Button
          className="rounded-none flex flex-col gap-1 p-7"
          variant="outline"
        >
          <Mail />
          <span>Email</span>
        </Button>
        <Button
          className="rounded-none flex flex-col gap-1 p-7"
          variant="outline"
        >
          <Phone />
          <span>Call</span>
        </Button>
        <Button
          className="rounded-none flex flex-col gap-1 p-7"
          variant="outline"
        >
          <Calendar />
          <span>Meet</span>
        </Button>
      </div>
      <Button className="w-full rounded-none bg-black" size='sm'>Convert to contact</Button>
      <p className="my-6 mb-5 text-[#8b8b8b] text-sm">Last activity: 2 Jan 2020 at 09:00 AM</p>
      <Tabs defaultValue="account" className="">
        <TabsList className="w-full bg-[#f0f0f0] rounded-none">
          <TabsTrigger value="account" className="font-normal">Leads info</TabsTrigger>
          <TabsTrigger value="password " className="font-normal">Address info</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="my-4 grid grid-rows-6 gap-3.5">
            {LeadsInfo.map((e) => (
              <div className="flex items-center gap-2">
                <div>{e.logo}</div>
                <div>
                  <p className="text-sm text-[#8b8b8b]">{e.title}</p>
                  <h6 className="text-sm">{e.des}</h6>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="my-4 grid grid-rows-6 gap-3.5">
          {AdressInfo.map((e) => (
              <div className="flex items-center gap-2">
                <div>{e.logo}</div>
                <div>
                  <p className="text-sm text-[#8b8b8b]">{e.title}</p>
                  <h6 className="text-sm">{e.des}</h6>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadsProfile;
