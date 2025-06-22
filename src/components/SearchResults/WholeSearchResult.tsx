"use client";
import React, { useEffect, useMemo, useState } from "react";
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
    const [bedroomMax, setBedroomMax] = useState<number>(0);
    const [bathroomMin, setBathroomMin] = useState<number>(0);
    const [bathroomMax, setBathroomMax] = useState<number>(0);
    const [Heart, setHeart] = useState<PropertiesTypes[]>([]);
    const [HeartBackground, setHeartBackground] = useState<string[]>([])
    // pagination
    const [PerPageCard, setPerPageCard] = useState<number>(6)
    const [paginationNumber, setpaginationNumber] = useState(Math.ceil(Properties.length / PerPageCard))
    const [paginationActive, setpaginationActive] = useState(1)
    // format , sorting 
    const [formal, setformal] = useState<number>(0)
    const [pro, setpro] = useState<PropertiesTypes[]>(Properties)
    useEffect(() => {
      setpro(Properties)
    }, [])
    

    const data = useMemo(() => {
        const result = pro
            .filter((e: PropertiesTypes) => {
                return SearchQuery ? e.title.toLowerCase().includes(SearchQuery.toLowerCase()) : true
            })
            .filter((e: PropertiesTypes) =>
                selectedPeriod ?
                    e.rentalPeriod.toLowerCase() === selectedPeriod.toLowerCase() : true
            )
            .filter((e) => {
                if (selectedPropertyTypes.length !== 0) {
                    let element: string = "";
                    for (let i = 0; i < selectedPropertyTypes.length; i++) {
                        const arrayElement = selectedPropertyTypes[i].toLowerCase().slice(0, selectedPropertyTypes[i].length - 1);
                        if (arrayElement === e.realEstateType.toLowerCase()) {
                            element = arrayElement;
                        }
                    }
                    return e.realEstateType.toLowerCase() === element;
                } else {
                    return true
                }
            })
            .filter((e: any) => {
                if (selectedFeatures.length !== 0) {
                    const objElements = Object.keys(e.amenities)
                    const a = e.amenities
                    for (const element of objElements) {
                        for (const feature of selectedFeatures) {
                            return element == feature && a[element] === true
                        }
                    }
                } else {
                    return true
                }
            })
            .filter((e) => {
                return bedroomMax || bedroomMin ? e.bedrooms >= bedroomMin && e.bedrooms <= bedroomMax : true
            })
            .filter((e: PropertiesTypes) => {
                return bathroomMax || bathroomMin ? e.bathrooms >= bathroomMin && e.bathrooms <= bathroomMax : true
            })

        if (formal == 1) {
            result.sort((a: any, b: any) => a.price - b.price)
        } else if (formal == 2) {
            result.sort((a: any, b: any) => b.price - a.price)
        }
        return result
    }, [[PerPageCard, bedroomMax, bedroomMin, selectedFeatures, selectedPeriod, selectedPropertyTypes, SearchQuery]])

    React.useEffect(() => {
        setpaginationNumber(Math.ceil(data.length / PerPageCard))
        setpaginationActive(1)
    }, [PerPageCard, bedroomMax, bedroomMin, selectedFeatures, selectedPeriod, selectedPropertyTypes, SearchQuery])

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
