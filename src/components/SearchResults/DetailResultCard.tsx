"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Bath, Bed, Calendar, Eye, MapPin, Scan, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

export function DetailedResultCard() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="flex justify-center items-center size-9 rounded-2xl bg-[#F5F5F5]">
                    <Eye className="w-5" />
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[800px]">
                <h1 className="text-xl font-semibold ">
                    Charming Suburban Cottage
                </h1>
                <div className=" rounded-2xl max-w-full flex gap-5 justify-between">
                    <div className=" rounded-2xl relative mb-2">
                        <img
                            src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600596542815-ffad4c1539a9%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26h%3D600%26q%3D80&w=1920&q=75"
                            alt=""
                            className="max-w-[350px] h-[330px]  object-cover "
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1 justify-between">
                            <h1 className="text-xl font-bold">$800,000</h1>
                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                Houses
                            </CardDescription>
                        </div>
                        <CardDescription className="text-sm flex gap-2 flex-wrap mt-2">
                            <MapPin className="w-4" /> Sunnybrook Ln.
                        </CardDescription>
                        <div className="flex justify-between items-center mt-2 w-2/3">
                            <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                <Bed className="w-4" /> 2 Bedrooms
                            </CardDescription>
                            <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                <Users className="w-4" />2 Guests
                            </CardDescription>
                        </div>
                        <div className="flex justify-between items-center mt-2 w-2/3">
                            <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                <Bath className="w-4" /> 2 Baths
                            </CardDescription>
                            <CardDescription className="text-black flex gap-2 items-center flex-wrap text-sm">
                                <Scan className="w-4" /> 1500 sq ft
                            </CardDescription>
                        </div>
                        <div className="flex justify-between items-center mt-2">

                            <CardDescription className="flex gap-2 items-center flex-wrap text-sm">
                                <Calendar className="w-4" /> Built 2015
                            </CardDescription>
                        </div>
                        <CardDescription className="text-sm text-black mt-2">This charming suburban cottage offers a perfect blend of comfort and style. With its spacious layout and modern amenities, it's ideal for families or professionals seeking a peaceful retreat.

                        </CardDescription>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
