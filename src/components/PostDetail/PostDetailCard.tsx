"use client";
import React from "react";
import { Button } from "../ui/button";
import { CardDescription } from "../ui/card";
import { Clock, LocateIcon, User } from "lucide-react";

const imgArray: string[] = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];
const PostDetailCard = () => {
    return (
        <div>
            <h1>Similar Listings</h1>
            <div>
                {[...Array(4)].map((e) => (
                    <div className={``}>
                        <div>
                            <Button>Used</Button>
                            <Button>$999</Button>
                        </div>
                        <div>
                            <h1>iMac 21.5" (2019)</h1>
                            <CardDescription>iMac 21.5" (2019)</CardDescription>
                            <div>
                                <div>
                                    <LocateIcon />
                                    <CardDescription>San Francisco, CA</CardDescription>
                                </div>
                                <div>
                                    <Clock />
                                    <CardDescription>6/2/2025</CardDescription>
                                </div>
                            </div>
                            <div>
                                <User />
                                <CardDescription>John Doe</CardDescription>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostDetailCard;
