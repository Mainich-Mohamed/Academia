import React from 'react'
import { Sidebar, SidebarContent, SidebarHeader } from './ui/sidebar'

function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>
          <div className='text-white text-3xl font-bold px-5 py-3'>
            Logo
          </div>
        </SidebarHeader>
        <SidebarContent />
    </Sidebar>
  )
}

export default AppSidebar