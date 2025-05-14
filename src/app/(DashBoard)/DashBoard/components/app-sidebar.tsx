"use client"

import * as React from "react"
import {
    AArrowUp,
    Ambulance,
    ArrowDownFromLine,
    BoldIcon,
  Camera,
  Eraser,
  HelpCircle,

//   IconInnerShadowTop,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  User2,
  UserCheck2Icon,
  UserCheckIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavDocuments } from "@/app/(DashBoard)/DashBoard/components/nav-documents"
import { NavMain } from "@/app/(DashBoard)/DashBoard/components/nav-main"
import { NavSecondary } from "@/app/(DashBoard)/DashBoard/components/nav-secondary"
import { NavUser } from "@/app/(DashBoard)/DashBoard/components/nav-user"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Analytics",
      url: "#",
      icon: BoldIcon,
    },
    {
      title: "Projects",
      url: "#",
      icon: BoldIcon,
    },
    {
      title: "Team",
      url: "#",
      icon: User2,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: Camera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: Eraser,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: ArrowDownFromLine,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: UserCheck2Icon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: LogOut,
    },
    {
      title: "Search",
      url: "#",
      icon: HelpCircle,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: Ambulance,
    },
    {
      name: "Reports",
      url: "#",
      icon: UserCheckIcon,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: AArrowUp,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                {/* <IconInnerShadowTop className="!size-5" /> */}
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}