'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";
export function PaginationPost({
  pag,
  pagActive,
  setpagActive,
}: {
  pag: number;
  pagActive: number;
  setpagActive: (value: number | ((prev: number) => number)) => void;
}) {

  type OperatorType = "+" | "-"



  function SetPaginationNumber(operator: OperatorType) {
    
    if (pagActive !== 0 && pagActive <= pag) {
      setpagActive(prev => {
        if(operator === "+"){
          return prev < pag ? prev + 1 : prev
        }else{
          return prev > 1 ? prev - 1 : prev
        }
      })
    }
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem >
          <PaginationPrevious href="#" className="rounded-none" onClick={() => SetPaginationNumber("-")} />
        </PaginationItem>
        {[...Array(pag)].map((e, i) => (
          <PaginationItem key={i}>
            <PaginationLink href="#" onClick={() => setpagActive(i + 1)} className={`text-black rounded-none ${pagActive === i + 1 ? "border" : ""}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" className="rounded-none" onClick={() => SetPaginationNumber("+")} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
