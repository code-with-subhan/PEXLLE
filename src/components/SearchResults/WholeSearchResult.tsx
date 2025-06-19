"use client";
import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import PropertyFilters from "./filterReal";
import ShowingContent from "./ShowingContent";
import SearchResultCard from "./SearchResultCard";
import LogisticsMap from "../Logictics/LogisticsMap";
import { Properties, PropertiesTypes } from "./data/properties";
import { ResultPagination } from "./ResultPagination";

const WholeSearchResult = () => {
    const [ShowView, setShowView] = React.useState<boolean>(true);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
    const [SearchQuery, setSearchQuery] = React.useState<string>("");
    const [selectedPeriod, setSelectedPeriod] = useState<string>("");
    const [bedroomMin, setBedroomMin] = useState<number>(0);
    const [bedroomMax, setBedroomMax] = useState<number>(6);
    const [bathroomMin, setBathroomMin] = useState<number>(0);
    const [bathroomMax, setBathroomMax] = useState<number>(6);
    const [Heart, setHeart] = useState<PropertiesTypes[]>([]);
    const [HeartBackground, setHeartBackground] = useState<string[]>([])
    // pagination
    const [PerPageCard, setPerPageCard] = useState<number>(6)
    const [paginationNumber, setpaginationNumber] = useState(Math.ceil(Properties.length / PerPageCard))
    const [paginationActive, setpaginationActive] = useState(1)
    const [formal, setformal] = useState<number>(0)

    let data = Properties
        .filter((e: any) => {
            return e.title ? e.title.toLowerCase().includes(SearchQuery.toLowerCase()) : e
        })
        .filter((e: any) =>
            selectedPeriod ?
                selectedPeriod === 'Any' ||
                e.rentalPeriod.toLowerCase() === selectedPeriod.toLowerCase() : e
        )
        .filter((e: any) => {
            if (selectedPropertyTypes.length !== 0) {
                let element: string = "";
                for (let i = 0; i < selectedPropertyTypes.length; i++) {
                    let arrayElement = selectedPropertyTypes[i].toLowerCase().slice(0, selectedPropertyTypes[i].length - 1);
                    if (arrayElement === e.realEstateType.toLowerCase()) {
                        element = arrayElement;
                    }
                }
                return e.realEstateType.toLowerCase() === element;
            } else {
                return e
            }
        })
        .filter((e: any) => {
            if (selectedFeatures.length !== 0) {
                let objElements = Object.keys(e.amenities)
                let a = e.amenities
                for (const element of objElements) {
                    for (const feature of selectedFeatures) {
                        return element == feature && a[element] === true
                    }
                }
            } else {
                return e
            }
        })
        .filter((e: any) => {
            return e.bedrooms >= bedroomMin && e.bedrooms <= bedroomMax
        })
        .filter((e: any) => {
            return e.bathrooms >= bathroomMin && e.bathrooms <= bathroomMax
        })
    if (formal == 1) {
        data.sort((a: any, b: any) => a.price - b.price)
    } else if (formal == 2) {
        data.sort((a: any, b: any) => b.price - a.price)
    }else {
        data = Properties
    }

    React.useEffect(() => {
        setpaginationNumber(Math.ceil(data.length / PerPageCard))
        setpaginationActive(1)
    }, [PerPageCard | bedroomMax | bedroomMin])

    function HeartList(value: PropertiesTypes) {
        if (Heart.includes(value)) {
            setHeart((e) => e.filter(item => item.id !== value.id));
            setHeartBackground((e) => e.filter(item => item !== value.id));
        } else {
            setHeart([...Heart, value]);
            setHeartBackground([...HeartBackground, value.id]);
        }
    }

    return (
        <div className="p-6 px-6">
            <SearchHeader setQuery={setSearchQuery} setformat={setformal} searchQuery={SearchQuery} />
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
                    <ShowingContent view={ShowView} setView={setShowView} HeartList={HeartList} Heart={Heart} serPerPage={setPerPageCard} perPage={PerPageCard} />
                    {ShowView ? (
                        <SearchResultCard data={data} HeartList={HeartList} HeartBackground={HeartBackground} pagActive={paginationActive} perPage={PerPageCard} />
                    ) : (
                        <LogisticsMap />
                    )}
                    <ResultPagination pag={paginationNumber} pagActive={paginationActive} setpagActive={setpaginationActive} />
                </div>
            </div>
        </div>
    );
};

export default WholeSearchResult;
