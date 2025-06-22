// components/ui/RadioGroup.tsx
"use client";
import React from "react";
interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  title: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

export const RadioGroup = ({
  title,
  name,
  options,
  selectedValue,
  onChange,
  className = "",
}: RadioGroupProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.label}
              checked={selectedValue === option.label}
              onChange={() => onChange(option.label)}
              className="
                w-5 h-5
                border-2
                border-gray-300
                rounded-full
                bg-white
                appearance-none
                checked:bg-black
                checked:border-black
                focus:ring-0
                focus:ring-offset-0
                relative
                after:absolute
                after:content-['']
                after:w-2.5
                after:h-2.5
                after:bg-white
                after:rounded-full
                after:left-1/2
                after:top-1/2
                after:transform
                after:-translate-x-1/2
                after:-translate-y-1/2
                after:opacity-0
                checked:after:opacity-100
              "
            />
            <span className=" text-sm font-semibold">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};