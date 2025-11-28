import SidebarLayout from "@/layouts/SidebarLayout"

export default function HomePage() {
  return (
    <SidebarLayout>
      <div className="space-y-6">
        <h1 className="text-white text-3xl font-bold">Home</h1>
        <p className="text-white">Welcome to your application!</p>
      </div>
    </SidebarLayout>
  )
}