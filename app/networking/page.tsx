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
import { NetworkingHeader } from "./_components/NetworkingHeader"
import { NetworkingOverview } from "./_components/NetworkingOverview"
import { NetworkResourceList } from "./_components/NetworkResourceList"

export default function NetworkingPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <NetworkingHeader />
        
        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Networking</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Networking</h1>
              <p className="text-muted-foreground">
                Manage VPCs, subnets, load balancers, DNS, firewalls, and CDN resources
              </p>
            </div>
            
            <div className="space-y-8">
              <NetworkingOverview />
              
              <div className="grid grid-cols-1 gap-4">
                <NetworkResourceList />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 