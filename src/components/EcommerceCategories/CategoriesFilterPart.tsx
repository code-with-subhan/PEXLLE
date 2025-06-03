"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LayoutGrid, List } from "lucide-react";
import { ComboboxFilter } from "./ComboBoxFilter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

const CategoriesFilterPart = ({
  searchQuery,
  setsearchQuery,
  toggle,
  setToggle,
}: {
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
      
      <div className="mb-5 flex items-center gap-4">
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

    </div>
  );
};

export default CategoriesFilterPart;
