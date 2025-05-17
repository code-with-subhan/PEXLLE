interface ReviewData {
    id: number,
    title: string,
    subtitle: string,
    img: string,
    BadgeRange: string,
    description: string
}

export const Review: ReviewData[] = [
    { id: 1, title: "Leslie Alexander", subtitle: "5/30/14", BadgeRange: "3.0", description: "Dr. Insburry is incredibly thorough and caring. He took the time to explain everything clearly." , img: "https://i.pravatar.cc/150?img=1" },
    { id: 2, title: "Bessie Cooper", subtitle: "5/7/16", BadgeRange: "4.0", description: "Great experience overall. The wait time was a bit long, but the care was excellent." , img: "https://i.pravatar.cc/150?img=2" },
    { id: 3, title: "Darlen Robertson", subtitle: "9/18/16", BadgeRange: "5.0", description: "I've been seeing Dr. Insburry for years. He's always professional and up-to-date on the latest treatments." , img: "https://i.pravatar.cc/150?img=3" },
]