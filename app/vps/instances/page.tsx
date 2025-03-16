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
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Cloud, 
  Server, 
  Plus,
  Search,
  Filter,
  MoreVertical,
  Power,
  RefreshCw,
  Terminal,
  HardDrive,
  Cpu,
  MemoryStick,
  Globe,
  Clock,
  Tag,
  ArrowUpDown,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  PauseCircle,
  Loader2
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample VPS instances data
const instances = [
  {
    id: "i-1234567890abcdef0",
    name: "web-server-1",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Running",
    statusIcon: CheckCircle2,
    statusColor: "bg-green-500",
    type: "t3.medium",
    cpu: 2,
    memory: "4 GB",
    storage: "50 GB SSD",
    os: "Ubuntu 22.04",
    region: "us-east-1",
    ip: "54.23.45.67",
    created: "2023-10-15",
    tags: ["production", "web"],
    cost: "$25.55/month"
  },
  {
    id: "vm-1234567890abcdef0",
    name: "db-server-1",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    status: "Running",
    statusIcon: CheckCircle2,
    statusColor: "bg-green-500",
    type: "Standard_D2s_v3",
    cpu: 2,
    memory: "8 GB",
    storage: "100 GB Premium SSD",
    os: "Ubuntu 20.04",
    region: "eastus",
    ip: "40.76.45.67",
    created: "2023-09-20",
    tags: ["production", "database"],
    cost: "$87.60/month"
  },
  {
    id: "gce-1234567890abcdef0",
    name: "app-server-1",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Running",
    statusIcon: CheckCircle2,
    statusColor: "bg-green-500",
    type: "e2-standard-2",
    cpu: 2,
    memory: "8 GB",
    storage: "80 GB SSD",
    os: "Debian 11",
    region: "us-central1",
    ip: "34.68.45.67",
    created: "2023-11-05",
    tags: ["production", "application"],
    cost: "$48.92/month"
  },
  {
    id: "droplet-1234567890abcdef0",
    name: "staging-server",
    provider: "DigitalOcean",
    providerIcon: Cloud,
    providerColor: "#0080FF",
    status: "Stopped",
    statusIcon: PauseCircle,
    statusColor: "bg-yellow-500",
    type: "Premium Droplet",
    cpu: 4,
    memory: "8 GB",
    storage: "160 GB SSD",
    os: "Ubuntu 22.04",
    region: "nyc1",
    ip: "67.205.45.67",
    created: "2023-08-10",
    tags: ["staging"],
    cost: "$48.00/month"
  },
  {
    id: "server-1234567890abcdef0",
    name: "private-server-1",
    provider: "Private Server",
    providerIcon: Server,
    providerColor: "#6B7280",
    status: "Running",
    statusIcon: CheckCircle2,
    statusColor: "bg-green-500",
    type: "Custom",
    cpu: 8,
    memory: "32 GB",
    storage: "1 TB SSD",
    os: "CentOS 8",
    region: "On-premise",
    ip: "192.168.1.100",
    created: "2023-01-20",
    tags: ["production", "internal"],
    cost: "N/A"
  },
  {
    id: "i-0987654321abcdef0",
    name: "dev-server",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Stopped",
    statusIcon: PauseCircle,
    statusColor: "bg-yellow-500",
    type: "t3.small",
    cpu: 2,
    memory: "2 GB",
    storage: "30 GB SSD",
    os: "Amazon Linux 2",
    region: "us-west-2",
    ip: "54.23.45.68",
    created: "2023-07-15",
    tags: ["development"],
    cost: "$18.40/month"
  },
  {
    id: "vm-0987654321abcdef0",
    name: "test-server",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    status: "Error",
    statusIcon: XCircle,
    statusColor: "bg-red-500",
    type: "Standard_B2s",
    cpu: 2,
    memory: "4 GB",
    storage: "50 GB SSD",
    os: "Windows Server 2022",
    region: "westeurope",
    ip: "40.76.45.68",
    created: "2023-06-20",
    tags: ["testing"],
    cost: "$54.75/month"
  }
]

