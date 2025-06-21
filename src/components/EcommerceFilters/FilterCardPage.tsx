"use client"
import React from "react";
import CategoriesList from "@/components/EcommerceCategories/CategoriesFilteList";
import { Product } from "./data/FilterData";
import FilterfourLInes from "./FilterFourCardLines";
import FilterList from "./FilterList";

interface props {
    data: Product[]
    toggle: boolean
    pag: number
    pagActive: number
}
const FilterCardPage = ({ data, toggle, pag, pagActive }: props) => {



    return (
        <div>
            <div className="lg:flex gap-3 gap-y-5 flex-wrap items-center justify-between grid grid-cols-1 sm:grid-cols-2 ">
                {toggle && data.map((e, i) => (
                    <FilterfourLInes ke={i} data={e} pag={pag} pagActive={pagActive} />
                ))}
            </div>
            <div className="grid grid-cols-1 gap-2">
                {!toggle && data.map((e, i) => (
                    <FilterList data={e} pag={pag} pagActive={pagActive} ke={i} />
                ))}
            </div>
        </div>
    )
}

export default FilterCardPage
