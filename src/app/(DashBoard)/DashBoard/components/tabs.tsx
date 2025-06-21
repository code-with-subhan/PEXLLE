import FourDashboardCards from "@/components/Dashboard/fourDashboardCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartComponent } from "@/components/Dashboard/areaChart";
import { ChartComponent2 } from "@/components/Dashboard/ChartComponent2";
import { SalesCardDashBoard } from "@/components/Dashboard/dashboardCards";
import { Analytics_BarChart } from "@/components/Dashboard/Analytics/Analytics_BarChart";
import { Analytics_SecondChart } from "@/components/Dashboard/Analytics/Analytics_SecondChart";
import { Anyalytics_fifthChart } from "@/components/Dashboard/Analytics/Analytics_fifthChart";
import { Anyalytics_fifthChartClone } from "@/components/Dashboard/Analytics/Analytics_fifthChartClone";
import { Analytics_LastChart } from "@/components/Dashboard/Analytics/Analytics_LastChart";
import { Analytics_WaveChart } from "@/components/Dashboard/Analytics/Analytics_WaveChart";
import { Analytics_ExerciseHealthChart } from "@/components/Dashboard/Analytics/Analytics_exerciseHealthChart";
import { Analytics_thirdChart } from "@/components/Dashboard/Analytics/Analytics_ThirdChart";

export function TabsDemo() {
  return (
    <div className="my-4">
      <Tabs defaultValue="account">
        <TabsList className="grid grid-cols-4 rounded-none">
          <TabsTrigger value="account">DashBoard</TabsTrigger>
          <TabsTrigger value="password">Analytics</TabsTrigger>
          <TabsTrigger disabled value="Report">Report</TabsTrigger>
          <TabsTrigger disabled value="Summary">Summary</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-full ">
          <div className="">
            <FourDashboardCards />
          </div>
          <div className="lg:flex grid grid-cols-1 justify-between w-full gap-3">
            <ChartComponent />
            <SalesCardDashBoard classNam="bg-accent"/>
          </div>
          <div className="lg:flex grid grid-cols-1 justify-between gap-3 my-3">
            <ChartComponent2 />
            <SalesCardDashBoard classNam="bg-white border "/>
          </div>
        </TabsContent>
        <TabsContent value="password" className="m-auto">
          <Analytics_BarChart />
          <Analytics_SecondChart />
          <Analytics_thirdChart />
          <Analytics_WaveChart />
          <Anyalytics_fifthChartClone />
          <Anyalytics_fifthChart />
          <Analytics_ExerciseHealthChart />
          <Analytics_LastChart />
        </TabsContent>
      </Tabs>
    </div>
  );
}
