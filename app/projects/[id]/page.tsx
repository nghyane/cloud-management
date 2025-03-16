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
  Bell
} from "lucide-react"

// Sample project data
const projects = {
  "production": {
    id: "production",
    name: "Production",
    description: "Main production environment",
    icon: Server,
    createdAt: "2023-01-15",
    status: "Active",
    statusColor: "bg-green-500",
    owner: "John Doe",
    team: "DevOps",
    providers: [
      { name: "AWS", icon: Cloud, color: "#FF9900" },
      { name: "Google Cloud", icon: Cloud, color: "#4285F4" }
    ],
    resources: {
      compute: 24,
      storage: 15,
      database: 8,
      networking: 12,
      security: 6
    },
    metrics: {
      uptime: "99.98%",
      cost: "$12,450.78",
      alerts: 2,
      incidents: 0
    }
  },
  "staging": {
    id: "staging",
    name: "Staging",
    description: "Pre-production testing environment",
    icon: Database,
    createdAt: "2023-02-20",
    status: "Active",
    statusColor: "bg-green-500",
    owner: "Jane Smith",
    team: "QA",
    providers: [
      { name: "AWS", icon: Cloud, color: "#FF9900" }
    ],
    resources: {
      compute: 12,
      storage: 8,
      database: 4,
      networking: 6,
      security: 4
    },
    metrics: {
      uptime: "99.95%",
      cost: "$5,280.45",
      alerts: 1,
      incidents: 0
    }
  },
  "development": {
    id: "development",
    name: "Development",
    description: "Developer sandbox environment",
    icon: HardDrive,
    createdAt: "2023-03-10",
    status: "Active",
    statusColor: "bg-green-500",
    owner: "Alex Johnson",
    team: "Engineering",
    providers: [
      { name: "AWS", icon: Cloud, color: "#FF9900" },
      { name: "Azure", icon: Cloud, color: "#0078D4" }
    ],
    resources: {
      compute: 8,
      storage: 4,
      database: 3,
      networking: 4,
      security: 2
    },
    metrics: {
      uptime: "99.80%",
      cost: "$3,120.30",
      alerts: 0,
      incidents: 0
    }
  }
}

// Activity log sample data
const activityLog = [
  {
    id: 1,
    action: "VM Created",
    resource: "web-server-3",
    user: "John Doe",
    timestamp: "2023-11-20 14:32:45",
    icon: Cpu
  },
  {
    id: 2,
    action: "Database Backup",
    resource: "production-db",
    user: "System",
    timestamp: "2023-11-20 12:00:00",
    icon: Database
  },
  {
    id: 3,
    action: "Security Group Updated",
    resource: "web-tier-sg",
    user: "Jane Smith",
    timestamp: "2023-11-19 16:45:22",
    icon: Shield
  },
  {
    id: 4,
    action: "Load Balancer Created",
    resource: "app-lb-1",
    user: "Alex Johnson",
    timestamp: "2023-11-19 11:23:05",
    icon: Network
  },
  {
    id: 5,
    action: "Storage Bucket Created",
    resource: "app-assets",
    user: "John Doe",
    timestamp: "2023-11-18 09:12:33",
    icon: HardDrive
  }
]

