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
import { Badge } from "@/components/ui/badge"
import { 
  Cloud, 
  Plus, 
  Search, 
  Server, 
  Settings,
  Globe,
  ArrowRight,
  CreditCard,
  Key
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Sample provider data
const providers = [
  {
    id: "aws",
    name: "Amazon Web Services",
    description: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering over 200 services from data centers globally.",
    icon: Cloud,
    color: "#FF9900",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-01-10",
    accountId: "123456789012",
    regions: 4,
    resources: 124,
    cost: "$8,450.78"
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    description: "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
    icon: Cloud,
    color: "#4285F4",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-02-15",
    accountId: "my-gcp-project-123",
    regions: 3,
    resources: 78,
    cost: "$5,120.45"
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    description: "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services.",
    icon: Cloud,
    color: "#0078D4",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-03-05",
    accountId: "azure-subscription-id-123",
    regions: 2,
    resources: 56,
    cost: "$4,280.30"
  },
  {
    id: "private",
    name: "Private Server",
    description: "On-premise infrastructure connected to the cloud management platform.",
    icon: Server,
    color: "#6B7280",
    status: "Connected",
    statusColor: "bg-green-500",
    connectedAt: "2023-01-20",
    accountId: "on-premise-datacenter",
    regions: 1,
    resources: 32,
    cost: "$1,850.20"
  }
]

export default function ProvidersPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Cloud Providers</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex items-center space-x-2">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search providers..."
                    className="w-full pl-8"
                  />
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <Button asChild>
                    <a href="/providers/add">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Provider
                    </a>
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
                  <BreadcrumbPage>Cloud Providers</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Cloud Providers</h1>
              <p className="text-muted-foreground">
                Manage your connected cloud providers and on-premise infrastructure
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Providers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{providers.length}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Connected to platform
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
                      <div className="text-2xl font-bold">
                        {providers.reduce((sum, provider) => sum + provider.regions, 0)}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      With deployed resources
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {providers.reduce((sum, provider) => sum + provider.resources, 0)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all providers
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
                      <div className="text-2xl font-bold">
                        ${providers.reduce((sum, provider) => sum + parseFloat(provider.cost.replace(/[^0-9.-]+/g, "")), 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Current month to date
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {providers.map((provider) => {
                  const ProviderIcon = provider.icon
                  return (
                    <Card key={provider.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <ProviderIcon 
                              className="h-6 w-6 mr-3" 
                              style={{ color: provider.color }} 
                            />
                            <CardTitle>{provider.name}</CardTitle>
                          </div>
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${provider.statusColor} mr-2`}></div>
                            <span className="text-sm text-muted-foreground">{provider.status}</span>
                          </div>
                        </div>
                        <CardDescription className="mt-2">
                          {provider.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Account ID</div>
                              <div className="font-medium">{provider.accountId}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Connected</div>
                              <div className="font-medium">{provider.connectedAt}</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-sm text-muted-foreground">Regions</div>
                              <div className="text-xl font-bold">{provider.regions}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Resources</div>
                              <div className="text-xl font-bold">{provider.resources}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Cost</div>
                              <div className="text-xl font-bold">{provider.cost}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50 flex justify-between items-center">
                        <Button variant="ghost" size="sm">
                          <Key className="h-4 w-4 mr-2" />
                          Credentials
                        </Button>
                        <Button asChild>
                          <Link href={`/providers/${provider.id}`}>
                            Manage
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
                
                <Card className="border-dashed flex flex-col justify-center items-center p-8">
                  <div className="rounded-full bg-muted h-12 w-12 flex items-center justify-center mb-4">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Connect New Provider</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Add a new cloud provider or on-premise infrastructure
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <Button className="w-full" variant="outline" asChild>
                      <a href="/providers/add?provider=aws">
                        <Cloud className="mr-2 h-4 w-4" style={{ color: "#FF9900" }} />
                        AWS
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="/providers/add?provider=gcp">
                        <Cloud className="mr-2 h-4 w-4" style={{ color: "#4285F4" }} />
                        Google Cloud
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="/providers/add?provider=azure">
                        <Cloud className="mr-2 h-4 w-4" style={{ color: "#0078D4" }} />
                        Azure
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="/providers/add?provider=private">
                        <Server className="mr-2 h-4 w-4" />
                        Private Server
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 