// components/StepIndicator.tsx
import React from "react";

export default function StepIndicator({ active = false }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-4 h-4 rounded-full border-2 ${
          active ? 'bg-black border-black' : 'border-black'
        }`}
      ></div>
      <div className="w-0.5 h-10 bg-black"></div>
    </div>
  );
}
