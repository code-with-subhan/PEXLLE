"use client";
import React from "react";
import { CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { ComboPerPage } from "./ShowingCardComboBoxPerPage";
import { boolean } from "zod";
import { Compare } from "./compare";
import { MortageCalculator } from "./MortageCalculator";
import { SavedSheet } from "./SavedSheet";
import { PropertiesTypes } from "./data/properties";

interface props {
    view: boolean
    setView: (value: boolean | ((prev: boolean) => boolean)) => void
    HeartList : (value : PropertiesTypes) => void
    Heart : PropertiesTypes[]
    serPerPage : (value : number) => void
    perPage : number
}

const ShowingContent: React.FC<props> = ({ view, setView , Heart , HeartList , serPerPage , perPage}) => {
    return (
        <div className="flex flex-col md:flex-row  justify-start gap-4 mt-2 md:mt-0  md:items-center sm:justify-between flex-wrap">
            <CardDescription>Showing 1 - 4 of 4 results</CardDescription>
            <div className="flex flex-wrap gap-2 items-center">
                <Button variant="outline" className="rounded-none" onClick={() => setView(prev => !prev)}>{view ? "Grid" : "Map"} View</Button>
                <Compare />
                <SavedSheet HeartList={HeartList} Hear={Heart}/>
                <MortageCalculator />
            </div>
            <ComboPerPage serPerPage = {serPerPage} perPage = {perPage}/>
        </div>
    );
};

export default ShowingContent;
