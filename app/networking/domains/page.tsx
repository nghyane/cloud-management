import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Plus, Globe, Search, Check, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DomainsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <header className="flex h-16 items-center gap-2 border-b px-4 sticky top-0 bg-background z-10">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">HexaCloud</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/networking">Networking</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Domains</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Domain
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <div className="container mx-auto py-6 px-4">
            <Card>
              <CardHeader className="px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle>Domains</CardTitle>
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground/70" />
                    <Input
                      type="search"
                      placeholder="Search domains..."
                      className="pl-8 w-full"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6">
                <div className="mt-2">
                  <div className="space-y-4">
                    {[
                      { domain: "example.com", status: "Active" },
                      { domain: "myapp.io", status: "Active" },
                      { domain: "test-site.dev", status: "Warning" },
                      { domain: "api.example.com", status: "Active" },
                      { domain: "blog.example.com", status: "Active" }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between p-3 border rounded-md hover:border-border/80 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-muted/20">
                            <Globe className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{item.domain}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                              <span>DNS: Cloudflare</span>
                              <span>•</span>
                              <span>Servers: 2</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 ml-auto sm:ml-0">
                          <Badge variant="outline" className={`flex items-center gap-1 ${
                            item.status === "Active" 
                              ? "text-emerald-500 border-emerald-200/50 bg-emerald-50/50 dark:bg-emerald-900/10 dark:border-emerald-900/20" 
                              : "text-amber-500 border-amber-200/50 bg-amber-50/50 dark:bg-amber-900/10 dark:border-amber-900/20"
                          }`}>
                            {item.status === "Active" ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <AlertTriangle className="h-3 w-3" />
                            )}
                            <span>{item.status}</span>
                          </Badge>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 