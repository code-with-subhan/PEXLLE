'use client'
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { text } from "stream/consumers";

const Percentage = () => {
  const [PerInitialValue, setPerInitialValue] = useState<number>(0)
  const [PerCentageValue, setPerCentageValue] = useState<number>(0)

  const targetValue = PerInitialValue * (1 + PerCentageValue / 100);
  console.log(targetValue === 0, targetValue)
  let textColor = ""
  if(targetValue > 0){
    textColor = "text-green-400"
  }else if(targetValue < 0) {
    textColor = "text-red-400"
  }else if(targetValue == 0){
    textColor = "text-black"
  }else {
    textColor = "text-black"
  }
  return (
    <div className="flex flex-col gap-6 pt-5">
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Base Number (€)
        </Label>
        <input
          type="number"
          className="appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
          value={PerInitialValue}
          onChange={(e) => setPerInitialValue(+e.target.value)}
        />
      </div>
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Percentage (€)
        </Label>
        <input
          type="number"
          className="appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
          value={PerCentageValue}
          onChange={(e) => setPerCentageValue(+e.target.value)}
        />
      </div>
      <div className="mt-3 text-right">
        <p className="text-[#737373] font-normal">Percentage Change</p>
        <h1 className={`font-stretch-150% font-normal text-4xl mt-1 ${textColor}`}>{targetValue.toFixed(2)}%</h1>
      </div>
    </div>
  );
};

export default Percentage;
