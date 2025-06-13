import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import React from "react";
import ConditionFilter from "./ConditionFilter";
import SellerTypeFilter from "./SellerTypeFilter";
import Waranty from "./Waranty";
import NegotiableFilter from "./NegotiableFilter";
import PaymentFilter from "./PaymentFilter";
import ReturnPolicyFilter from "./ReturnPolicyFilter";
import AdTypeFilter from "./AdTypeFilter";
import VerifiedFilter from "./VerifiedFilter";
import ShippingFilter from "./ShippingFilter";
import { CategoryFilter } from "./CategoryFilter";
import { SubCategoryFilter } from "./SubCategoryFilter";
import { CardDescription } from "@/components/ui/card";

export function EcommerceFilterSheet() {
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
                <CategoryFilter />
                <SubCategoryFilter />
                <ConditionFilter />
                <SellerTypeFilter />
                <Waranty />
                <ShippingFilter />
                <NegotiableFilter />
                <PaymentFilter />
                <ReturnPolicyFilter />
                <AdTypeFilter />
                <VerifiedFilter />
            </SheetContent>
        </Sheet>
    );
}
