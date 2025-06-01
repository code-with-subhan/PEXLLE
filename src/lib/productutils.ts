import { Product } from "@/components/EcommerceCategories/product";

export function findUniqueProductCategory(data: Product[]) : any[] {
    const uniqueCategories = Array.from(
        new Set(data?.map((p: any) => p.category) || [])
    ).sort();
    uniqueCategories.unshift("All");
    return uniqueCategories
}