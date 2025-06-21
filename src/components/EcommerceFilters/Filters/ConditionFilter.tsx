"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { set } from "date-fns";
const ConditionFilter = ({
    array,
    title,
    states,
    setStates,
}: {
    array: string[];
    title: string;
    states: string[];
    setStates: (value: string[]) => void
}) => {
    const dispatch = useDispatch<AppDispatch>();

    function holdingstate (value : string) {
        let a = []
        if(states.includes(value)){
            a = states.filter(e => e !== value)
        }else{
          a = [...states , value]
        }
        dispatch(setStates(a))
    }
    return (
        <div>
            <h1 className="text-sm font-semibold mt-5">{title}</h1>
            <div className="flex gap-2 flex-wrap mt-2">
                {array.map((e) => (
                    <Button
                        variant="outline"
                        key={e}
                        size="sm"
                        className={`shadow-none rounded-none cursor-pointer ${states.includes(e) ? "border-black bg-[rgba(0,0,0,0.1)]" : "bg-white border"}`}
                        onClick={() => holdingstate(e)}
                    >
                        {e}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default ConditionFilter;
