import { Building, House, MapPin, Store } from "lucide-react"

interface PropertyTypeData {
    id : number,
    title : string,
    element : any
}

export const ListingPropety : PropertyTypeData[] = [
    {id : 1 , title : 'House' , element : <House className="text-[#737373]"/>},
    {id : 2 , title : 'Apartment' , element : <Building className="text-[#737373]"/>},
    {id : 3 , title : 'Commercial' , element : <Store className="text-[#737373]"/>},
    {id : 4 , title : 'Land Plot' , element : <MapPin className="text-[#737373]"/>}
]