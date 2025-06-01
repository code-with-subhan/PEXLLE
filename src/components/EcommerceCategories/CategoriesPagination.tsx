"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoriesPagination = ({
  pag,
  pagActive,
  setpagActive,
}: {
  pag: number;
  pagActive: number;
  setpagActive: (value: number | ((prev: number) => number)) => void;
}) => {

  type OperatorType = "+" | "-"

  function SetPaginationNumber(operator: OperatorType) {

    if (pagActive !== 0 && pagActive <= pag) {
      setpagActive(prev => {
        if (operator === "+") {
          return prev < pag ? prev + 1 : prev
        } else {
          return prev > 1 ? prev - 1 : prev
        }
      })
    }
  }
  return (
    <div className="flex justify-center mt-6">

      <div className="flex gap-2 items-center text-[#737373] tex-sm mx-auto">
        <Button variant='outline' className="rounded-none" onClick={() => SetPaginationNumber("-")}>
          <ChevronLeft />
        </Button>
        <p className="text-black text-sm">Page {pagActive} of {pag}</p>
        <Button variant='outline' className="rounded-none" onClick={() => SetPaginationNumber("+")}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default CategoriesPagination;
