"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Data, ShipmentsData } from "./ShipmentsData";
import { CardDescription, CardTitle } from "../ui/card";

const Shipments = ({ logicObject, setLogicObject, showlogic , setShowlogic }: { logicObject: Data, setLogicObject: (value: Data) => void, showlogic: boolean ,setShowlogic : (value : boolean | ((value : boolean) => boolean)) => void }) => {
  return (
    <div className={`bg-[#F5F5F5]  lg:p-4 w-full p-7 lg:block ${showlogic ? "block" : "hidden"}`}>
      <h1 className="text-xl font-bold">Shipments</h1>
      <div className="flex gap-1 bg-white  mt-5 px-2 items-center">
        <Search className="text-[#737373] w-4.5 " />
        <Input
          placeholder="Search Shipments"
          className="bg-white shadow-none focus:border-none border-none focus:outline-none rounded-none pl-1"
        />
      </div>
      <Button className="w-full rounded-none mt-4 cursor-pointer">
        <Plus /> New Load
      </Button>
      <div>
        {ShipmentsData.map((e) => (
          <div key={e.id} className={`${logicObject.id == e.id ? "border-black  bg-[rgba(0,0,0,0.1)]" : "bg-white"} mt-4 hover:bg-[#F5F5F5] cursor-pointer border  p-4 `} onClick={() => {
            setShowlogic(prev => !prev)
            setLogicObject(e)
          }}>
            <div className="flex gap-2">
              <CardDescription className="text-sm">Load Id:</CardDescription>
              <CardTitle className="font-semibold text-sm">{e.id}</CardTitle>
              <Button
                className={`text-${e.BadgeColor}-500 bg-${e.BadgeColor}-100 hover:bg-${e.BadgeColor}-100 ml-auto rounded-none text-sm cursor-pointer`}
                size="sm"
              >
                {e.BadgeName}
              </Button>
            </div>
            <div>
              {e.title.map((a) => (
                <section key={a.title} className="flex gap-2 mt-3 items-start">
                  <div className="size-2 bg-black rounded-full mt-1"></div>
                  <div>
                    <CardTitle className="text-sm">{a.title}</CardTitle>
                    <CardDescription className="text-sm">{a.subtitle}</CardDescription>
                    <CardDescription className="text-sm">{a.content}</CardDescription>
                  </div>
                </section>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipments;
