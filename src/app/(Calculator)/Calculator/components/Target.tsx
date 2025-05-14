import React from "react";
import { Label } from "@/components/ui/label";

const PercentageTarget = () => {
  return (
    <div className="flex flex-col gap-6 pt-5">
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Initial Value (€)
        </Label>
        <input
          type="text"
          className="borde outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
        />
      </div>
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Target Value (€)
        </Label>
        <input
          type="text"
          className="borde outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
        />
      </div>
      <div className="mt-3 text-right">
        <p className="text-[#737373] font-normal">Percentage Change</p>
        <h1 className="font-stretch-150% font-normal text-4xl mt-1">0.00%</h1>
      </div>
    </div>
  );
};

export default PercentageTarget;