// Alerts sample data
const alerts = [
  {
    id: 1,
    severity: "High",
    severityColor: "bg-red-500",
    message: "High CPU usage on web-server-1",
    resource: "web-server-1",
    timestamp: "2023-11-20 10:15:22",
    status: "Active"
  },
  {
    id: 2,
    severity: "Medium",
    severityColor: "bg-amber-500",
    message: "Database connection pool near limit",
    resource: "production-db",
    timestamp: "2023-11-20 09:45:10",
    status: "Active"
  }
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Get project data based on ID
  const project = projects[params.id as keyof typeof projects] || {
    id: params.id,
    name: "Unknown Project",
    description: "Project not found",
    icon: Server,
    createdAt: "-",
    status: "Unknown",
    statusColor: "bg-gray-500",
    owner: "-",
    team: "-",
    providers: [],
    resources: {
      compute: 0,
      storage: 0,
      database: 0,
      networking: 0,
      security: 0
    },
    metrics: {
      uptime: "-",
      cost: "-",
      alerts: 0,
      incidents: 0
    }
  }

  const ProjectIcon = project.icon

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Project: {project.name}</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="ml-auto flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Project Settings
                </Button>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Manage Team
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
                  <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{project.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8 flex items-start justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <ProjectIcon className="h-8 w-8 mr-3" />
                  <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
                  <div className={`ml-4 w-3 h-3 rounded-full ${project.statusColor}`}></div>
                  <span className="ml-2 text-sm text-muted-foreground">{project.status}</span>
                </div>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Created: {project.createdAt}
                </div>
                <div className="flex items-center ml-4">
                  <Users className="h-4 w-4 mr-1" />
                  Team: {project.team}
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
                      {Object.values(project.resources).reduce((a, b) => a + b, 0)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all resource types
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Uptime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Activity className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">{project.metrics.uptime}</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last 30 days
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <BarChart className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">{project.metrics.cost}</div>
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
                      <AlertTriangle className={`h-4 w-4 mr-2 ${project.metrics.alerts > 0 ? 'text-amber-500' : 'text-muted-foreground'}`} />
                      <div className="text-2xl font-bold">{project.metrics.alerts}</div>
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
                    <CardTitle>Resource Distribution</CardTitle>
                    <CardDescription>
                      Resources by type in this project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Cpu className="h-5 w-5 mr-2 text-blue-500" />
                          <span>Compute</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">{project.resources.compute}</span>
                          <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500 rounded-full" 
                              style={{ 
                                width: `${(project.resources.compute / Object.values(project.resources).reduce((a, b) => a + b, 0)) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <HardDrive className="h-5 w-5 mr-2 text-purple-500" />
                          <span>Storage</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">{project.resources.storage}</span>
                          <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-purple-500 rounded-full" 
                              style={{ 
                                width: `${(project.resources.storage / Object.values(project.resources).reduce((a, b) => a + b, 0)) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Database className="h-5 w-5 mr-2 text-green-500" />
                          <span>Database</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">{project.resources.database}</span>
                          <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500 rounded-full" 
                              style={{ 
                                width: `${(project.resources.database / Object.values(project.resources).reduce((a, b) => a + b, 0)) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Network className="h-5 w-5 mr-2 text-orange-500" />
                          <span>Networking</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">{project.resources.networking}</span>
                          <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-orange-500 rounded-full" 
                              style={{ 
                                width: `${(project.resources.networking / Object.values(project.resources).reduce((a, b) => a + b, 0)) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 mr-2 text-red-500" />
                          <span>Security</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">{project.resources.security}</span>
                          <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-red-500 rounded-full" 
                              style={{ 
                                width: `${(project.resources.security / Object.values(project.resources).reduce((a, b) => a + b, 0)) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Cloud Providers</CardTitle>
                    <CardDescription>
                      Connected cloud providers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.providers.length > 0 ? (
                      <div className="space-y-4">
                        {project.providers.map((provider, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <provider.icon 
                                className="h-5 w-5 mr-2" 
                                style={{ color: provider.color }} 
                              />
                              <span>{provider.name}</span>
                            </div>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                        ))}
                        <Button className="w-full mt-4" variant="outline">
                          <Cloud className="mr-2 h-4 w-4" />
                          Add Provider
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <Cloud className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-4">No cloud providers connected</p>
                        <Button>
                          <Cloud className="mr-2 h-4 w-4" />
                          Connect Provider
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="activity">
                <TabsList className="mb-4">
                  <TabsTrigger value="activity">
                    <Activity className="h-4 w-4 mr-2" />
                    Activity
                  </TabsTrigger>
                  <TabsTrigger value="alerts">
                    <Bell className="h-4 w-4 mr-2" />
                    Alerts
                  </TabsTrigger>
                  <TabsTrigger value="resources">
                    <Server className="h-4 w-4 mr-2" />
                    Resources
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        Recent actions in this project
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
                                Resource: {activity.resource}
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
                
                <TabsContent value="alerts">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Alerts</CardTitle>
                      <CardDescription>
                        Alerts requiring attention
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {alerts.length > 0 ? (
                        <div className="space-y-4">
                          {alerts.map((alert) => (
                            <div key={alert.id} className="flex items-start">
                              <div className={`${alert.severityColor} rounded-full p-2 mr-4`}>
                                <AlertTriangle className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">{alert.message}</div>
                                <div className="text-sm text-muted-foreground">
                                  Resource: {alert.resource}
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center mt-1">
                                  <span>Severity: {alert.severity}</span>
                                  <span className="mx-2">•</span>
                                  <span>{alert.timestamp}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Resolve
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <p className="text-muted-foreground">No active alerts</p>
                        </div>
                      )}
                      <Button variant="outline" className="w-full mt-4">
                        View All Alerts
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="resources">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Resources</CardTitle>
                      <CardDescription>
                        All resources in this project
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-6">
                        <Server className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-4">Resource view will be available soon</p>
                        <Button>
                          <Server className="mr-2 h-4 w-4" />
                          Add Resource
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