"use client";
import {
    Bath,
    Bed,
    Calendar,
    MapPin,
    Scan,
    Users,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { CardDescription } from "../ui/card";
import { DetailedResultCard } from "./DetailResultCard";
import { DrawerDetailCard } from "./DrawerDetailCard";
import { Properties } from "./data/properties";
import { PropertiesTypes } from "./data/properties";

interface props {
    data: PropertiesTypes[],
    HeartList: (value: PropertiesTypes) => void,
    HeartBackground: string[]
    pagActive: number
    perPage : number
}

const SearchResultCard = ({ data, HeartList , HeartBackground  , pagActive  , perPage}: props) => {
    const ArrayData = data.length !== 0 ? data : Properties
    return (
        <div className="flex gap-7 gap-x-2 flex-wrap justify-between w-full">
            {ArrayData.map((e , i) => (
                <div
                    key={e.id}
                    className={`w-full p-4.5 border rounded-2xl  md:max-w-[15.5rem] grid hover:shadow  ${i < perPage*pagActive && i >= (perPage*pagActive ) -perPage ? "flex" : "hidden"}`}
                >
                    <div className=" rounded-2xl relative mb-2 ">
                        <div className="flex gap-2 justify-end absolute -top-2 -right-1 ">
                            <div
                                className="flex justify-center items-center size-9 rounded-2xl
                         bg-[#F5F5F5]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => HeartList(e)} width="24" height="24" viewBox="0 0 24 24" fill={HeartBackground.includes(e.id) ? `rgba(255,0,0,0.6)` : "transparent"} stroke={HeartBackground.includes(e.id) ? `rgba(255,0,0,0.6)` : "black"}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                            </div>
                            <div className="hidden md:block">
                                <DetailedResultCard obj={e} />
                            </div>
                            <div className="block md:hidden">
                                <DrawerDetailCard obj={e} />
                            </div>
                        </div>
                        <img
                            src={e.images.main}
                            alt=""
                            className="w-full  object-cover lg:h-[230px]"
                        />
                        <Badge className="absolute -bottom-2 rounded-full">{e.realEstateType}</Badge>
                    </div>
                    <div>
                        <div className="flex gap-1 justify-between">
                            <h1 className="text-xl font-semibold w-1/3">
                                {e.title}
                            </h1>
                            <h1 className="text-xl font-bold">${e.price}</h1>
                        </div>
                        <CardDescription className="text-sm flex gap-2 flex-wrap">
                            <MapPin className="w-4" /> {e.location}
                        </CardDescription>
                        <div className="flex justify-between items-center mt-2">
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Bed className="w-4" /> {e.bedrooms} Bedrooms
                            </CardDescription>
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Users className="w-4" />{e.guestRoom} Guests
                            </CardDescription>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Bath className="w-4" /> {e.bathrooms} Baths
                            </CardDescription>
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Scan className="w-4" /> {e.size.value} {e.size.unit} ft
                            </CardDescription>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                Houses
                            </CardDescription>
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Calendar className="w-4" /> Built {e.builtYear}
                            </CardDescription>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResultCard;
