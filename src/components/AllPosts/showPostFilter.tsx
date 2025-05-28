"use client";
import React from "react";
import { Button } from "../ui/button";

const ShowPostFilter = ({
  showfilter,
  uniqueCategory,
  selectCategory,
  onSelectCategory,
}: {
  showfilter: boolean;
  uniqueCategory: string[];
  selectCategory: string;
  onSelectCategory: (value: string) => void;
}) => {
  return (
    <div
      className={`p-6 bg-[#F5F5F5] transition-all duration-800 ease-in-out  ${
        showfilter ? "opacity-100 p-6 mt-8 mb-6" : "h-0 opacity-0 p-0 mt-0 mb-0"
      } `}
    >
      <h2 className="text-xl font-semibold">Categories</h2>
      <div className="flex gap-2 mt-4">
        {uniqueCategory.map((e) => (
          <Button
            size="sm"
            className="rounded-none"
            key={e}
            variant={e === selectCategory ? "default" : "outline"}
            onClick={() => onSelectCategory(e)}
          >
            {e}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ShowPostFilter;
