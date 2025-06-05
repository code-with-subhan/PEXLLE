import React from "react";
import { CardDescription } from "../ui/card";

const CompareSelectCard = () => {
    return (
        <div>
            <img
                src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600596542815-ffad4c1539a9%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26h%3D600%26q%3D80&w=256&q=75"
                alt="" className="w-[15rem]"
            />
            <h1 className="text-[1rem] font-semibold mt-3">Charming Suburban Cottage</h1>
            <h1 className="text-xl font-bold my-4"> $800,000</h1>
            <CardDescription className="text-sm mt-2">Bedrooms: 2</CardDescription>
            <CardDescription className="text-sm mt-2">Bathrooms: 2</CardDescription>
            <CardDescription className="text-sm mt-2">Square Feet: 1500</CardDescription>
            <CardDescription className="text-sm mt-2">Year Built: 2015</CardDescription>
            <CardDescription className="text-sm mt-2">Type: House</CardDescription>
        </div>
    );
};

export default CompareSelectCard;
