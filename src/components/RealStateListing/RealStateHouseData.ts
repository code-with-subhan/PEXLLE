interface Houses {
    id: number,
    img: string,
    title: string,
    subTitle: string,
    price: string
}

export const HousesData: Houses[] = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
        title: "Beverly Hills, California",
        subTitle: "Summit Crest Residences",
        price: "$13,600,000"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "London Docklands, UK",
        subTitle: "Palm Grove Estates",
        price: "$5,435,032"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
        title: "Dubai Marina, UAE",
        subTitle: "Oceanview Retreat",
        price: "$25,430,000"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "South Beach, Miami",
        subTitle: "Skyline Peaks",
        price: "$456,000"
    },
]