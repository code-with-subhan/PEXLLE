"use client"
import React, { useEffect, useMemo, useState } from "react";
import CategoriesFilterPart from "@/components/EcommerceCategories/CategoriesFilterPart";
import CategoriesPagination from "@/components/EcommerceCategories/CategoriesPagination";
import CategoriesCardPage from "@/components/EcommerceCategories/CategoriesCardPage";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/slices/Products";
import { findUniqueProductCategory } from "@/lib/productutils";
import CommerceTopImage from "./CommerceTopImage";
import CommerceCategoriesFiltersButton from "./CommerceCategoriesFiltersButton";
const CategoriesWholePage = () => {

    // set states of different things and manage 
    const { data, loading, error } = useSelector((state: RootState) => state.fetchProducts)
    const selectCategory = useSelector((state: RootState) => state.category.selectedCategory)
    const [searchQuery, setSearchQuery] = useState("");
    const [toggleButton, settoggleButton] = useState(true)
    const dispatch = useDispatch<AppDispatch>()
    const [formalCategories, setformalCategories] = useState<number>(0)

    // check all filters of the product include input and category button
    const filteredProducts = useMemo(() => {
        let result = data
            .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .filter(p => selectCategory === "All" ? true : p.category === selectCategory);

        if (formalCategories === 1) {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [data, searchQuery, selectCategory, formalCategories]);
    // to call api
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const [paginationNumber, setpaginationNumber] = useState(data && Math.ceil(filteredProducts.length / 8))
    const [paginationActive, setpaginationActive] = useState(1)

    useEffect(() => {
        setpaginationNumber(Math.ceil(filteredProducts.length / 8))
    }, [filteredProducts])

    useEffect(() => {
        setpaginationActive(1)
    }, [searchQuery, selectCategory])



    // check loading and error
    if (loading) return <h1 className="text-center text-xl font-bold">Loading</h1>
    if (error) return <h1 className="text-center text-xl font-bold">{error || "something went wrong"}</h1>

    return (
        <div>
            {/* Top image */}
            <CommerceTopImage />

            {/* Filters Part */}
            <CategoriesFilterPart
                searchQuery={searchQuery}
                setsearchQuery={setSearchQuery}
                toggle={toggleButton}
                format={setformalCategories}
                setToggle={settoggleButton} />

            {/* Categories Part */}
            <CommerceCategoriesFiltersButton uniqueCategories={findUniqueProductCategory(data)} />

            {/* Card Part */}
            <CategoriesCardPage data={filteredProducts} toggle={toggleButton} pag={paginationNumber} pagActive={paginationActive} />

            {/* Pagination Part */}
            <CategoriesPagination pag={paginationNumber} pagActive={paginationActive} setpagActive={setpaginationActive} />
        </div>
    )
}

export default CategoriesWholePage
