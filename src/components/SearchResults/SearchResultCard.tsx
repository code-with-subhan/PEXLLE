"use client";
import {
    Bath,
    Bed,
    Calendar,
    Eye,
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
import {  useDispatch, useSelector  } from "react-redux";
import { RootState , AppDispatch } from "@/store/store";
import { fetchBuilding } from "@/store/slices/BuildingAPIS";
import { useEffect } from "react";


const SearchResultCard = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(fetchBuilding())
    }, [dispatch])
    
    const { data, loading, error } = useSelector((state: RootState) => state.Building)
    console.log(data , error , loading)
    return (
        <div className="flex gap-7 gap-x-2 flex-wrap justify-between w-full">
            {[...Array(6)].map((e: React.Key | null | undefined) => (
                <div
                    key={e}
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
                            src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600596542815-ffad4c1539a9%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26h%3D600%26q%3D80&w=1920&q=75"
                            alt=""
                            className="w-full  object-cover"
                        />
                        <Badge className="absolute -bottom-2 rounded-full">House</Badge>
                    </div>
                    <div>
                        <div className="flex gap-1 justify-between">
                            <h1 className="text-xl font-semibold w-1/3">
                                Charming Suburban Cottage
                            </h1>
                            <h1 className="text-xl font-bold">$800,000</h1>
                        </div>
                        <CardDescription className="text-sm flex gap-2 flex-wrap">
                            <MapPin className="w-4" /> Sunnybrook Ln.
                        </CardDescription>
                        <div className="flex justify-between items-center mt-2">
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Bed className="w-4" /> 2 Bedrooms
                            </CardDescription>
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Users className="w-4" />2 Guests
                            </CardDescription>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Bath className="w-4" /> 2 Baths
                            </CardDescription>
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Scan className="w-4" /> 1500 sq ft
                            </CardDescription>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                Houses
                            </CardDescription>
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Calendar className="w-4" /> Built 2015{" "}
                            </CardDescription>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResultCard;
