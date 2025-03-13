import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectType, ServerType } from "@/app/types/server"
import { StatsCards } from "./_components/StatsCards"
import { ProjectsList } from "./_components/ProjectsList"
import { ServersTable } from "./_components/ServersTable"
import { SystemUsage } from "./_components/SystemUsage"
import { RecentAlerts } from "./_components/RecentAlerts"
import { ActivityFeed } from "./_components/ActivityFeed"
import { DashboardHeader } from "./_components/DashboardHeader"
import { DashboardOverview } from "./_components/DashboardOverview"
import { RecentServers } from "./_components/RecentServers"
import { DashboardActions } from "./_components/DashboardActions"

// Sample data for projects
const projects: ProjectType[] = [
  {
    id: "project-1",
    name: "E-commerce Platform",
    description: "Main production environment for our online store",
    servers: 4,
    created: "2023-08-15",
    owner: "DevOps Team"
  },
  {
    id: "project-2",
    name: "Analytics Backend",
    description: "Data processing and analytics infrastructure",
    servers: 3,
    created: "2023-09-20",
    owner: "Data Team"
  },
  {
    id: "project-3",
    name: "Development Environment",
    description: "Staging and testing servers",
    servers: 2,
    created: "2023-10-05",
    owner: "Development Team"
  }
]

// Sample data for servers
const servers: ServerType[] = [
  {
    id: "web-server-1",
    name: "web-server-1",
    status: "Running",
    ip: "192.168.1.101",
    region: "US East (N. Virginia)",
    cpu: 4,
    ram: 8,
    disk: 160,
    uptime: "14d 6h 32m",
    provider: "aws",
    os: "Ubuntu 22.04 LTS",
    created: "2023-10-15",
    lastBackup: "2023-11-01",
    projectId: "project-1",
    usage: {
      cpu: 35,
      ram: 62,
      disk: 48,
      network: {
        in: "1.2 GB",
        out: "3.5 GB"
      }
    }
  },
  {
    id: "db-server-1",
    name: "db-server-1",
    status: "Running",
    ip: "192.168.1.102",
    region: "US East (N. Virginia)",
    cpu: 8,
    ram: 16,
    disk: 500,
    uptime: "21d 12h 45m",
    provider: "aws",
    os: "Ubuntu 22.04 LTS",
    created: "2023-09-10",
    lastBackup: "2023-11-01",
    projectId: "project-1",
    usage: {
      cpu: 42,
      ram: 58,
      disk: 65,
      network: {
        in: "0.8 GB",
        out: "1.5 GB"
      }
    }
  },
  {
    id: "analytics-1",
    name: "analytics-1",
    status: "Running",
    ip: "10.0.1.15",
    region: "Amsterdam",
    cpu: 4,
    ram: 8,
    disk: 250,
    uptime: "7d 3h 12m",
    provider: "digitalocean",
    os: "Debian 11",
    created: "2023-10-25",
    lastBackup: "2023-10-31",
    projectId: "project-2",
    usage: {
      cpu: 78,
      ram: 45,
      disk: 32,
      network: {
        in: "3.2 GB",
        out: "1.7 GB"
      }
    }
  },
  {
    id: "dev-server-1",
    name: "dev-server-1",
    status: "Running",
    ip: "192.168.5.10",
    region: "Frankfurt",
    cpu: 2,
    ram: 4,
    disk: 80,
    uptime: "3d 8h 45m",
    provider: "linode",
    os: "Ubuntu 20.04 LTS",
    created: "2023-10-28",
    projectId: "project-3",
    projectName: "Development Environment",
    usage: {
      cpu: 12,
      ram: 35,
      disk: 28,
      network: {
        in: "0.4 GB",
        out: "0.6 GB"
      }
    }
  }
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <DashboardHeader />
        
        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight mb-3">Welcome to HexaCloud</h1>
              <p className="text-muted-foreground text-lg">
                Manage all your cloud infrastructure from a single dashboard
              </p>
            </div>
            
            <DashboardOverview />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2">
                <RecentServers />
              </div>
              <div>
                <DashboardActions />
                <div className="mt-6">
                  <ActivityFeed />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
