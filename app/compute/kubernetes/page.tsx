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
  RefreshCw,
  Cpu,
  HardDrive,
  Network
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample data for Kubernetes clusters
const kubernetesClusters = [
  {
    id: "k8s-1",
    name: "production-cluster",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Healthy",
    statusColor: "bg-green-500",
    version: "1.27",
    nodes: 3,
    nodeType: "t3.large",
    totalCpu: "12 vCPU",
    totalMemory: "24 GB",
    region: "us-east-1",
    created: "2023-08-15",
    networkPlugin: "VPC CNI"
  },
  {
    id: "k8s-2",
    name: "staging-cluster",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Healthy",
    statusColor: "bg-green-500",
    version: "1.26",
    nodes: 2,
    nodeType: "t3.medium",
    totalCpu: "4 vCPU",
    totalMemory: "8 GB",
    region: "us-east-1",
    created: "2023-09-10",
    networkPlugin: "VPC CNI"
  },
  {
    id: "k8s-3",
    name: "dev-cluster",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Healthy",
    statusColor: "bg-green-500",
    version: "1.28",
    nodes: 2,
    nodeType: "e2-standard-2",
    totalCpu: "4 vCPU",
    totalMemory: "8 GB",
    region: "us-central1",
    created: "2023-09-05",
    networkPlugin: "Calico"
  },
  {
    id: "k8s-4",
    name: "test-cluster",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    status: "Degraded",
    statusColor: "bg-amber-500",
    version: "1.27",
    nodes: 1,
    nodeType: "Standard_D2s_v3",
    totalCpu: "2 vCPU",
    totalMemory: "8 GB",
    region: "eastus",
    created: "2023-10-20",
    networkPlugin: "Azure CNI"
  }
]

export default function KubernetesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Kubernetes</div>
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
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="healthy">Healthy</SelectItem>
                    <SelectItem value="degraded">Degraded</SelectItem>
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
                    Create Cluster
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
                  <BreadcrumbPage>Kubernetes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Kubernetes</h1>
              <p className="text-muted-foreground">
                Manage your Kubernetes clusters across all cloud providers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Clusters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all providers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Nodes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      In all clusters
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total CPU</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">22</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      vCPUs allocated
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Memory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">48 GB</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      RAM allocated
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Kubernetes Clusters</CardTitle>
                  <CardDescription>
                    All Kubernetes clusters across providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Provider</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Version</TableHead>
                        <TableHead>Nodes</TableHead>
                        <TableHead>Resources</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Network Plugin</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {kubernetesClusters.map((cluster) => (
                        <TableRow key={cluster.id}>
                          <TableCell className="font-medium">
                            {cluster.name}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <cluster.providerIcon 
                                className="h-4 w-4 mr-2" 
                                style={{ color: cluster.providerColor }} 
                              />
                              {cluster.provider}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="font-normal">
                              <div className={`w-2 h-2 rounded-full ${cluster.statusColor} mr-2`}></div>
                              {cluster.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{cluster.version}</TableCell>
                          <TableCell>
                            {cluster.nodes} ({cluster.nodeType})
                          </TableCell>
                          <TableCell>
                            <div className="text-xs">
                              <div className="flex items-center">
                                <Cpu className="h-3 w-3 mr-1" />
                                {cluster.totalCpu}
                              </div>
                              <div className="flex items-center mt-1">
                                <HardDrive className="h-3 w-3 mr-1" />
                                {cluster.totalMemory}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{cluster.region}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Network className="h-4 w-4 mr-1 text-muted-foreground" />
                              {cluster.networkPlugin}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
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