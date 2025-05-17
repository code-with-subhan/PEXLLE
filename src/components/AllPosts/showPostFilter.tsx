"use client";
import React from "react";
import { Button } from "../ui/button";

const ShowPostFilter = () => {
  return (
    <div className="p-6 bg-[#F5F5F5] ">
      <h2 className="text-xl font-semibold">Categories</h2>
      <div className="flex gap-2 mt-4">
        <Button size='sm' className="rounded-none">All</Button>
        <Button size='sm' className="rounded-none" variant='outline'>Electronics</Button>
        <Button size='sm' className="rounded-none" variant='outline'>Clothing</Button>
        <Button size='sm' className="rounded-none" variant='outline'>Home</Button>
        <Button size='sm' className="rounded-none" variant='outline'>Beauty</Button>
        <Button size='sm' className="rounded-none" variant='outline'>Sports</Button>
      </div>
    </div>
  );
};

export default ShowPostFilter;
