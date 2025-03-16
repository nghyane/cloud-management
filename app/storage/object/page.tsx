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
  HardDrive,
  FileText,
  Lock,
  Globe
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample data for object storage buckets
const objectStorageBuckets = [
  {
    id: "bucket-1",
    name: "app-assets",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "S3",
    access: "Private",
    accessIcon: Lock,
    region: "us-east-1",
    objects: 1245,
    size: "2.3 TB",
    lastModified: "2023-11-10",
    versioning: "Enabled",
    lifecycle: "Configured"
  },
  {
    id: "bucket-2",
    name: "user-uploads",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "S3",
    access: "Private",
    accessIcon: Lock,
    region: "us-east-1",
    objects: 8976,
    size: "5.7 TB",
    lastModified: "2023-11-15",
    versioning: "Enabled",
    lifecycle: "Configured"
  },
  {
    id: "bucket-3",
    name: "public-assets",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    type: "Cloud Storage",
    access: "Public",
    accessIcon: Globe,
    region: "us-central1",
    objects: 567,
    size: "1.2 TB",
    lastModified: "2023-10-28",
    versioning: "Disabled",
    lifecycle: "Not configured"
  },
  {
    id: "bucket-4",
    name: "backups",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    type: "Blob Storage",
    access: "Private",
    accessIcon: Lock,
    region: "eastus",
    objects: 124,
    size: "3.5 TB",
    lastModified: "2023-11-05",
    versioning: "Enabled",
    lifecycle: "Configured"
  },
  {
    id: "bucket-5",
    name: "logs",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "S3",
    access: "Private",
    accessIcon: Lock,
    region: "us-west-2",
    objects: 15678,
    size: "800 GB",
    lastModified: "2023-11-18",
    versioning: "Disabled",
    lifecycle: "Configured"
  }
]

export default function ObjectStoragePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Object Storage</div>
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
                    <SelectValue placeholder="Access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Access</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
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
                    Create Bucket
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
                  <BreadcrumbLink href="/storage">Storage</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Object Storage</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Object Storage</h1>
              <p className="text-muted-foreground">
                Manage your object storage buckets across all cloud providers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Buckets</CardTitle>
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
                    <CardTitle className="text-sm font-medium">Total Objects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">26,590</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      In all buckets
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
                      <div className="text-2xl font-bold">13.5 TB</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Used across all buckets
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Public Buckets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">1</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      20% of total buckets
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Object Storage Buckets</CardTitle>
                  <CardDescription>
                    All object storage buckets across providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Provider</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Access</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Objects</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Versioning</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {objectStorageBuckets.map((bucket) => (
                        <TableRow key={bucket.id}>
                          <TableCell className="font-medium">
                            {bucket.name}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <bucket.providerIcon 
                                className="h-4 w-4 mr-2" 
                                style={{ color: bucket.providerColor }} 
                              />
                              {bucket.provider}
                            </div>
                          </TableCell>
                          <TableCell>{bucket.type}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <bucket.accessIcon className="h-4 w-4 mr-2" />
                              {bucket.access}
                            </div>
                          </TableCell>
                          <TableCell>{bucket.region}</TableCell>
                          <TableCell>{bucket.objects.toLocaleString()}</TableCell>
                          <TableCell>{bucket.size}</TableCell>
                          <TableCell>{bucket.versioning}</TableCell>
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