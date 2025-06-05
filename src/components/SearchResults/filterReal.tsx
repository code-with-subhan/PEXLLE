// In your PropertyFilters component (filterReal.tsx)
"use client";

import { useState } from 'react';
import CheckboxGroup from './SearchFilters/RealEstateFilter';
import { RentalPeriodFilter } from './SearchFilters/RadioRealType';
import { RoomsFilter } from './SearchFilters/BedRoomContainer';
import { ChevronDown } from 'lucide-react';

const PropertyFilters = () => {
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
    const [showFilter, setshowFilter] = useState<boolean>(true)
    return (
        <div className="sm:w-[40rem] lg:w-[35rem] w-[35rem] p-6 border border-gray-200 rounded-none bg-[#F5F5F5] ">
            {/* Select  */}
            <div className='p-4 py-3 flex cursor-pointer md:hidden  justify-between items-center border hover:bg-[#F5F5F5] bg-white' onClick={() => setshowFilter(prev => !prev)}>
                <span className='text-sm font-semibold'>Filter</span>
                <ChevronDown className={`w-5 ${!showFilter ? "rotate-180" : "rotate-0"}`} />
            </div>

            <div className={`${!showFilter ? "block" : "hidden"} md:block`}>

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

                <RoomsFilter />
                {/* Existing Rental Period Group */}
                <RentalPeriodFilter />

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
                    <p>Property Types: {selectedPropertyTypes.join(', ') || 'None'}</p>
                    <p>Features: {selectedFeatures.join(', ') || 'None'}</p>
                </div>
            </div>

        </div>
    );
};

export default PropertyFilters;