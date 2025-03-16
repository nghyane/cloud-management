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
  Database,
  Cpu,
  HardDrive,
  Activity
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample data for relational databases
const relationalDatabases = [
  {
    id: "db-1",
    name: "production-db",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "RDS MySQL",
    status: "Available",
    statusColor: "bg-green-500",
    version: "8.0.28",
    instance: "db.r5.large",
    storage: "500 GB",
    multiAZ: true,
    region: "us-east-1",
    connections: 42,
    cpu: "35%",
    memory: "60%",
    iops: "1000",
    backupRetention: "7 days"
  },
  {
    id: "db-2",
    name: "analytics-db",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "RDS PostgreSQL",
    status: "Available",
    statusColor: "bg-green-500",
    version: "14.3",
    instance: "db.r5.2xlarge",
    storage: "1 TB",
    multiAZ: true,
    region: "us-east-1",
    connections: 15,
    cpu: "45%",
    memory: "70%",
    iops: "3000",
    backupRetention: "14 days"
  },
  {
    id: "db-3",
    name: "staging-db",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    type: "Cloud SQL MySQL",
    status: "Available",
    statusColor: "bg-green-500",
    version: "8.0.26",
    instance: "db-n1-standard-2",
    storage: "250 GB",
    multiAZ: false,
    region: "us-central1",
    connections: 8,
    cpu: "15%",
    memory: "40%",
    iops: "500",
    backupRetention: "7 days"
  },
  {
    id: "db-4",
    name: "dev-db",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    type: "Azure SQL",
    status: "Available",
    statusColor: "bg-green-500",
    version: "12.0",
    instance: "GP_Gen5_2",
    storage: "100 GB",
    multiAZ: false,
    region: "eastus",
    connections: 3,
    cpu: "5%",
    memory: "20%",
    iops: "300",
    backupRetention: "7 days"
  },
  {
    id: "db-5",
    name: "reporting-db",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "RDS MariaDB",
    status: "Maintenance",
    statusColor: "bg-amber-500",
    version: "10.6.7",
    instance: "db.r5.xlarge",
    storage: "500 GB",
    multiAZ: true,
    region: "us-west-2",
    connections: 0,
    cpu: "0%",
    memory: "15%",
    iops: "1000",
    backupRetention: "14 days"
  }
]

export default function RelationalDatabasesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Relational Databases</div>
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
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="mysql">MySQL</SelectItem>
                    <SelectItem value="postgresql">PostgreSQL</SelectItem>
                    <SelectItem value="mariadb">MariaDB</SelectItem>
                    <SelectItem value="sqlserver">SQL Server</SelectItem>
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
                    Create Database
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
                  <BreadcrumbLink href="/databases">Databases</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Relational</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Relational Databases</h1>
              <p className="text-muted-foreground">
                Manage your relational databases across all cloud providers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Database className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">5</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all providers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Activity className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">68</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Current active connections
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">2.35 TB</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Allocated storage
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Multi-AZ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      60% of databases
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Relational Databases</CardTitle>
                  <CardDescription>
                    All relational databases across providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Provider</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Version</TableHead>
                        <TableHead>Instance</TableHead>
                        <TableHead>Storage</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Usage</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {relationalDatabases.map((db) => (
                        <TableRow key={db.id}>
                          <TableCell className="font-medium">
                            {db.name}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <db.providerIcon 
                                className="h-4 w-4 mr-2" 
                                style={{ color: db.providerColor }} 
                              />
                              {db.provider}
                            </div>
                          </TableCell>
                          <TableCell>{db.type}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="font-normal">
                              <div className={`w-2 h-2 rounded-full ${db.statusColor} mr-2`}></div>
                              {db.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{db.version}</TableCell>
                          <TableCell>{db.instance}</TableCell>
                          <TableCell>{db.storage}</TableCell>
                          <TableCell>{db.region}</TableCell>
                          <TableCell>
                            <div className="text-xs">
                              <div className="flex items-center">
                                <Cpu className="h-3 w-3 mr-1" />
                                {db.cpu}
                              </div>
                              <div className="flex items-center mt-1">
                                <HardDrive className="h-3 w-3 mr-1" />
                                {db.memory}
                              </div>
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