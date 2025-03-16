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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { 
  Activity, 
  Cloud, 
  Cpu, 
  Database, 
  HardDrive, 
  Network, 
  Server, 
  Settings, 
  Shield, 
  Users,
  BarChart,
  Clock,
  AlertTriangle,
  Bell,
  Key,
  CreditCard,
  Globe,
  Layers,
  Lock
} from "lucide-react"

// Sample provider data
const providers = {
  "aws": {
    id: "aws",
    name: "Amazon Web Services",
    description: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering over 200 services from data centers globally.",
    icon: Cloud,
    color: "#FF9900",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-01-10",
    accountId: "123456789012",
    region: "us-east-1",
    services: {
      compute: true,
      storage: true,
      database: true,
      networking: true,
      security: true,
      analytics: true,
      ai: true,
      serverless: true
    },
    metrics: {
      resources: 124,
      cost: "$8,450.78",
      alerts: 2,
      regions: 4
    },
    regions: [
      { name: "US East (N. Virginia)", code: "us-east-1", resources: 65 },
      { name: "US West (Oregon)", code: "us-west-2", resources: 32 },
      { name: "EU (Ireland)", code: "eu-west-1", resources: 18 },
      { name: "Asia Pacific (Tokyo)", code: "ap-northeast-1", resources: 9 }
    ]
  },
  "gcp": {
    id: "gcp",
    name: "Google Cloud Platform",
    description: "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
    icon: Cloud,
    color: "#4285F4",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-02-15",
    accountId: "my-gcp-project-123",
    region: "us-central1",
    services: {
      compute: true,
      storage: true,
      database: true,
      networking: true,
      security: true,
      analytics: true,
      ai: true,
      serverless: true
    },
    metrics: {
      resources: 78,
      cost: "$5,120.45",
      alerts: 1,
      regions: 3
    },
    regions: [
      { name: "Iowa (us-central1)", code: "us-central1", resources: 42 },
      { name: "Oregon (us-west1)", code: "us-west1", resources: 21 },
      { name: "Belgium (europe-west1)", code: "europe-west1", resources: 15 }
    ]
  },
  "azure": {
    id: "azure",
    name: "Microsoft Azure",
    description: "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services.",
    icon: Cloud,
    color: "#0078D4",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-03-05",
    accountId: "azure-subscription-id-123",
    region: "eastus",
    services: {
      compute: true,
      storage: true,
      database: true,
      networking: true,
      security: true,
      analytics: true,
      ai: true,
      serverless: true
    },
    metrics: {
      resources: 56,
      cost: "$4,280.30",
      alerts: 0,
      regions: 2
    },
    regions: [
      { name: "East US", code: "eastus", resources: 38 },
      { name: "West Europe", code: "westeurope", resources: 18 }
    ]
  },
  "private": {
    id: "private",
    name: "Private Server",
    description: "On-premise infrastructure connected to the cloud management platform.",
    icon: Server,
    color: "#6B7280",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-01-20",
    accountId: "on-premise-datacenter",
    region: "On-premise",
    services: {
      compute: true,
      storage: true,
      database: true,
      networking: true,
      security: true,
      analytics: false,
      ai: false,
      serverless: false
    },
    metrics: {
      resources: 32,
      cost: "$1,850.20",
      alerts: 1,
      regions: 1
    },
    regions: [
      { name: "On-premise Datacenter", code: "on-premise", resources: 32 }
    ]
  }
}

// Sample service icons mapping
const serviceIcons = {
  compute: Cpu,
  storage: HardDrive,
  database: Database,
  networking: Network,
  security: Shield,
  analytics: BarChart,
  ai: Brain,
  serverless: Layers
}

// Custom Brain icon component since it's not in lucide-react
function Brain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
    </svg>
  )
}

