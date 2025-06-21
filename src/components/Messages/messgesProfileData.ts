export interface userProfiletype { 
    id : number , 
    title : string, 
    des : string
}

export const MessageProfile : userProfiletype[] = [
    {id : 1 , title : "Bio", des : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id : 2 , title : "Email", des : "bobsmith@example.com"},
    {id : 3 , title : "Phone", des : "+1 (555) 123-4567"},
    {id : 4 , title : "Location", des : "San Francisco CA"},
]