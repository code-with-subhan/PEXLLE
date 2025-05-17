import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationPost() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="rounded-none" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive className="rounded-none"> 2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">7</PaginationLink>
        </PaginationItem>
        <PaginationItem >
          <PaginationNext href="#" className="rounded-none"/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
