import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-Sidebar"
import React, { useState } from "react"
import { NavLink } from "react-router-dom";

interface SidebarLayoutProps {
  children: React.ReactNode
}

export default function Sidebar({ children }: SidebarLayoutProps) {
  const [activeView, setActiveView] = useState<"home" | "library" | "settings">("home");

  const handleViewChange = (view: "home" | "library" | "settings") => {
    setActiveView(view);
    navToPath(view);
  };

  const navToPath = ({ view }: any) => {
    view === "home" ? <NavLink to="/" /> : (
      view === "library" ? <NavLink to="/library" /> 
      : <NavLink to="/settings" />
    )
  }

  return (
    <SidebarProvider>
      <AppSidebar activeView={activeView} onViewChange={handleViewChange}/>

      {/* Add content beside the sidebar*/}
      <SidebarInset className="p-6">
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}