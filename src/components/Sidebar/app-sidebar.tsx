"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Calculator,
  MessageCircleMore,
  Kanban,
  Briefcase,
  Banknote,
  GraduationCap,
  Truck,
  HeartPulse,
  BookOpenText,
  Building,
  StoreIcon,
  Settings,
  Vibrate,
  LogIn,
  ScanFace,
  Component,
  Inbox,
  PlayCircle,
  SquareDashedBottomCode,
} from "lucide-react"

import { NavMain } from "@/components/Sidebar/nav-main"
import { NavAuth } from "@/components/Sidebar/nav-project"
import { TeamSwitcher } from "@/components/Sidebar/team-swithcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavComponents } from "./nav-components"
import { NavTemplates } from "./nav-templates"

// This is sample data.
const data = {

  navMain: [
    {
      title: "Dashboard",
      url: "http://localhost:3000/DashBoard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Calculator",
      url: "http://localhost:3000/Calculator",
      icon: Calculator,
    },
    {
      title: "Messages",
      url: "#",
      icon: MessageCircleMore,
    },
    {
      title: "Kanban",
      url: "#",
      icon: Kanban,
    },
    {
      title: "Work",
      url: "http://localhost:3000/Work",
      icon: Briefcase,
    },
    {
      title: "Leads",
      url: "http://localhost:3000/Leads",
      icon: Banknote,
    },
    {
      title: "Education",
      url: "http://localhost:3000/Education",
      icon: GraduationCap,
    },
    {
      title: "Logistics",
      url: "http://localhost:3000/Logistics",
      icon: Truck,
    },
    {
      title: "Medical",
      url: "http://localhost:3000/Medical",
      icon: HeartPulse,
    },
    {
      title: "Real Estate",
      url: "#",
      icon: Building,
      items: [
        {
          title: "Building Management",
          url: "http://localhost:3000/RealEstate/BuildingManagement",
        },
        {
          title: "Real Estate lisings",
          url: "http://localhost:3000/RealEstate/RealEstateListing",
        },
        {
          title: "Search Results",
          url: "#",
        },
      ],
    },
    {
      title: "Social",
      url: "#",
      icon: BookOpenText,
      items: [
        {
          title: "Social Timeline",
          url: "http://localhost:3000/Social/TimeLine",
        },
        {
          title: "Profile",
          url: "http://localhost:3000/Social/Profile",
        },
      ],
    },
    {
      title: "E-commerce",
      url: "#",
      icon: StoreIcon,
      items: [
        {
          title: "User Profile",
          url: "http://localhost:3000/Ecommerce/UserProfile",
        },
        {
          title: "Post Details",
          url: "#",
        },
        {
          title: "All Posts",
          url: "http://localhost:3000/Ecommerce/AllPosts",
        },
        {
          title: "Categories",
          url: "http://localhost:3000/Ecommerce/Categories",
        },
        {
          title: "Filters",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Users",
          url: "http://localhost:3000/Settings/Users",
        },
        {
          title: "Team Members",
          url: "http://localhost:3000/Settings/Team",
        },
        {
          title: "Account",
          url: "http://localhost:3000/Settings/Account",
        },
        {
          title: "Pricing",
          url: "http://localhost:3000/Settings/Pricing",
        },
      ],
    },
    {
      title: "Dynamic Island",
      url: "http://localhost:3000/noti",
      icon: Vibrate,
    },
  ],
  authentication: [
    {
      title: "Sign in",
      url: "http://localhost:3000/signin",
      icon: LogIn,
    },
    {
      title: "Register",
      url: "http://localhost:3000/register",
      icon: ScanFace,
    },
  ],
  Components: [
    {
      title: "Components",
      url: "#",
      icon: Component,
    },
  ],
  Templates: [
    {
      title: "Mail",
      url: "http://localhost:3000/mail",
      icon: Inbox,
    },
    {
      title: "Music",
      url: "http://localhost:3000/music",
      icon: PlayCircle,
    },
    {
      title: "Playground",
      url: "http://localhost:3000/playground",
      icon: SquareDashedBottomCode,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="bg-[#F5F5F5]">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavComponents components={data.Components}/>
        <NavAuth authentication={data.authentication}/>
        <NavTemplates Templates={data.Templates}/>
      </SidebarContent>
    </Sidebar>
  )
}