// Provider filters
const providers = [
  { name: "All Providers", value: "all" },
  { name: "AWS", value: "aws" },
  { name: "Azure", value: "azure" },
  { name: "Google Cloud", value: "gcp" },
  { name: "DigitalOcean", value: "digitalocean" },
  { name: "Private Server", value: "private" }
]

// Status filters
const statuses = [
  { name: "All Statuses", value: "all" },
  { name: "Running", value: "running" },
  { name: "Stopped", value: "stopped" },
  { name: "Error", value: "error" }
]

// Region filters
const regions = [
  { name: "All Regions", value: "all" },
  { name: "US East", value: "us-east" },
  { name: "US West", value: "us-west" },
  { name: "EU", value: "eu" },
  { name: "Asia", value: "asia" },
  { name: "On-premise", value: "on-premise" }
]

export default function VpsInstancesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">VPS Instances</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex items-center space-x-2">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search instances..."
                    className="w-full pl-8"
                  />
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Instance
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
                  <BreadcrumbLink href="/vps">VPS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Instances</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">VPS Instances</h1>
              <p className="text-muted-foreground">
                Manage your virtual private servers across multiple cloud providers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Instances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{instances.length}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all providers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Running Instances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <div className="text-2xl font-bold">
                        {instances.filter(i => i.status === "Running").length}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Currently active
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total vCPUs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">
                        {instances.reduce((sum, i) => sum + i.cpu, 0)}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Allocated to instances
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${instances
                        .filter(i => i.cost !== "N/A")
                        .reduce((sum, i) => sum + parseFloat(i.cost.replace(/[^0-9.-]+/g, "")), 0)
                        .toFixed(2)}/mo
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Estimated total
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {providers.map((provider) => (
                          <SelectItem key={provider.value} value={provider.value}>
                            {provider.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            {region.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      More Filters
                    </Button>
                  </div>
                </div>
                
                <Tabs defaultValue="list">
                  <TabsList className="mb-4">
                    <TabsTrigger value="list">
                      List View
                    </TabsTrigger>
                    <TabsTrigger value="grid">
                      Grid View
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="list">
                    <Card>
                      <CardContent className="p-0">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[250px]">
                                <div className="flex items-center">
                                  Name
                                  <ArrowUpDown className="ml-2 h-4 w-4" />
                                </div>
                              </TableHead>
                              <TableHead>Provider</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Specs</TableHead>
                              <TableHead>IP Address</TableHead>
                              <TableHead>Region</TableHead>
                              <TableHead>Created</TableHead>
                              <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {instances.map((instance) => {
                              const ProviderIcon = instance.providerIcon
                              const StatusIcon = instance.statusIcon
                              return (
                                <TableRow key={instance.id}>
                                  <TableCell className="font-medium">
                                    <div className="flex items-center">
                                      <Server className="h-4 w-4 mr-2 text-muted-foreground" />
                                      {instance.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                      {instance.id}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <ProviderIcon 
                                        className="h-4 w-4 mr-2" 
                                        style={{ color: instance.providerColor }} 
                                      />
                                      {instance.provider}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <StatusIcon 
                                        className={`h-4 w-4 mr-2 ${
                                          instance.status === "Running" 
                                            ? "text-green-500" 
                                            : instance.status === "Stopped" 
                                              ? "text-yellow-500" 
                                              : "text-red-500"
                                        }`} 
                                      />
                                      {instance.status}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="text-sm">
                                      {instance.type}
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center mt-1">
                                      <Cpu className="h-3 w-3 mr-1" /> {instance.cpu} vCPU
                                      <span className="mx-1">•</span>
                                      <MemoryStick className="h-3 w-3 mr-1" /> {instance.memory}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    {instance.ip}
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                                      {instance.region}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                      {instance.created}
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                          <MoreVertical className="h-4 w-4" />
                                          <span className="sr-only">Open menu</span>
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>
                                          <Terminal className="h-4 w-4 mr-2" />
                                          SSH Console
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                          <RefreshCw className="h-4 w-4 mr-2" />
                                          Reboot
                                        </DropdownMenuItem>
                                        {instance.status === "Running" ? (
                                          <DropdownMenuItem>
                                            <Power className="h-4 w-4 mr-2" />
                                            Stop
                                          </DropdownMenuItem>
                                        ) : (
                                          <DropdownMenuItem>
                                            <Power className="h-4 w-4 mr-2" />
                                            Start
                                          </DropdownMenuItem>
                                        )}
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                          <HardDrive className="h-4 w-4 mr-2" />
                                          Create Snapshot
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                          <Tag className="h-4 w-4 mr-2" />
                                          Manage Tags
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </TableCell>
                                </TableRow>
                              )
                            })}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="grid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {instances.map((instance) => {
                        const ProviderIcon = instance.providerIcon
                        const StatusIcon = instance.statusIcon
                        return (
                          <Card key={instance.id}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Server className="h-5 w-5 mr-2 text-muted-foreground" />
                                  <CardTitle className="text-base">{instance.name}</CardTitle>
                                </div>
                                <Badge 
                                  variant="outline" 
                                  className={`flex items-center ${
                                    instance.status === "Running" 
                                      ? "text-green-500 border-green-200 bg-green-50 dark:bg-green-950/20" 
                                      : instance.status === "Stopped" 
                                        ? "text-yellow-500 border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20" 
                                        : "text-red-500 border-red-200 bg-red-50 dark:bg-red-950/20"
                                  }`}
                                >
                                  <StatusIcon className="h-3 w-3 mr-1" />
                                  {instance.status}
                                </Badge>
                              </div>
                              <CardDescription className="text-xs mt-1">
                                {instance.id}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center text-sm">
                                    <ProviderIcon 
                                      className="h-4 w-4 mr-2" 
                                      style={{ color: instance.providerColor }} 
                                    />
                                    {instance.provider}
                                  </div>
                                  <div className="flex items-center text-sm">
                                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                                    {instance.region}
                                  </div>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm">
                                  <div className="flex items-center">
                                    <Cpu className="h-4 w-4 mr-2 text-muted-foreground" />
                                    {instance.cpu} vCPU
                                  </div>
                                  <div className="flex items-center">
                                    <MemoryStick className="h-4 w-4 mr-2 text-muted-foreground" />
                                    {instance.memory}
                                  </div>
                                </div>
                                
                                <div className="flex items-center text-sm">
                                  <HardDrive className="h-4 w-4 mr-2 text-muted-foreground" />
                                  {instance.storage}
                                </div>
                                
                                <div className="flex items-center text-sm">
                                  <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                                  {instance.ip}
                                </div>
                                
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {instance.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between border-t pt-4 pb-2">
                              <div className="text-sm font-medium">
                                {instance.cost}
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Terminal className="h-4 w-4" />
                                  <span className="sr-only">SSH Console</span>
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <RefreshCw className="h-4 w-4" />
                                  <span className="sr-only">Reboot</span>
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Power className="h-4 w-4" />
                                  <span className="sr-only">Power</span>
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreVertical className="h-4 w-4" />
                                      <span className="sr-only">Open menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <Terminal className="h-4 w-4 mr-2" />
                                      SSH Console
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <RefreshCw className="h-4 w-4 mr-2" />
                                      Reboot
                                    </DropdownMenuItem>
                                    {instance.status === "Running" ? (
                                      <DropdownMenuItem>
                                        <Power className="h-4 w-4 mr-2" />
                                        Stop
                                      </DropdownMenuItem>
                                    ) : (
                                      <DropdownMenuItem>
                                        <Power className="h-4 w-4 mr-2" />
                                        Start
                                      </DropdownMenuItem>
                                    )}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <HardDrive className="h-4 w-4 mr-2" />
                                      Create Snapshot
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Tag className="h-4 w-4 mr-2" />
                                      Manage Tags
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </CardFooter>
                          </Card>
                        )
                      })}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 