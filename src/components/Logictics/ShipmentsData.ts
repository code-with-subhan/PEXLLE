interface Content {
    title: string,
    subtitle: string,
    content: string
}

export type Data = {
    id: number,
    title: Content[],
    BadgeName: string,
    BadgeColor: string
}

export 

const ShipmentsData: Data[] = [
    {
        id: 9835,
        title: [
            {
                title: "Los Angeles, CA 90063",
                subtitle: "3200 Malabar St",
                content: "Tue, Feb 27 8:00 AM"
            },
            {
                title: "Thousand Oaks, CA 91362",
                subtitle: "2401 Thousand Oaks Blvd",
                content: "Wed, Feb 28 12:00 PM"
            },
        ],
        BadgeColor: "green",
        BadgeName: "Delivery"
    },
    {
        id: 9834,
        title: [
            {
                title: "Prineville, OR 97754",
                subtitle: "440 NW Madras Hwy",
                content: "Wed, Feb 28 12:00 AM"
            },
            {
                title: "Portland, OR 97217",
                subtitle: "5420 N Interstate Ave",
                content: "Thu, Feb 29 7:30 PM"
            },
        ],
        BadgeColor: "blue",
        BadgeName: "Transfer"
    }
]