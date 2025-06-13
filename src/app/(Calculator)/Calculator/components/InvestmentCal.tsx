import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InvestmentCal = () => {
  return (
    <div className="flex flex-col gap-6 pt-5">
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">You Invest</Label>
        <div className="flex justify-between">
          <input
            type="text"
            className="borde outline-none w-2/3 focus:border-none text-4xl font-semibold"
            placeholder="0"
          />
          <Select>
            <SelectTrigger className="w-[100px]  rounded-full bg-white border-none">
              <SelectValue placeholder="BTC" />
            </SelectTrigger>
            <SelectContent className="bg-white border-none">
              <SelectItem value="BTC">BTC</SelectItem>
              <SelectItem value="Eth">EtH</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <span className="text-[#737373]">≈ €0.00</span>
      </div>
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Target Price</Label>
        <input
          type="text"
          className="borde outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h5 className="text-[#79777c] text-sm">Current BTC Price</h5>
          <h3 className="text-[#79777c] text-sm">Error loading price</h3>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="text-[#79777c] text-sm">Balance</h5>
          <h3 className= "font-normal text-2xl">€0.00</h3>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="text-[#79777c] text-sm">Profit/Loss</h5>
          <h3 className= "font-normal text-2xl">€0.00 (0.00%)</h3>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCal;
