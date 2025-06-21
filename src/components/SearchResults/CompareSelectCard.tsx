import React from "react";
import { CardDescription } from "../ui/card";
import { Properties } from "./data/properties";
const CompareSelectCard = ({value} : {value : string}) => {
    const obj = Properties.find(item => item.id == value)
    return (
        <div>
            <img
            src={obj?.images.main}
                alt="" className="w-[15rem] sm:h-[15rem] h-[10rem]"
            />
            <h1 className="text-[1rem] font-semibold mt-3">{obj?.title}</h1>
            <h1 className="text-xl font-bold my-4"> ${obj?.price}</h1>
            <CardDescription className="text-sm mt-2">Bedrooms: {obj?.bedrooms}</CardDescription>
            <CardDescription className="text-sm mt-2">Bathrooms: {obj?.bathrooms}</CardDescription>
            <CardDescription className="text-sm mt-2">Square Feet: {obj?.size.value}</CardDescription>
            <CardDescription className="text-sm mt-2">Year Built: {obj?.builtYear}</CardDescription>
            <CardDescription className="text-sm mt-2">Type: {obj?.realEstateType}</CardDescription>
        </div>
    );
};

export default CompareSelectCard;
