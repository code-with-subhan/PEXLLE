"use client"
import React from "react";

export default function StepIndicator({ active = false  } : {active : boolean}) {
  return (
    <div className="flex flex-col items-center mt-[2px]">
      <div
        className={`w-3 h-3 rounded-full border-2 ${
          active ? 'bg-black border-black' : 'border-black'
        }`}
      ></div>
      <div className="w-0.5 h-8 bg-black"></div>
    </div>
  );
}
