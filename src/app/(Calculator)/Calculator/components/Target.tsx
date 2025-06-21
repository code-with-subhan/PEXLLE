'use client'
import React, { useState } from "react";
import { Label } from "@/components/ui/label";

const PercentageTarget = () => {
  const [InitialValue, setInitialValue] = useState<number>(0)
  const [TargetValue, setTargetValue] = useState<number>(0)

  const Percentage = ((TargetValue - InitialValue) / InitialValue) * 100
  let textColor = ""
  if(Percentage > 0){
    textColor = "text-green-400"
  }else if(Percentage < 0) {
    textColor = "text-red-400"
  }else if(Percentage == 0){
    textColor = "text-black"
  }
  return (
    <div className="flex flex-col gap-6 pt-5">
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Initial Value (€)
        </Label>
        <input
          type="number"
          className="appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
          value={InitialValue}
          onChange={(e) => setInitialValue(+e.target.value)}
        />
      </div>
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Target Value (€)
        </Label>
        <input
          type="number"
          className="appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
          value={TargetValue}
          onChange={(e) => setTargetValue(+e.target.value)}
        />
      </div>
      <div className="mt-3 text-right">
        <p className="text-[#737373] font-normal">Percentage Change</p>
        <h1 className={`font-stretch-150% font-normal text-4xl mt-1 ${textColor}`}>{isNaN(Percentage) ? "0.00" : Percentage.toFixed(2)}%</h1>
      </div>
    </div>
  );
};

export default PercentageTarget;
