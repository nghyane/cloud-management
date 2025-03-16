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
  Database, 
  HardDrive, 
  Plus, 
  Search, 
  Server, 
  Settings,
  Users,
  BarChart,
  Clock,
  ArrowRight
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Sample project data
const projects = [
  {
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
    resources: 65,
    cost: "$12,450.78"
  },
  {
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
    resources: 34,
    cost: "$5,280.45"
  },
  {
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
    resources: 21,
    cost: "$3,120.30"
  },
  {
    id: "test",
    name: "Test",
    description: "Automated testing environment",
    icon: Server,
    createdAt: "2023-04-05",
    status: "Maintenance",
    statusColor: "bg-amber-500",
    owner: "Sarah Williams",
    team: "QA",
    providers: [
      { name: "AWS", icon: Cloud, color: "#FF9900" }
    ],
    resources: 12,
    cost: "$1,850.20"
  }
]

export default function ProjectsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Projects</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex items-center space-x-2">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="w-full pl-8"
                  />
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
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
                  <BreadcrumbPage>Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
              <p className="text-muted-foreground">
                Manage your cloud projects across all providers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{projects.length}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all teams
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">
                      {projects.filter(p => p.status === "Active").length}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {Math.round((projects.filter(p => p.status === "Active").length / projects.length) * 100)}% of total
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {projects.reduce((sum, project) => sum + project.resources, 0)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all projects
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
                      <div className="text-2xl font-bold">
                        ${projects.reduce((sum, project) => sum + parseFloat(project.cost.replace(/[^0-9.-]+/g, "")), 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Current month to date
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => {
                  const ProjectIcon = project.icon
                  return (
                    <Card key={project.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <ProjectIcon className="h-5 w-5 mr-2" />
                            <CardTitle>{project.name}</CardTitle>
                          </div>
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${project.statusColor} mr-2`}></div>
                            <span className="text-sm text-muted-foreground">{project.status}</span>
                          </div>
                        </div>
                        <CardDescription className="mt-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Users className="h-4 w-4 mr-1" />
                              <span>Team: {project.team}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Created: {project.createdAt}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            {project.providers.map((provider, index) => (
                              <div 
                                key={index} 
                                className="h-8 w-8 rounded-full flex items-center justify-center bg-muted"
                                title={provider.name}
                              >
                                <provider.icon 
                                  className="h-5 w-5" 
                                  style={{ color: provider.color }} 
                                />
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-medium">Resources</div>
                              <div className="text-2xl font-bold">{project.resources}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Monthly Cost</div>
                              <div className="text-2xl font-bold">{project.cost}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50 flex justify-between items-center">
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Button>
                        <Button asChild>
                          <Link href={`/projects/${project.id}`}>
                            View Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
                
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center h-full py-12">
                    <div className="rounded-full bg-muted h-12 w-12 flex items-center justify-center mb-4">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Create New Project</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Set up a new cloud project with resources across providers
                    </p>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      New Project
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 