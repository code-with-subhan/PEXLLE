"use client";
import React from "react";
import { useDispatch } from "react-redux";
import {  AppDispatch } from "@/store/store";


export function CheckboxDemoFilters({
  states,
  className,
  setState,
  specific
}: {
  states: string[];
  className: string;
  setState : (value : string[] | ((value : string[]) => string[])) => any ;
  specific : string[]
}) {
  const dispatch = useDispatch<AppDispatch>();

  function handleListing(value : string) {
    let a = []
    if(specific.includes(value)){
     a=  specific.filter((e) => e !== value)
    }else{
      a = [...specific , value]
    }
    dispatch(setState(a))
  }
  return (
    <div className={className}>
      {states.map((e) => (
        <div key={e} className="flex items-center space-x-2" >
           <input
              type="checkbox"
              checked={specific.includes(e)}
              onChange={() => handleListing(e)}
              className="
                w-5 h-5 
                rounded 
                border-2 
                bg-white
                text-sm
                font-semibold
                border-gray-300 
                focus:ring-0
                focus:ring-offset-0
                focus:border-black
                checked:bg-black
                checked:border-black
                checked:hover:bg-black
                checked:focus:bg-black
                appearance-none
                relative
                after:absolute
                after:content-['']
                after:block
                after:w-1.5
                after:h-2.5
                after:border-r-2
                after:border-b-2
                after:border-r-white
                after:border-b-white
                after:left-1/2
                after:top-1/2
                after:transform
                after:-translate-x-1/2
                after:-translate-y-1/2
                after:rotate-30
                after:opacity-0
                checked:after:opacity-100
              "
            
            />
          <label
            htmlFor={e}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {e}
          </label>
        </div>
      ))}
    </div>
  );
}
