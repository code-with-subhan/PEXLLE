"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LayoutGrid, List } from "lucide-react";
import { ComboboxFilter } from "../EcommerceCategories/ComboBoxFilter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { SearchQuery } from "@/store/slices/RealListing";

const FilterPart = ({
    toggle,
    setToggle,
    format,
}: {
    toggle: boolean;
    format: (value: number) => void;
    setToggle: (value: boolean | ((prev: boolean) => boolean)) => void;
}) => {
    const {query} = useSelector((state: RootState) => state.EcommerceFilter)
    const dispatch = useDispatch<AppDispatch>()


    // toggle function
    function toggleFunction(value: boolean) {
        setToggle(value)
    }
    return (
        <div>

            <div className="mb-5 sm:flex items-center gap-4 grid">
                <Input
                    className="bg-[#F5F5F5] rounded-none focus:border-none focus:outline-none "
                    placeholder="Search ads..."
                    value={query}
                    onChange={(e) => dispatch(SearchQuery(e.target.value))}
                />
                <ComboboxFilter format={format} />
                <div className="flex gap-4 items-center">
                    <Button className={`rounded-none ${toggle ? "border border-black " : "border"} hover:border hover:border-black`} variant={toggle ? "secondary" : "outline"} size="icon" onClick={() => toggleFunction(true)}>
                        <LayoutGrid />
                    </Button>
                    <Button className="rounded-none" size="icon" variant={toggle ? "outline" : "default"} onClick={() => toggleFunction(false)}>
                        <List />
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default FilterPart;
