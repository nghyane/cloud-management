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
import { CostHeader } from "./_components/CostHeader"
import { CostOverview } from "./_components/CostOverview"
import { CostBreakdown } from "./_components/CostBreakdown"
import { CostTable } from "./_components/CostTable"

export default function CostAnalysisPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <CostHeader />
        
        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Cost Analysis</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Cost Analysis</h1>
              <p className="text-muted-foreground">
                Track and analyze your cloud spending across all providers
              </p>
            </div>
            
            <div className="space-y-8">
              <CostOverview />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <CostBreakdown />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <CostTable />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 