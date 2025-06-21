"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CheckboxDemoFilters } from "./checkboxListingFilters";
import { batch, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { ListingPropety } from "./RealProperytTypeData";
import { RoomLitingFIlters } from "./ListingFilters";
import { BasicCreteriaLitingFIlters } from "./ListingFilters";
import { SearchQuery, SetPropertyType } from "@/store/slices/RealListing";
import { SetRooms } from "@/store/slices/RealListing";
import { SetBasicCreteria } from "@/store/slices/RealListing";

const RealStateListingFilters = ({ bool }: { bool: boolean }) => {
  const { query, PropertyType, rooms, BasicCreteria } = useSelector((state: RootState) => state.RealListing);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className={`bg-[#F5F5F5] p-5 h-150 overflow-y-auto lg:w-1/3 mb-6 lg:mb-0  ${bool ? "block" : "hidden"
        }`}
    >
      <div>
        <h1 className="font-bold text-xl">Filters</h1>
        <Input
          placeholder="Location"
          className="mt-7 mb-6 bg-white rounded-none"
          value={query}
          onChange={(e) => dispatch(SearchQuery(e.target.value))}
        />
      </div>
      <h2 className="font-semibold text-sm mb-3">Property Type</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 my-2">
        {ListingPropety.map((e) => (
          <div
            key={e.id}
            onClick={() => {
              dispatch(SetPropertyType(e.title))
            }}
            className={`border ${PropertyType === e.title
              ? "border-black bg-[rgba(0,0,0,0.1)]"
              : "border bg-white"
              }  rounded-none flex flex-col items-center justify-center py-3   gap-2 cursor-pointer`}

          >
            {e.element}
            <span className="block">{e.title}</span>
          </div>
        ))}
      </div>
      <h2 className="text-sm font-semibold mt-6 mb-5">Price Range</h2>
      <div></div>
      <h2 className="text-sm font-semibold mt-6 mb-3 ">Number Of Rooms</h2>
      <div>
        <CheckboxDemoFilters states={RoomLitingFIlters} className={"md:flex items-center justify-between my-2 grid grid-cols-2 gap-4"} setState={SetRooms} specific={rooms} />
      </div>
      <h2 className="mt-5 text-sm font-semibold ">Basic Creteria</h2>
      <div >
        <CheckboxDemoFilters setState={SetBasicCreteria} states={BasicCreteriaLitingFIlters} className={"mt-2 mb-5 grid grid-rows-4 gap-2"} specific={BasicCreteria} />
      </div>
      <Button variant="outline" className="w-full rounded-none cursor-pointer"
        onClick={() => {
          batch(() => {
            dispatch(SearchQuery(""));
            dispatch(SetBasicCreteria([]));
            dispatch(SetPropertyType(""));
            dispatch(SetRooms([]));
          });
        }
        }>
        Clear Filters
      </Button>
    </div>
  );
};

export default RealStateListingFilters;
