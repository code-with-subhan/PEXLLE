"use client";
import {
    Bath,
    Bed,
    Calendar,
    Heart,
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
    searchQuery: string,
    data: PropertiesTypes[]
}

const SearchResultCard = ({ searchQuery, data }: props) => {

    const ArrayData = data.length !== 0 ? data : Properties
    console.log(ArrayData, data)
    return (
        <div className="flex gap-7 gap-x-2 flex-wrap justify-between w-full">
            {ArrayData.map((e) => (
                <div
                    key={e.id}
                    className="w-full p-4.5 border rounded-2xl  md:max-w-[15.5rem] grid hover:shadow"
                >
                    <div className=" rounded-2xl relative mb-2 ">
                        <div className="flex gap-2 justify-end absolute -top-2 -right-1 ">
                            <div
                                className="flex justify-center items-center size-9 rounded-2xl
                         bg-[#F5F5F5]"
                            >
                                <Heart className="w-5" />
                            </div>
                            <div className="hidden md:block">
                                <DetailedResultCard />
                            </div>
                            <div className="block md:hidden">
                                <DrawerDetailCard />
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
