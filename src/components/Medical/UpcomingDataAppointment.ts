

interface UpcomingPateintData  {
    id : number,
    title : string,
    description : string,
    time : string,
}

export const UpcomingPateint : UpcomingPateintData[] = [
    {id : 1 , title : "John Doe" , description : "Check-up" ,time : "10:00 AM"},
    {id : 2 , title : "Jane Smith" , description : "Follow-up" ,time : "11:20 PM"},
    {id : 3 , title : "Mike Johnson" , description : "New Patient" ,time : "2:00 PM"}
]

interface PerformanceMetricsData {
    id : number,
    title : string,
    Percentage : number,
    PercentageTextColor : string,
}

export const PerformanceMetrics : PerformanceMetricsData[] = [
    {id : 1 , title : "Patient Satisfaction" , Percentage : 92 , PercentageTextColor : "text-green-600"},
    {id : 2 , title : "Appointment Efficiency" , Percentage : 85 , PercentageTextColor : "text-yellow-600"},
    {id : 3 , title : "Treatment Success Rate" , Percentage : 98 , PercentageTextColor : "text-blue-600"}
]