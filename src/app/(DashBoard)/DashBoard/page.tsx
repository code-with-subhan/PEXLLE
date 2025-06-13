import { DialogDemo } from "./components/dialog";
import { DatePickerWithRange } from "@/components/Dashboard/dataRangePicker";
import { SonnerDemo } from "@/components/Dashboard/toaster";
import { TabsDemo } from "./components/tabs";

export default function Page() {
  return (
    <>
      <div className="py-6">
        {/* heading */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">Hi Subhan, Welcome back 👋</h1>
          {/* Buttons and calendar */}
          <div className="md:flex gap-2 hidden">
            <DatePickerWithRange />
            <SonnerDemo />
            <DialogDemo />
          </div>
        </div>

        {/* Tabs */}
        <TabsDemo />
      </div>
    </>
  );
}
