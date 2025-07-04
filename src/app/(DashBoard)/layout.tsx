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
import {
  Search,
  Bell,
  LayoutGrid,
  House,
  MessageCircle,
  Plus,
  Kanban,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Theme from "@/components/Home/Theme";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
          <SidebarInset className="p-3 bg-[#F5F5F5]">
            <div className="bg-white pt-3">
              <header className="flex pt-3  pr-4 items-center gap-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 md:justify-between sticky top-0 bg-[rgba(255,255,255,0.7)] backdrop-blur-xl pb-4 z-20">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1 text-[#737373]" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList className="flex flex-wrap">
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbPage className="font-semibold">
                          Dashboard
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
                <div className="">
                  <form
                    action=""
                    className="border-2 border-accent flex p-1 bg-accent gap-2 px-2"
                  >
                    <Search className="text-[#737373] max-w-4  md:w-[20rem]"></Search>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border-0  text-xs max-w-[550px] lg:w-[40rem] md:w-2/3 w-[90%] sm:w-[15rem] "
                    />
                    <div className="hidden md:flex bg-white py-0 px-1 text-xs text-[#737373] shrink-0  items-center gap-[1px]">
                      <LayoutGrid className="text-[#737373] w-3.5 flex items-center text-xs"></LayoutGrid>
                      k
                    </div>
                  </form>
                </div>
                <div className="flex gap-2 items-center ml-auto">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-sm relative"
                  >
                    <Bell className="text-[#BBBBBB]" />
                    <div className="w-2 top-1.5 right-2.5 rounded-full h-2 absolute bg-red-600"></div>
                  </Button>
                  <Theme />
                  <Avatar>
                   
                    <AvatarImage src="https://pexlledn.vercel.app/avatar.jpg"></AvatarImage>
                    <AvatarFallback>SH</AvatarFallback>
                  </Avatar>
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-1">
                {children}
              </div>
            </div>
            <div className="text-center my-9">
              <p className="text-[#737373] text-sm">
                Made with ❤️ by Khaled Alkurdi
              </p>
              <p className="text-[#737373] text-sm mt-1">
                © 2025 Pexlle. All rights reserved.
              </p>
            </div>
            <div className="flex gap-2 fixed bg-[#fcfcfc] bottom-6 left-[50%] p-1 px-3">
              <Button variant="ghost" className="rounded-none bg-gray-300 size-11 text-[#737373] opacity-80"><House className="size-6" /></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><MessageCircle className="size-6" /></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><Plus className="size-6" /></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><Kanban className="size-6" /></Button>
              <Button variant="ghost" className="rounded-none size-11 text-[#737373] opacity-80"><User className="size-6" /></Button>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </main>
    </>
  );
}
