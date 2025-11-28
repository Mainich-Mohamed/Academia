import { SidebarProvider, SidebarInset, SidebarHeader } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-Sidebar"
import React from "react"

interface SidebarLayoutProps {
  children: React.ReactNode
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />

      {/* Add content beside the sidebar*/}
      <SidebarInset className="p-6">
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}