import CategoriesList from "@/components/EcommerceCategories/CategoriesFilteList";
import CategoriesFilterPart from "@/components/EcommerceCategories/CategoriesFilterPart";
import CategoriesFourCardLines from "@/components/EcommerceCategories/CategoriesFourCardLines";
import CategoriesPagination from "@/components/EcommerceCategories/CategoriesPagination";
import React from "react";

const page = () => {
  return (
    <div className="mt-7">
      <CategoriesFilterPart />
      <div className="flex gap-3 flex-wrap items-center">
        {...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
          <section key={i}>{/* <CategoriesFourCardLines /> */}</section>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2">
        {...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
          <section key={i}>
            <CategoriesList />
          </section>
        ))}
      </div>
      <CategoriesPagination />
    </div>
  );
};

export default page;
