"use client";
import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import PropertyFilters from "./filterReal";
import ShowingContent from "./ShowingContent";
import SearchResultCard from "./SearchResultCard";
import LogisticsMap from "../Logictics/LogisticsMap";
import { Properties } from "./data/properties";


const WholeSearchResult = () => {
    const [ShowView, setShowView] = React.useState<boolean>(true);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
    const [SearchQuery, setSearchQuery] = React.useState<string>("")
    const [selectedPeriod, setSelectedPeriod] = useState<string>("")
    const [bedroomMin, setBedroomMin] = useState<number>(1);
    const [bedroomMax, setBedroomMax] = useState<number>(4);
    const [bathroomMin, setBathroomMin] = useState<number>(1);
    const [bathroomMax, setBathroomMax] = useState<number>(2);

    const data = Properties
        .filter(e => {
            return e.title.toLowerCase().includes(SearchQuery.toLowerCase())
        })
        .filter(e => {
            return e.rentalPeriod.toLowerCase() === selectedPeriod.toLowerCase() 
        })
        .filter(e => {
            let element: string = ""
            for (let i = 0; i < selectedPropertyTypes.length; i++) {
                let arrayElement = selectedPropertyTypes[i].toLowerCase().slice(0, selectedPropertyTypes[i].length - 1)
                console.log(arrayElement, e.realEstateType.toLowerCase())
                if (arrayElement === e.realEstateType.toLowerCase()) {
                    element = arrayElement
                }
            }
            console.log(element, element == e.realEstateType.toLowerCase())
            return e.realEstateType.toLowerCase() === element
        })
    console.log(data, "data")

    return (
        <div className="p-6 px-6">
            <SearchHeader searchQuery={SearchQuery} setQuery={setSearchQuery} />
            <div className="mt-9 md:flex gap-9 block justify-between ">
                <PropertyFilters
                    searchQuery={SearchQuery}
                    selectedFeatures={selectedFeatures}
                    setSelectedFeatures={setSelectedFeatures}
                    selectedPropertyTypes={selectedPropertyTypes}
                    setSelectedPropertyTypes={setSelectedPropertyTypes}
                    selectedPeriod={selectedPeriod}
                    setSelectedPeriod={setSelectedPeriod}
                    bedroomMin={bedroomMin}
                    setBedroomMin={setBedroomMin}
                    bedroomMax={bedroomMax}
                    setBedroomMax={setBedroomMax}
                    bathroomMin={bathroomMin}
                    setBathroomMin={setBathroomMin}
                    bathroomMax={bathroomMax}
                    setBathroomMax={setBathroomMax}

                />
                <div className="grid gap-9 w-full">
                    <ShowingContent view={ShowView} setView={setShowView} />
                    {ShowView ? <SearchResultCard
                        searchQuery={SearchQuery}
                        data={data}

                    /> : <LogisticsMap />}
                </div>
            </div>
        </div>
    );
};

export default WholeSearchResult;
