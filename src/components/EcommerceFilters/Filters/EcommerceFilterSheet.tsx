"use client"
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import React from "react";
import ConditionFilter from "./ConditionFilter";
import Waranty from "./Waranty";
import { CategoryFilter } from "./CategoryFilter";
import { CardDescription } from "@/components/ui/card";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
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

export function EcommerceFilterSheet() {
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

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-none lg:hidden block">
                    <Filter />
                </Button>
            </SheetTrigger>
            <SheetContent
                className="h-[95%] overflow-auto bg-white m-5 p-7 sm:w-[90%] block lg:hidden"
                side="left"
            >
                <div className="flex-col flex gap-4 justify-center items-center">
                    <h1 className="font-bold text-xl">Filters</h1>
                    <CardDescription>Apply filters to refine your search</CardDescription>
                    <Button
                        variant="outline"
                        size="sm"
                        className="rounded-none cursor-pointer w-full"
                    >
                        Clear Filters
                    </Button>
                </div>
                <CategoryFilter title="Category" states={Category} setStates={SetCategory} />
                <CategoryFilter title="Subcategory" states={SubCategory} setStates={SetSubCategory} />
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
            </SheetContent>
        </Sheet>
    );
}
