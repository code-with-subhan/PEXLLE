import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsContents from "./Components/TabsContents";

const page = () => {
  return (
    <div className="p-3">
      <h1 className="text-4xl font-semibold text-center mt-5">Priciing</h1>
      <p className="text-center mt-5 w-3/4 text-sm text-[#919191] m-auto">
        We want to empower every builder to learn coding best practices, create
        beautiful interfaces, and fully functioning apps. From individuals to
        enterprises, we have a plan that fits your use case.
      </p>
      <Tabs defaultValue="account" className="mt-8">
        <TabsList className="rounded-none w-1/5 grid grid-cols-2 m-auto mb-7 ">
          <TabsTrigger value="Monthly" className="rounded-none cursor-pointer">
            Monthly
          </TabsTrigger>
          <TabsTrigger value="Annual" className="rounded-none cursor-pointer text-[#9B9B9B]">
            Annual
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Monthly" className="w-full grid mb-7">
          <TabsContents time="mo" price="20"/>
        </TabsContent>
        <TabsContent value="Annual">
          <TabsContents time="mo" price="200"/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
