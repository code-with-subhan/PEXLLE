"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LayoutGrid, List } from "lucide-react";
import { ComboboxFilter } from "./ComboBoxFilter";
import { setSelectedCategory } from "@/store/slices/SelectProductCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { boolean } from "zod";

const CategoriesFilterPart = ({
  uniqueCategories,
  searchQuery,
  setsearchQuery,
  toggle,
  setToggle,
}: {
  uniqueCategories: string[];
  searchQuery: string;
  setsearchQuery: (value: string) => void;
  toggle : boolean;
  setToggle : (value : boolean | ((prev: boolean) => boolean)) => void;
}) => {

  const selectCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  const dispatch = useDispatch<AppDispatch>();

  // toggle function
  function toggleFunction (value : boolean){
    setToggle(value)
  }
  return (
    <div>
      <div className="relative">
        <div className="bg-black relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZb360NlZhomuQL-pSLFqIlCLtQ63jXopSUQ&s"
            alt=""
            className="h-53 w-full object-cover opacity-55"
          />
          <div className="absolute top-0 left-0 flex justify-center items-center h-full flex-col w-full gap-5">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Our Marketplace
            </h1>
            <p className="text-xl text-white">
              Discover amazing deals on unique items
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 flex items-center gap-4">
        <Input
          className="bg-[#F5F5F5] rounded-none focus:border-none focus:outline-none "
          placeholder="Search ads..."
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <ComboboxFilter />
        <Button className={`rounded-none ${toggle ? "border border-black " : "border"} hover:border hover:border-black`} variant={toggle ? "secondary" : "outline"} size="icon" onClick={() => toggleFunction(true)}>
          <LayoutGrid />
        </Button>
        <Button className="rounded-none" size="icon" variant={toggle ? "outline" : "default"} onClick={() => toggleFunction(false)}>
          <List />
        </Button>
      </div>
      <div className="flex gap-2 mb-7">
        {uniqueCategories.map((e) => (
          <Button
            size="sm"
            className="rounded-none"
            key={e}
            variant={e === selectCategory ? "default" : "outline"}
            onClick={() => dispatch(setSelectedCategory(e))}
          >
            {e}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilterPart;
