"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Circle, Ellipsis } from "lucide-react";
import { Cards } from "../data/CardsData";
const LeadsTabs = () => {
  return (
    <div className="w-[400px] my-5">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full rounded-none">
          <TabsTrigger
            value="Activity"
            className="rounded-none font-normal w-full"
          >
            Activity
          </TabsTrigger>
          <TabsTrigger
            value="Notes"
            className="rounded-none font-normal w-full"
          >
            Notes
          </TabsTrigger>
          <TabsTrigger
            value="Emails"
            className="rounded-none font-normal w-full"
          >
            Emails
          </TabsTrigger>
          <TabsTrigger value="Task" className="rounded-none font-normal w-full">
            Task
          </TabsTrigger>
          <TabsTrigger
            value="Meetings"
            className="rounded-none font-normal w-full"
          >
            Meetings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Activity"></TabsContent>
        <TabsContent value="Notes"></TabsContent>
        <TabsContent value="Emails"></TabsContent>
        <TabsContent value="Task" className="w-full px-6">
          <div className="flex justify-between items-center my-6 ">
            <Button className="rounded-none " size="sm" variant="outline">
              All users
            </Button>
            <Button className="rounded-none " size="sm">
              Create task
            </Button>
          </div>
          <div className="">
            <h1 className="font-bold text-[1rem]">Upcoming Tasks</h1>
            <div className="bg-[#F5F5F5] my-6 p-5">
              <div className="flex justify-between gap-4">
                <Circle className="mt-2" />
                <div className="w-1/3 leading-5">
                  <p className="text-[.9rem] text-[#8b8b8b]">
                    Task created by Esther Howard
                  </p>
                  <h4 className="text-[1rem] font-semibold">
                    Prepare quote for Jerome Bell
                  </h4>
                  <p className="text-[.9rem] text-[#8b8b8b]">
                    She's interested in our new product line and wants our very
                    best price. Please include a detailed breakdown of costs.
                  </p>
                </div>
                <div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-2 rounded-none"
                  >
                    Today 12:00 PM
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className=" rounded-none cursor-pointer"
                >
                  <Ellipsis className="w-3" />
                </Button>
              </div>
              <div className="flex gap-5 my-7">
                <div>
                  <div className="text-sm text-[#8b8b8b] mb-1">Reminder </div>
                  <Button className="rounded-none" size="sm" variant="outline">
                    No Reminder
                  </Button>
                </div>
                <div>
                  <div className="text-sm text-[#8b8b8b] mb-1">
                    Task Priority
                  </div>
                  <Button
                    size="sm"
                    className="bg-red-100 rounded-none text-red-500 "
                    variant="outline"
                  >
                    High
                  </Button>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="text-sm text-[#8b8b8b] mb-1">Assigned to</div>
                  <Button
                    className="flex items-center rounded-none gap-2"
                    variant="outline"
                    size="sm"
                  >
                    <img
                      src="https://i.pravatar.cc/128?u=esther"
                      alt=""
                      className="rounded-full w-4 h-4"
                    />
                    Esther Howard
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[1rem]">Completed Tasks</h1>
            <div>
              {Cards.map((e) => (
                <div className="bg-[#F5F5F5] my-6 p-5">
                  <div className="flex justify-between gap-4">
                    <Circle className="mt-2" />
                    <div className="w-1/3 leading-5">
                      <h4 className="text-[1rem] font-semibold">
                        {e.title}
                      </h4>
                      <p className="text-[.9rem] text-[#8b8b8b]">
                       {e.desc}
                      </p>
                    </div>
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-2 rounded-none"
                      >
                        {e.TopButtonText}
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className=" rounded-none cursor-pointer"
                    >
                      <Ellipsis className="w-3" />
                    </Button>
                  </div>
                  <div className="flex gap-5 my-7">
                    <div>
                      <div className="text-sm text-[#8b8b8b] mb-1">
                      Task Priority

                      </div>
                      <Button
                        className={`rounded-none ${e.ButtonRankBg_Color} ${e.ButtonRankText_Color}`}
                        size="sm"
                        variant="outline"
                      >
                        {e.ButtonRankText}
                      </Button>
                    </div>
                    <div>
                      <div className="text-sm text-[#8b8b8b] mb-1">
                      Completed by
                      </div>
                      <Button
                        size="sm"
                        className=" rounded-none "
                        variant="outline"
                      >
                        <img src={e.ImageButtonSrc} alt="" className="rounded-full w-4 h-4"/>
                        {e.TopButtonText}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Meetings"></TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadsTabs;
