"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoriesPagination = () => {
  return (
    <div className="flex justify-center mt-6">

    <div className="flex gap-2 items-center text-[#737373] tex-sm mx-auto">
      <Button variant='outline' className="rounded-none">
        <ChevronLeft />
      </Button>
      <p className="text-black text-sm">Page 1 of 2</p>
      <Button variant='outline' className="rounded-none">
        <ChevronRight />
      </Button>
    </div>
    </div>
  );
};

export default CategoriesPagination;
