import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { BellRing, Moon, Search, AppWindow, Plus, Kanban, User, MessageCircle, House } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="p-r-4 p-t-4">
        <SidebarProvider className="bg-accent">
          <AppSidebar />
          <SidebarInset className="p-4 bg-[#F5F5F5] ">
            <div className="w-full h-full bg-white  ">{children}</div>
            <div className="text-center my-9">
              <p className="text-[#737373] text-sm">
                Made with ❤️ by Khaled Alkurdi
              </p>
              <p className="text-[#737373] text-sm mt-1">
                © 2025 Pexlle. All rights reserved.
              </p>
            </div>
            <div className="flex gap-2 fixed bg-[#fcfcfc] bottom-6 left-[50%] p-1 px-3">
              <Button variant="ghost" className="rounded-none bg-gray-300 size-11 text-[#737373] opacity-80"><House  className="size-6"/></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><MessageCircle  className="size-6"/></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><Plus  className="size-6"/></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><Kanban  className="size-6"/></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><User  className="size-6"/></Button>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </main>
    </>
  );
}