// Sample resources data
const resources = [
  {
    id: "res-1",
    name: "web-server-1",
    type: "EC2 Instance",
    typeIcon: Cpu,
    status: "Running",
    statusColor: "bg-green-500",
    region: "us-east-1",
    project: "Production",
    created: "2023-10-15"
  },
  {
    id: "res-2",
    name: "app-storage",
    type: "S3 Bucket",
    typeIcon: HardDrive,
    status: "Available",
    statusColor: "bg-green-500",
    region: "us-east-1",
    project: "Production",
    created: "2023-09-20"
  },
  {
    id: "res-3",
    name: "production-db",
    type: "RDS Instance",
    typeIcon: Database,
    status: "Available",
    statusColor: "bg-green-500",
    region: "us-east-1",
    project: "Production",
    created: "2023-09-10"
  },
  {
    id: "res-4",
    name: "app-lb",
    type: "Load Balancer",
    typeIcon: Network,
    status: "Active",
    statusColor: "bg-green-500",
    region: "us-east-1",
    project: "Production",
    created: "2023-10-05"
  },
  {
    id: "res-5",
    name: "web-sg",
    type: "Security Group",
    typeIcon: Shield,
    status: "Active",
    statusColor: "bg-green-500",
    region: "us-east-1",
    project: "Production",
    created: "2023-09-15"
  }
]

// Sample activity log data
const activityLog = [
  {
    id: 1,
    action: "Resource Created",
    resource: "lambda-function-1",
    resourceType: "Lambda Function",
    user: "John Doe",
    timestamp: "2023-11-20 14:32:45",
    icon: Layers
  },
  {
    id: 2,
    action: "IAM Role Updated",
    resource: "app-service-role",
    resourceType: "IAM Role",
    user: "Jane Smith",
    timestamp: "2023-11-20 12:00:00",
    icon: Key
  },
  {
    id: 3,
    action: "Security Group Updated",
    resource: "web-tier-sg",
    resourceType: "Security Group",
    user: "Jane Smith",
    timestamp: "2023-11-19 16:45:22",
    icon: Shield
  },
  {
    id: 4,
    action: "Load Balancer Created",
    resource: "app-lb-1",
    resourceType: "Load Balancer",
    user: "Alex Johnson",
    timestamp: "2023-11-19 11:23:05",
    icon: Network
  },
  {
    id: 5,
    action: "S3 Bucket Created",
    resource: "app-assets",
    resourceType: "S3 Bucket",
    user: "John Doe",
    timestamp: "2023-11-18 09:12:33",
    icon: HardDrive
  }
]

