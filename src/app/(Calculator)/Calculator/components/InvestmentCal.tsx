'use client'
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InvestmentData {
  title: string,
  element: any
}

const Investment: InvestmentData[] = [
  {
    title: "BTC",
    element: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bitcoin w-5 h-5 text-orange-400 mr-2"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
  },
  {
    title: "ETH",
    element: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eclipse w-5 h-5 text-orange-400 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a7 7 0 1 0 10 10"></path></svg>
  }
]

const InvestmentCal = () => {
  const [YourInvest, setYourInvest] = useState<number>(0)
  const [TargetPrice, setTargetPrice] = useState<number>(0)
  const [currentPrice, setcurrentPrice] = useState<"BTC" | "ETH">("ETH")
  console.log(currentPrice)

  // Inputs
  const currentBTCPrice = currentPrice === "BTC" ? 90750.00 : 2175.31;

  const btcAmount = YourInvest / currentBTCPrice;
  const balance = btcAmount * TargetPrice;
  const profitEUR = balance - YourInvest;
  const profitPercent = (profitEUR / YourInvest) * 100;
  let textColor = ""
  if (profitPercent > 0) {
    textColor = "text-green-400"
  } else if (profitPercent < 0) {
    textColor = "text-red-400"
  } else if (profitPercent == 0) {
    textColor = "text-black"
  }

  return (
    <div className="flex flex-col gap-6 pt-5">
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">You Invest</Label>
        <div className="flex justify-between">
          <input
            type="number"
            className="appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-2/3 focus:border-none text-4xl font-semibold"
            placeholder="0"
            value={YourInvest}
            onChange={(e) => setYourInvest(+e.target.value)}
          />
          <Select onValueChange={() => setcurrentPrice(prev => prev == "BTC" ? "ETH" : "BTC")}>
            <SelectTrigger className="w-[100px]  rounded-full bg-white border-none appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" >
              <SelectValue  placeholder={<main className="flex gap-2" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bitcoin w-5 h-5 text-orange-400 mr-2"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg> BTC</main>} className="focus:border-none appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-bold" />
            </SelectTrigger>
            <SelectContent className="bg-white border-none rounded-none w-35">
              {Investment.map((e , i) => (
                
                <SelectItem  value={e.title}>{e.element} {e.title}</SelectItem>
              ))}
              
            </SelectContent>
          </Select>
        </div>
        <span className="text-[#737373]">≈ €{YourInvest}</span>
      </div>
      <div className="p-6 bg-[#F5F5F5] flex flex-col gap-4">
        <Label className="text-[#737373] font-normal">Target Price</Label>
        <input
          type="number"
          className="appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-full focus:border-none text-4xl font-semibold"
          placeholder="0"
          value={TargetPrice}
          onChange={(e) => setTargetPrice(+e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h5 className="text-[#79777c] text-sm">Current BTC Price</h5>
          <h3 className="text-[#79777c] text-sm">€{currentBTCPrice.toFixed(2)}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="text-[#79777c] text-sm">Balance</h5>
          <h3 className={`font-normal text-2xl ${balance === 0 && "text-black"} ${balance > 0 ? "text-green-400" : balance === 0 ? "text-black" : "text-red-400"} ${balance === 0.00 && "text-black"}`}>€{balance.toFixed(2)}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="text-[#79777c] text-sm">Profit/Loss</h5>
          <h3 className={`font-normal text-2xl ${textColor}`}>€{profitEUR.toFixed(2)} ({isNaN(profitPercent) ? "0.00" : profitPercent.toFixed(2)}%)</h3>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCal;
