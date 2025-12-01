import DashboardStats from "@/components/home/DashboardStats"
import SidebarLayout from "@/layouts/SidebarLayout"

export default function HomePage() {
  return (
    <SidebarLayout >
      <div className="flex-1 ml-30 p-8 min-h-screen overflow-y-auto">
        <DashboardStats />
      </div>
    </SidebarLayout>
  )
}