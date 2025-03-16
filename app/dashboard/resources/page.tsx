import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ResourceHeader } from "./_components/ResourceHeader"
import { ResourceOverview } from "./_components/ResourceOverview"
import { ResourceUsageCharts } from "./_components/ResourceUsageCharts"
import { ResourceTable } from "./_components/ResourceTable"

export default function ResourceUsagePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <ResourceHeader />
        
        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Resource Usage</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Resource Usage</h1>
              <p className="text-muted-foreground">
                Monitor and analyze resource usage across all your cloud providers and servers
              </p>
            </div>
            
            <div className="space-y-8">
              <ResourceOverview />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <ResourceUsageCharts />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <ResourceTable />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 