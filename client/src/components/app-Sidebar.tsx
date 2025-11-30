import React from 'react'
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from './ui/sidebar'
import { Home, Library, Settings, SparklesIcon } from 'lucide-react';

interface SidebarProps {
  activeView: "home" | "library" | "settings";
  onViewChange: (view: "home" | "library" | "settings") => void;
}

function AppSidebar({ activeView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "library", icon: Library, label: "Library" },
    { id: "settings", icon: Settings, label: "Settings"}
  ] as const;

  return (
    <Sidebar> 
      <SidebarHeader className='mb-10 px-5 py-7'>
        <div className='text-text-secondary text-2xl font-bold tracking-tight'>
          📚 Academia
        </div>
      </SidebarHeader>

      <SidebarContent>
          <SidebarMenu className='flex-1 px-3 space-y-7'> 
            {navItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton 
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                    activeView === item.id 
                    ? "bg-primary/10 text-foreground border border-primary/20 shadow-lg shadow-primary/5" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40 border border-transparent"
                  }`}
                >
                  <item.icon className='w-4 h-4' />
                  {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

        <SidebarFooter>
          <div className='p-4 border-t border-border/50'>
            <div className='glass rounded-xl p-3 group hover:bg-white/5 transition-all duration-300 cursor-pointer'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-linear-to-br from-primary via-primary to-accent glow flex items-center justify-center'>
                  <SparklesIcon className='w-5 h-5 text-primary-foreground' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-semibold truncate'>Pro Academia</p>
                  <p className='text-xs text-muted-foreground truncate'>Premium Account</p>
                </div>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar