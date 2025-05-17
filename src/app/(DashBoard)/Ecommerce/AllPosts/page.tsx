import React from "react";
import { AllPostCards } from "@/components/AllPosts/AllPostCards";
import ShowPostFilter from "@/components/AllPosts/showPostFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Funnel, Search } from "lucide-react";
import { PaginationPost } from "@/components/AllPosts/paginationPost";

const page = () => {
  return (
    <div className="mt-6 container">
      <h1 className="text-4xl text-center font-bold">E-commerce Store</h1>
      <form className="flex justify-between items-center gap-4 my-8 relative">
        <Search className="absolute top-1.5 left-3 w-4 text-[#737373]" />
        <Input
          placeholder="Search Products.."
          className="w-full pl-9 shadow-none rounded-none bg-[#F5F5F5]"
        />
        <Button variant="outline" className="rounded-none">
          <Funnel />
          Filters
        </Button>
      </form>
      <ShowPostFilter />
      <div className="grid grid-cols-4 gap-4 mt-6 w-full gap-y-6">
        {...[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => <AllPostCards />)}
      </div>
      <div className="mt-5">

      <PaginationPost />
      </div>
    </div>
  );
};

export default page;
