"use client";
import React, { useEffect, useState } from "react";
import { AllPostCards } from "@/components/AllPosts/AllPostCards";
import ShowPostFilter from "@/components/AllPosts/showPostFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Funnel, Search } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/Products";
import { RootState, AppDispatch } from "@/store/store";
import { PaginationPost } from "@/components/AllPosts/paginationPost";

const AllPostHeader = () => {
  // toggle filter button categories
  const [showFilters, setShowFilters] = useState(false);

  // get data from api and store in new state
  const { data, loading, error } = useSelector(
    (state: RootState) => state.fetchProducts
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // dispatch data means calling the api
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Manage categoreies for buttons of filters
  const uniqueCategories = Array.from(
    new Set(data?.map((p: any) => p.category) || [])
  ).sort();
  uniqueCategories.unshift("All");

  // select categories buttons
  const filteredProducts = data
    .filter((product: any) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product: any) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-6 container">
      <h1 className="text-4xl text-center font-bold">E-commerce Store</h1>
      <div className="flex justify-between items-center gap-4 mt-8 relative">
        <Search className="absolute top-1.5 left-3 w-4 text-[#737373]" />
        <Input
          placeholder="Search Products.."
          className="w-full pl-9 shadow-none rounded-none bg-[#F5F5F5]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowFilters((prev) => !prev)}
          className="px-4 py-2 rounded-none"
        >
          <Funnel />
          Filters
        </Button>
      </div>
      <ShowPostFilter
        showfilter={showFilters}
        uniqueCategory={uniqueCategories}
        selectCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-4 gap-4 mb-6 w-full gap-y-6">
        {filteredProducts.map((e: any) => (
          <AllPostCards product={e} key={e.id} />
        ))}
      </div>
      <div className="mt-5">
        <PaginationPost />
      </div>
    </div>
  );
};

export default AllPostHeader;
