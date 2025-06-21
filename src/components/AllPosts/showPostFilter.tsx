"use client";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setSelectedCategory } from "@/store/slices/SelectProductCategorySlice";

const ShowPostFilter = ({
  showfilter,
  uniqueCategory,
  selectCategory,
}: {
  showfilter: boolean;
  uniqueCategory: string[];
  selectCategory: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className={`p-6 bg-[#F5F5F5] transition-all duration-800 ease-in-out  ${
        showfilter ? "opacity-100 p-6 mt-8 mb-6" : "h-0 opacity-0 p-0 mt-0 mb-0"
      } `}
    >
      <h2 className="text-xl font-semibold">Categories</h2>
      <div className="flex gap-2 mt-4 flex-wrap">
        {uniqueCategory.map((a) => (
          <Button
            size="sm"
            className="rounded-none"
            key={a}
            variant={a === selectCategory ? "default" : "outline"}
            onClick={() => dispatch(setSelectedCategory(a))}
          >
            {a}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ShowPostFilter);
