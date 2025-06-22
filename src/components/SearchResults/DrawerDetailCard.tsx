"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Bath, Bed, Calendar, Eye, MapPin, Scan, Users } from "lucide-react";
import { CardDescription } from "../ui/card";
import { PropertiesTypes } from "./data/properties"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image";


export function DrawerDetailCard({ obj }: { obj: PropertiesTypes }) {

    return (
        <Drawer >
            <DrawerTrigger asChild>
                
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className="flex cursor-pointer justify-center items-center size-9 rounded-2xl bg-[#F5F5F5]">
                            <Eye className="w-5" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>View Detail</p>
                    </TooltipContent>
                </Tooltip>

            </DrawerTrigger>
            <DrawerContent className=" md:hidden w-full h-full">
                <div className="mx-auto w-full max-w-sm">
                    <h1 className="text-xl font-semibold ">
                        {obj.title}
                    </h1>
                    <div className=" rounded-2xl max-w-full flex-col  gap-5 justify-between">
                        <div className=" rounded-2xl relative mb-2">
                            <Image
                                src={obj.images.main}
                                alt="a" blurDataURL="blur" width={1080} height={780}
                                className="max-w-full h-[330px]  object-cover "
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1 justify-between">
                                <h1 className="text-xl font-bold">${obj.price}</h1>
                                <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                    {obj.realEstateType}
                                </CardDescription>
                            </div>
                            <CardDescription className="text-sm flex gap-2 flex-wrap mt-2">
                                <MapPin className="w-4" />{obj.location}
                            </CardDescription>
                            <div className="flex justify-between items-center mt-2 w-2/3">
                                <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                    <Bed className="w-4" /> {obj.bedrooms} Bedrooms
                                </CardDescription>
                                <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                    <Users className="w-4" />{obj.guestRoom} Guests
                                </CardDescription>
                            </div>
                            <div className="flex justify-between items-center mt-2 w-2/3">
                                <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                    <Bath className="w-4" /> {obj.bathrooms} Baths
                                </CardDescription>
                                <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                    <Scan className="w-4" /> {obj.size.value} {obj.size.unit} ft
                                </CardDescription>
                            </div>
                            <div className="flex justify-between items-center mt-2">

                                <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                    <Calendar className="w-4" /> Built {obj.builtYear}
                                </CardDescription>
                            </div>
                            <CardDescription className="text-sm text-black mt-2">
                                {obj.description}
                            </CardDescription>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="default">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
