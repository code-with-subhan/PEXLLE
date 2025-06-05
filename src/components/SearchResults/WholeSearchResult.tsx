"use client";
import React from "react";
import SearchHeader from "./SearchHeader";
import PropertyFilters from "./filterReal";
import ShowingContent from "./ShowingContent";
import SearchResultCard from "./SearchResultCard";
import LogisticsMap from "../Logictics/LogisticsMap";

const WholeSearchResult = () => {
    const [ShowView, setShowView] = React.useState<boolean>(true);
    return (
        <div className="p-6 px-6">
            <SearchHeader />
            <div className="mt-9 md:flex gap-9 block justify-between ">
                <PropertyFilters />
                <div className="grid gap-9">
                    <ShowingContent view={ShowView} setView={setShowView}/>
                    {ShowView ? <SearchResultCard /> : <LogisticsMap />}
                </div>
            </div>
        </div>
    );
};

export default WholeSearchResult;
