"use client";
import React from "react";
import { CardDescription } from "../ui/card";
import { Clock, MapPin, User } from "lucide-react";
import { Badge } from "../ui/badge";

const imgArray: string[] = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];
const PostDetailCard = () => {
    return (
        <div className="px-2 mt-15 font-semibold text-2xl text-[#737373]">
            <h1>Similar Listings</h1>
            <div className="mt-4 lg:flex gap-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  items-center justify-between">
                {imgArray.map((e) => (
                    <div className="p-3 relative h-90 flex flex-col w-full justify-between  "
                        >

                        <div className="absolute top-0 left-0 w-full h-full z-0  " style={{
                            'boxShadow': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #000'
                        }}>
                            <img src={e} alt="" className="object-cover w-full h-full opacity-96" />
                        </div>
                        <div className="flex items-center justify-between relative z-10">
                            <Badge className="rounded-full text-sm">Used</Badge>
                            <Badge variant='secondary' className="rounded-full text-sm">$999</Badge>
                        </div>
                        <div className="grid gap-2 relative z-10">
                            <h1 className="text-white">iMac 21.5" (2019)</h1>
                            <CardDescription className="text-[#E7E5E4]">iMac 21.5" (2019)</CardDescription>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 text-[#E7E5E4]" />
                                    <CardDescription className="text-[#E7E5E4]">San Francisco, CA</CardDescription>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 text-[#E7E5E4]" />
                                    <CardDescription className="text-[#E7E5E4]">6/2/2025</CardDescription>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 text-[#E7E5E4]" />
                                <CardDescription className="text-[#E7E5E4]">John Doe</CardDescription>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostDetailCard;
