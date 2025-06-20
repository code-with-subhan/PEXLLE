"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";


const Waranty = ({
  array,
  title,
  states,
  setStatess,
}: {
  array: string[];
  title: string;
  states: string;
  setStatess: (value: string) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1 className="text-sm font-semibold mt-5">{title}</h1>
      <div className="flex gap-2 flex-wrap mt-2">
        {array.map((e) => (
          <Button
            variant="outline"
            key={e}
            size="sm"
            className={`shadow-none rounded-none cursor-pointer ${e == states ? "border-black bg-[rgba(0,0,0,0.1)]" : "bg-white border"}`}
            onClick={() => dispatch(setStatess(e))}
          >
            {e}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Waranty;
