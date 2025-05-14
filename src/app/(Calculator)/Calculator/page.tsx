import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvestmentCal from "./components/InvestmentCal";
import Target from "./components/Target";
import Percentage from "./components/Percentage";

const page = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="border border-[#F5F5F5] p-5 bg-white">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="w-full rounded-none">
            <TabsTrigger value="Investment">Investment</TabsTrigger>
            <TabsTrigger value="Target">Target</TabsTrigger>
            <TabsTrigger value="Percentage">Percentage</TabsTrigger>
          </TabsList>
          <TabsContent value="Investment">
            <InvestmentCal />
          </TabsContent>
          <TabsContent value="Target">
            <Target />
          </TabsContent>
          <TabsContent value="Percentage">
            <Percentage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
