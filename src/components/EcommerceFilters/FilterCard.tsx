"use client"
import React, { useEffect, useMemo, useState } from "react";
import CategoriesPagination from "@/components/EcommerceCategories/CategoriesPagination";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import FiltersProducts from "./data/FilterData";
import FilterPart from "./FilterPart";
import FilterCardPage from "./FilterCardPage";
import { Product } from "./data/FilterData";
const FiltersCard = () => {
    const {
        query,
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
        VerifiedSeller
    } = useSelector((state: RootState) => state.EcommerceFilter)
    const ecom = useSelector((state: RootState) => state.EcommerceFilter)
    const [data, setdata] = useState<Product[]>(FiltersProducts)
    const [toggleButton, settoggleButton] = useState(true)
    const [formalCategories, setformalCategories] = useState<number>(0)
useEffect(() => {
  setdata(FiltersProducts)
}, [])

    const filters = useMemo(() => {
        const result = data
            .filter(e => query ? e.title.toLowerCase().includes(query.toLowerCase()) : true)
            .filter(e => Condition.length !== 0 ? Condition.some(a => a.toLowerCase() == e.condition.toLowerCase()) : true)
            .filter(e => SellerType.length !== 0 ? SellerType.some(a => a.toLowerCase() == e.sellerType.toLowerCase()) : true)
            .filter(e => ReturnPolicy.length !== 0 ? ReturnPolicy.some(a => a.toLowerCase() == e.returnPolicy.toLowerCase()) : true)
            .filter(e => AdType.length !== 0 ? AdType.some(a => a.toLowerCase() == e.adType.toLowerCase()) : true)
            .filter(e => Warranty ? Warranty == 'All' || Warranty === e.warranty : true)
            .filter(e => Category ? Category == 'All' || Category.toLowerCase() === e.category.toLowerCase() : true)
            .filter(e => SubCategory ? SubCategory == 'All' || SubCategory === e.subcategory : true)
            .filter(e => Negotiable ? Negotiable == 'All' || Negotiable === e.negotiable : true)
            .filter(e => VerifiedSeller ? VerifiedSeller == 'All' || VerifiedSeller === e.verifiedSeller : true)
            .filter((e) => {
                if (Shipping.length !== 0) {
                    for (const ship of Shipping) {
                        for (const Eship of e.shipping) {
                            if (ship !== Eship) continue
                            return ship === Eship
                        }
                    }
                } else return true
            })
            .filter((e) => {
                if (PaymentOptions.length !== 0) {
                    for (const pay of PaymentOptions) {
                        for (const Epay of e.paymentOptions) {
                            if (pay !== Epay) continue
                            return pay === Epay
                        }
                    }
                } else return true
            })
        console.log(formalCategories)
        if (formalCategories == 1) {
            result.sort((a: any, b: any) => b.price - a.price)
        }
        return result
    }, [ecom])

    const [paginationNumber, setpaginationNumber] = useState(data && Math.ceil(data.length / 8))
    const [paginationActive, setpaginationActive] = useState(1)

    useEffect(() => {
        setpaginationNumber(Math.ceil(filters.length / 8))
    }, [filters])
    useEffect(() => {
        setpaginationActive(1)
    }, [ecom])


    return (
        <div className="lg:mt-0 mt-4">
            <FilterPart
                toggle={toggleButton}
                format={setformalCategories}
                setToggle={settoggleButton} />

            <FilterCardPage data={filters} toggle={toggleButton} pag={paginationNumber} pagActive={paginationActive} />
            <CategoriesPagination pag={paginationNumber} pagActive={paginationActive} setpagActive={setpaginationActive} />
        </div>
    )
}

export default FiltersCard
