"use client"
import React from "react";
import { Button } from "../ui/button";
import ConditionFilter from "./Filters/ConditionFilter";
import Waranty from "./Filters/Waranty";
import { CategoryFilter } from "./Filters/CategoryFilter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
    SetCategory,
    SetSubCategory,
    SetCondition,
    SetSellerType,
    SetShipping,
    SetWarranty,
    SetNogoTiable,
    SetpaymentOption,
    SetReturnPolicy,
    SetAdType,
    SetVerifiedSeller,
} from "@/store/slices/EcommerCe_Filter";
import EcommerceFilterproducts from "./data/FilterData";

const Filters = () => {
    const {
        Category,
        SubCategory,
        Condition,
        SellerType,
        Shipping,
        Warranty,
        Negotiable,
        PaymentOptions,
        ReturnPolicy,
        AdType,
        VerifiedSeller,
    } = useSelector((state: RootState) => state.EcommerceFilter);
        const z = EcommerceFilterproducts.filter(e => Category == "All" || e.category == Category)

    const a: any[] = Array.from(new Set(EcommerceFilterproducts.map((e: any) => e.category)))
    const b : any[] = Array.from(new Set(z.map((e: any) => e.subcategory)))

    a.unshift("All")
    b.unshift("All")

    return (
        <div className="bg-[#F5F5F5] p-4 lg:w-1/2 lg:block hidden">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-[1rem]">Filters</h1>
                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none cursor-pointer"
                >
                    Clear Filters
                </Button>
            </div>
            <CategoryFilter title="Category" states={Category} setStates={SetCategory} array={a}/>
            <CategoryFilter title="Subcategory" states={SubCategory} setStates={SetSubCategory} array={b}/>
            <ConditionFilter
                array={["New", "Like New", "Good", "Fair", "Poor"]}
                title={"Condition"}
                states={Condition}
                setStates={SetCondition}
            />
            <ConditionFilter
                array={["Individual", "Business"]}
                title="Seller Type"
                states={SellerType}
                setStates={SetSellerType}
            />
            <ConditionFilter
                array={["Free", "Paid", "Pickup"]}
                title="Shipping"
                states={Shipping}
                setStates={SetShipping}
            />
            <Waranty
                array={["All", "Yes", "No"]}
                title="Warranty"
                states={Warranty}
                setStatess={SetWarranty}
            />
            <Waranty
                array={["All", "Yes", "No"]}
                title="Negotiable"
                states={Negotiable}
                setStatess={SetNogoTiable}
            />
            <ConditionFilter
                array={["Cash", "Card", "Paypal", "Crypto"]}
                title="Payment Options"
                states={PaymentOptions}
                setStates={SetpaymentOption}
            />
            <ConditionFilter
                array={["No Returns", "14 Days", "30 Days", "60 Days"]}
                title="Return Policy"
                states={ReturnPolicy}
                setStates={SetReturnPolicy}
            />
            <ConditionFilter
                array={["Standard", "Featured", "Urgent"]}
                title="Ad Type"
                states={AdType}
                setStates={SetAdType}
            />
            <Waranty
                array={["All", "Yes", "No"]}
                title="Verified Seller"
                states={VerifiedSeller}
                setStatess={SetVerifiedSeller}
            />
        </div>
    );
};

export default Filters;
