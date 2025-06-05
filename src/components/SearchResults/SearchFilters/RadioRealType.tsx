// components/filters/RentalPeriodFilter.tsx
"use client";

import { useState } from "react";
import { RadioGroup } from "./oneRadioReal";

export const RentalPeriodFilter = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("any");

  const periodOptions = [
    { value: "any", label: "Any" },
    { value: "1-12", label: "1 - 12 Months" },
    { value: "13-24", label: "13 - 24 Months" },
    { value: "24+", label: "24+ Months" },
  ];

  return (
    <div className="mb-2 ">
      <RadioGroup
        title="Rental Period"
        name="rentalPeriod"
        options={periodOptions}
        selectedValue={selectedPeriod}
        onChange={setSelectedPeriod}
      />
    </div>
  );
};