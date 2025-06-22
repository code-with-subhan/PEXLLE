// components/filters/RoomsFilter.tsx
"use client";
import React from "react";
import { ComboboxDemo } from "./BedroomChild";

interface props {
  title : string
  min: number
  setmin: (value: number) => void
  max: number
  setmax: (value: number) => void
}
export const RoomsFilter = ({title, min, setmin , max , setmax}: props) => {
  

  const roomOptions = [1, 2, 3, 4, 5, 6];

  return (
    <div className="">
      <div className="space-y-4 mt-2">
        <div>
          <h4 className="font-semibold mb-2">{title}</h4>
          <div className="grid grid-cols-2 gap-2">
            <ComboboxDemo
              options={roomOptions}
              value={min}
              onChange={setmin}
              title="Min"
              />
            <ComboboxDemo
              options={roomOptions.filter((opt) => opt >= min)}
              value={max}
              onChange={setmax}
              title="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
