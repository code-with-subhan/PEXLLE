"use client"
import React, { useEffect, useState } from "react";
import CategoriesFilterPart from "@/components/EcommerceCategories/CategoriesFilterPart";
import CategoriesPagination from "@/components/EcommerceCategories/CategoriesPagination";
import CategoriesCardPage from "@/components/EcommerceCategories/CategoriesCardPage";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/slices/Products";
import { findUniqueProductCategory } from "@/lib/productutils";
const CategoriesWholePage = () => {

    // set states of different things and manage 
    const { data, loading, error } = useSelector((state: RootState) => state.fetchProducts)
    const selectCategory = useSelector((state: RootState) => state.category.selectedCategory)
    const [searchQuery, setSearchQuery] = useState("");
    const [toggleButton, settoggleButton] = useState(true)
    const dispatch = useDispatch<AppDispatch>()

    // check all filters of the product include input and category button
    const filteredProducts = data
        .filter((product: any) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((product: any) =>
            selectCategory === "All" ? true : product.category === selectCategory
        );

    // to call api
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const [paginationNumber, setpaginationNumber] = useState(data && Math.ceil(filteredProducts.length / 8))
      const [paginationActive, setpaginationActive] = useState(1)
    
      useEffect(() => {
        setpaginationNumber(Math.ceil(filteredProducts.length / 8))
      }, [filteredProducts])

    // check loading and error
    if (loading) return <h1 className="text-center text-xl font-bold">Loading</h1>
    if (error) return <h1 className="text-center text-xl font-bold">{error || "something went wrong"}</h1>

    return (
        <div>
            <CategoriesFilterPart
                uniqueCategories={findUniqueProductCategory(data)}
                searchQuery={searchQuery}
                setsearchQuery={setSearchQuery}
                toggle={toggleButton}
                setToggle={settoggleButton} />

            <CategoriesCardPage data={filteredProducts} toggle={toggleButton} pag={paginationNumber} pagActive={paginationActive} />
            <CategoriesPagination pag={paginationNumber} pagActive={paginationActive} setpagActive={setpaginationActive} />
        </div>
    )
}

export default CategoriesWholePage
