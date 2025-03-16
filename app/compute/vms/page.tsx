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
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { 
  Cloud, 
  Filter, 
  MoreHorizontal, 
  Plus, 
  Power, 
  PowerOff, 
  RefreshCw, 
  Server 
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample data for virtual machines
const virtualMachines = [
  {
    id: "vm-1",
    name: "web-server-1",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Running",
    statusColor: "bg-green-500",
    type: "t3.medium",
    specs: "2 vCPU, 4 GB RAM",
    storage: "100 GB SSD",
    region: "us-east-1",
    ip: "192.168.1.101",
    created: "2023-10-15",
    os: "Ubuntu 22.04 LTS"
  },
  {
    id: "vm-2",
    name: "db-server-1",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Running",
    statusColor: "bg-green-500",
    type: "r5.large",
    specs: "2 vCPU, 16 GB RAM",
    storage: "500 GB SSD",
    region: "us-east-1",
    ip: "192.168.1.102",
    created: "2023-09-10",
    os: "Ubuntu 22.04 LTS"
  },
  {
    id: "vm-3",
    name: "analytics-1",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Running",
    statusColor: "bg-green-500",
    type: "e2-standard-4",
    specs: "4 vCPU, 16 GB RAM",
    storage: "250 GB SSD",
    region: "us-central1",
    ip: "10.0.1.15",
    created: "2023-10-25",
    os: "Debian 11"
  },
  {
    id: "vm-4",
    name: "dev-server-1",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    status: "Stopped",
    statusColor: "bg-red-500",
    type: "Standard_D2s_v3",
    specs: "2 vCPU, 8 GB RAM",
    storage: "80 GB SSD",
    region: "eastus",
    ip: "192.168.5.10",
    created: "2023-10-28",
    os: "Ubuntu 20.04 LTS"
  },
  {
    id: "vm-5",
    name: "private-server-1",
    provider: "Private",
    providerIcon: Server,
    providerColor: "#6B7280",
    status: "Running",
    statusColor: "bg-green-500",
    type: "Custom",
    specs: "8 cores, 32 GB RAM",
    storage: "2 TB SSD",
    region: "On-premise",
    ip: "10.0.0.5",
    created: "2023-01-10",
    os: "CentOS 8"
  }
]

export default function VirtualMachinesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Virtual Machines</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Providers</SelectItem>
                    <SelectItem value="aws">AWS</SelectItem>
                    <SelectItem value="gcp">Google Cloud</SelectItem>
                    <SelectItem value="azure">Azure</SelectItem>
                    <SelectItem value="private">Private Server</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="running">Running</SelectItem>
                    <SelectItem value="stopped">Stopped</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <div className="ml-auto flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh
                  </Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create VM
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/compute">Compute</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Virtual Machines</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Virtual Machines</h1>
              <p className="text-muted-foreground">
                Manage your virtual machines across all cloud providers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total VMs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all providers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Running</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">4</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      80% of total VMs
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Stopped</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-500">1</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      20% of total VMs
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total vCPUs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      76 GB RAM total
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Virtual Machines</CardTitle>
                  <CardDescription>
                    All virtual machines across providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Provider</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Specs</TableHead>
                        <TableHead>Storage</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>OS</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {virtualMachines.map((vm) => (
                        <TableRow key={vm.id}>
                          <TableCell className="font-medium">
                            {vm.name}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <vm.providerIcon 
                                className="h-4 w-4 mr-2" 
                                style={{ color: vm.providerColor }} 
                              />
                              {vm.provider}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="font-normal">
                              <div className={`w-2 h-2 rounded-full ${vm.statusColor} mr-2`}></div>
                              {vm.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{vm.type}</TableCell>
                          <TableCell>{vm.specs}</TableCell>
                          <TableCell>{vm.storage}</TableCell>
                          <TableCell>{vm.region}</TableCell>
                          <TableCell>{vm.ip}</TableCell>
                          <TableCell>{vm.os}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-1">
                              {vm.status === "Running" ? (
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <PowerOff className="h-4 w-4 text-red-500" />
                                </Button>
                              ) : (
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Power className="h-4 w-4 text-green-500" />
                                </Button>
                              )}
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 