import { Building, House, MapPin, Store } from "lucide-react"
import * as React from "react" // <--- Important for JSX element types

interface PropertyTypeData {
    id: number;
    title: string;
    element: React.ReactNode; // Or JSX.Element if it's strictly a single JSX element
}

export const ListingPropety: PropertyTypeData[] = [
    { id: 1, title: 'House', element: <House className="text-[#737373]"/> },
    { id: 2, title: 'Apartment', element: <Building className="text-[#737373]"/> },
    { id: 3, title: 'Commercial', element: <Store className="text-[#737373]"/> },
    { id: 4, title: 'Land Plot', element: <MapPin className="text-[#737373]"/> }
];