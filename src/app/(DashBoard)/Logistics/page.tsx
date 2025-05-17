import { Input } from "@/components/ui/input";
import React from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "react-day-picker";

const page = () => {
  return (
    <div className="bg-[#F5F5F5] p-4">
      <h1>Shipments</h1>
      <div className="flex gap-1 bg-white">
        <Search className="text-[#737373]"/>
        <Input placeholder="Search Shipments" className="bg-white shadow-none focus:border-none focus:outline-none rounded-none " />
      </div>
      <Button><Plus/> New Load</Button>
    </div>
  );
};

export default page;