export default async function ProviderPage({ params }: { params: { id: string } }) {
  // Get provider data based on ID
  const { id } = await params

  // Get provider data based on ID
  const provider = providers[id as keyof typeof providers] || {
    id: id,
    name: "Unknown Provider",
    description: "Provider not found",
    icon: Cloud,
    color: "#6B7280",
    status: "Unknown",
    statusColor: "bg-gray-500",
    connectedAt: "-",
    accountId: "-",
    region: "-",
    services: {
      compute: false,
      storage: false,
      database: false,
      networking: false,
      security: false,
      analytics: false,
      ai: false,
      serverless: false
    },
    metrics: {
      resources: 0,
      cost: "$0.00",
      alerts: 0,
      regions: 0
    },
    regions: []
  }

  const ProviderIcon = provider.icon

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Provider: {provider.name}</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="ml-auto flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Provider Settings
                </Button>
                <Button>
                  <Key className="mr-2 h-4 w-4" />
                  Manage Credentials
                </Button>
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
                  <BreadcrumbLink href="/providers">Providers</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{provider.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8 flex items-start justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <ProviderIcon 
                    className="h-8 w-8 mr-3" 
                    style={{ color: provider.color }} 
                  />
                  <h1 className="text-3xl font-bold tracking-tight">{provider.name}</h1>
                  <div className={`ml-4 w-3 h-3 rounded-full ${provider.statusColor}`}></div>
                  <span className="ml-2 text-sm text-muted-foreground">{provider.status}</span>
                </div>
                <p className="text-muted-foreground">
                  {provider.description}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Connected: {provider.connectedAt}
                </div>
                <div className="flex items-center ml-4">
                  <Key className="h-4 w-4 mr-1" />
                  Account ID: {provider.accountId}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {provider.metrics.resources}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all regions
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Regions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">{provider.metrics.regions}</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      With deployed resources
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <CreditCard className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">{provider.metrics.cost}</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Current month to date
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <AlertTriangle className={`h-4 w-4 mr-2 ${provider.metrics.alerts > 0 ? 'text-amber-500' : 'text-muted-foreground'}`} />
                      <div className="text-2xl font-bold">{provider.metrics.alerts}</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Requiring attention
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Regions</CardTitle>
                    <CardDescription>
                      Active regions with deployed resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {provider.regions.length > 0 ? (
                      <div className="space-y-4">
                        {provider.regions.map((region, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Globe className="h-5 w-5 mr-2 text-muted-foreground" />
                              <div>
                                <div className="font-medium">{region.name}</div>
                                <div className="text-sm text-muted-foreground">{region.code}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">{region.resources} resources</span>
                              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-blue-500 rounded-full" 
                                  style={{ 
                                    width: `${(region.resources / provider.metrics.resources) * 100}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <Globe className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No active regions</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Available Services</CardTitle>
                    <CardDescription>
                      Cloud services available in this provider
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(provider.services).map(([service, isAvailable]) => {
                        const ServiceIcon = serviceIcons[service as keyof typeof serviceIcons]
                        return (
                          <div key={service} className="flex items-center">
                            <div className={`rounded-full p-1.5 mr-2 ${isAvailable ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 'bg-muted text-muted-foreground'}`}>
                              {isAvailable ? (
                                <ServiceIcon className="h-4 w-4" />
                              ) : (
                                <Lock className="h-4 w-4" />
                              )}
                            </div>
                            <span className={`capitalize ${!isAvailable && 'text-muted-foreground'}`}>
                              {service}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="resources">
                <TabsList className="mb-4">
                  <TabsTrigger value="resources">
                    <Server className="h-4 w-4 mr-2" />
                    Resources
                  </TabsTrigger>
                  <TabsTrigger value="activity">
                    <Activity className="h-4 w-4 mr-2" />
                    Activity
                  </TabsTrigger>
                  <TabsTrigger value="billing">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Billing
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="resources">
                  <Card>
                    <CardHeader>
                      <CardTitle>Provider Resources</CardTitle>
                      <CardDescription>
                        Resources deployed in this cloud provider
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Region</TableHead>
                            <TableHead>Project</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {resources.map((resource) => (
                            <TableRow key={resource.id}>
                              <TableCell className="font-medium">
                                {resource.name}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <resource.typeIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                                  {resource.type}
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline" className="font-normal">
                                  <div className={`w-2 h-2 rounded-full ${resource.statusColor} mr-2`}></div>
                                  {resource.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{resource.region}</TableCell>
                              <TableCell>{resource.project}</TableCell>
                              <TableCell>{resource.created}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                  Manage
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <Button variant="outline" className="w-full mt-4">
                        View All Resources
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        Recent actions in this provider
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {activityLog.map((activity) => (
                          <div key={activity.id} className="flex items-start">
                            <div className="bg-muted rounded-full p-2 mr-4">
                              <activity.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">{activity.action}</div>
                              <div className="text-sm text-muted-foreground">
                                {activity.resource} ({activity.resourceType})
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center mt-1">
                                <span>{activity.user}</span>
                                <span className="mx-2">•</span>
                                <span>{activity.timestamp}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View All Activity
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="billing">
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing & Cost</CardTitle>
                      <CardDescription>
                        Cost breakdown for this provider
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-6">
                        <BarChart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-4">Detailed billing information will be available soon</p>
                        <Button>
                          <CreditCard className="mr-2 h-4 w-4" />
                          View Cost Explorer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 