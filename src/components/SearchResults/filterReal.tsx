// In your PropertyFilters component (filterReal.tsx)
"use client";

import { useState } from "react";
import CheckboxGroup from "./SearchFilters/RealEstateFilter";
import { RoomsFilter } from "./SearchFilters/BedRoomContainer";
import { ChevronDown } from "lucide-react";
import { RadioGroup } from "./SearchFilters/oneRadioReal";


interface props {
    searchQuery: string;
    selectedFeatures: string[];
    setSelectedFeatures: (value: string[]) => void;
    selectedPropertyTypes: string[];
    setSelectedPropertyTypes: (value: string[]) => void;
    selectedPeriod: string
    setSelectedPeriod: (value: string) => void;
    bedroomMin: number;
    setBedroomMin: (value: number) => void
    bedroomMax: number;
    setBedroomMax: (value: number) => void
    bathroomMin: number;
    setBathroomMin: (value: number) => void
    bathroomMax: number;
    setBathroomMax: (value: number) => void
}

const PropertyFilters = ({
    searchQuery,
    selectedFeatures,
    setSelectedFeatures,
    selectedPropertyTypes,
    setSelectedPropertyTypes,
    selectedPeriod,
    setSelectedPeriod,
    bedroomMin,
    setBedroomMin,
    bedroomMax,
    setBedroomMax,
    bathroomMin,
    setBathroomMin,
    bathroomMax,
    setBathroomMax,
}: props) => {
    const [showFilter, setshowFilter] = useState<boolean>(true);
    return (
        <div className="sm:max-w-[40rem] md:w-[40rem] lg:max-w-[20rem] max-w-[35rem] p-6 border border-gray-200 rounded-none bg-[#F5F5F5] ">
            {/* Select  */}
            <div
                className="p-4 py-3 flex cursor-pointer md:hidden  justify-between items-center border hover:bg-[#F5F5F5] bg-white"
                onClick={() => setshowFilter((prev) => !prev)}
            >
                <span className="text-sm font-semibold">Filter</span>
                <ChevronDown
                    className={`w-5 ${!showFilter ? "rotate-180" : "rotate-0"
                        } transition duration-200`}
                />
            </div>

            <div className={`${!showFilter ? "block" : "hidden"} md:block mt-4`}>
                {/* New Real Estate Type Checkbox Group */}
                <CheckboxGroup
                    title="Real Estate Type"
                    options={[
                        { value: "apartments", label: "Apartments" },
                        { value: "houses", label: "Houses" },
                        { value: "rooms", label: "Rooms" },
                        { value: "townhouses", label: "Townhouses" },
                    ]}
                    selected={selectedPropertyTypes}
                    onChange={setSelectedPropertyTypes}
                    className="mb-6"
                />

                <RoomsFilter title={"Bedrooms"} min={bedroomMin} setmin={setBedroomMin} max={bedroomMax} setmax={setBedroomMax} />
                <RoomsFilter title={"Bathrooms"} min={bathroomMin} setmin={setBathroomMin} max={bathroomMax} setmax={setBathroomMax} />
                {/* Existing Rental Period Group */}
                <div className="mb-2 ">
                    <RadioGroup
                        title="Rental Period"
                        name="rentalPeriod"
                        options={[
                            { value: "any", label: "Any" },
                            { value: "1-12", label: "1 - 12 Months" },
                            { value: "13-24", label: "13 - 24 Months" },
                            { value: "24+", label: "24+ Months" },
                        ]}
                        selectedValue={selectedPeriod}
                        onChange={setSelectedPeriod}
                    />
                </div>


                {/* Existing Additional Features Group */}
                <CheckboxGroup
                    title="Additional Features"
                    options={[
                        { value: "parking", label: "Parking" },
                        { value: "pool", label: "Pool" },
                        { value: "gym", label: "Gym" },
                        { value: "pet-friendly", label: "Pet-friendly" },
                    ]}
                    selected={selectedFeatures}
                    onChange={setSelectedFeatures}
                    className="mb-6"
                />

                {/* Debug Output */}
                <div className="mt-5 p-3 bg-gray-50 rounded">
                    <h4 className="font-medium mb-2">Selected Filters:</h4>
                    <p>Property Types: {selectedPropertyTypes.join(", ") || "None"}</p>
                    <p>Features: {selectedFeatures.join(", ") || "None"}</p>
                    <p>RentalPeriod: {selectedPeriod}</p>
                    <p>bedroomsmin: {bedroomMin}</p>
                    <p>bedroomsmax: {bedroomMax}</p>
                    <p>bathroomsmin: {bathroomMin}</p>
                    <p>bathroomsmax: {bathroomMax}</p>
                    <p>bathroomsmax: {bathroomMax}</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyFilters;
