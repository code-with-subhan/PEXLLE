// components/filters/RoomsFilter.tsx
"use client";

import { useState } from "react";
import { ComboboxDemo } from "./BedroomChild";
export const RoomsFilter = () => {
  const [bedroomMin, setBedroomMin] = useState<number>(1);
  const [bedroomMax, setBedroomMax] = useState<number>(4);
  const [bathroomMin, setBathroomMin] = useState<number>(1);
  const [bathroomMax, setBathroomMax] = useState<number>(2);

  const roomOptions = [1, 2, 3, 4, 5, 6];

  return (
    <div className="">
      <div className="space-y-4 mt-2">
        <div>
          <h4 className="font-semibold mb-2">Bedroom</h4>
          <div className="grid grid-cols-2 gap-2">
            <ComboboxDemo
              options={roomOptions}
              value={bedroomMin}
              onChange={setBedroomMin}
            />
            <ComboboxDemo
              options={roomOptions.filter((opt) => opt >= bedroomMin)}
              value={bedroomMax}
              onChange={setBedroomMax}
            />
          </div>
        </div>
        <div className="my-2">
          <h4 className="font-semibold mb-2">Bathroom</h4>
          <div className="grid grid-cols-2 gap-2">
            <ComboboxDemo
              options={roomOptions}
              value={bathroomMin}
              onChange={setBathroomMin}
            />
            <ComboboxDemo
              options={roomOptions.filter((opt) => opt >= bathroomMin)}
              value={bathroomMax}
              onChange={setBathroomMax}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
