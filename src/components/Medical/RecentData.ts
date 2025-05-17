
interface Data {
    id: number,
    title: string,
    subTitle: string,
    BadgeName: string,
    background: string,
    textColor: string
}

export const RecentData: Data[] = [
    { id: 1, title: "Alice Johnson", subTitle: "Hypertension", BadgeName: "Stable ", background: "bg-[#F5F5F5]", textColor: "text-black" },
    { id: 2, title: "Bob Smith", subTitle: "Diabetes", BadgeName: "Improving ", background: "bg-green-50", textColor: "text-green-400" },
    { id: 3, title: "Carol Williams", subTitle: "Asthma", BadgeName: "Needs Attention ", background: "bg-red-500", textColor: "text-white" },
    { id: 4, title: "David Brown", subTitle: "Arthritis", BadgeName: "Stable ", background: "bg-[#F5F5F5]", textColor: "text-black" },
    { id: 5, title: "Eva Davis", subTitle: "Migraine", BadgeName: "Improving ", background: "bg-green-50", textColor: "text-green-400" },
]