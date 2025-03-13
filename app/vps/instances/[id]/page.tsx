import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PowerIcon, TerminalIcon, DatabaseIcon, GlobeIcon, ShieldIcon, BarChartIcon, SettingsIcon } from "lucide-react";
import Image from "next/image";
import { ServerOverview } from "./_components/ServerOverview";
import { ServerNetworking } from "./_components/ServerNetworking";
import { ServerMonitoring } from "./_components/ServerMonitoring";
import { ServerBackups } from "./_components/ServerBackups";
import { ServerSecurity } from "./_components/ServerSecurity";
import { ServerLogs } from "./_components/ServerLogs";

export default async function ServerDetailPage({ params }: { params: { id: string } }) {
  params = await params;
  
  const isRunning = true;
  const providerType = "aws";
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <header className="flex h-16 items-center gap-2 border-b px-4 sticky top-0 bg-background/90 backdrop-blur-sm z-10">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">HexaCloud</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/vps/instances">Servers</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{params.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              {isRunning ? "Stop" : "Start"}
            </Button>
            <Button variant="outline" size="sm">
              <TerminalIcon className="mr-2 h-3.5 w-3.5" />
              SSH
            </Button>
            <Button variant="outline" size="sm">
              Refresh
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="relative h-16 w-16 rounded-lg overflow-hidden border">
                <Image 
                  src={`/providers/${providerType}.svg`}
                  alt={providerType}
                  fill
                  className="object-contain p-2"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-semibold">{params.id}</h1>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-sm text-emerald-500 font-medium">Running</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Ubuntu 22.04 LTS • 4 vCPU • 8 GB RAM • 160 GB Storage</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <DatabaseIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Web Server</p>
                    <p className="text-sm text-muted-foreground">Nginx 1.20.1</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">Manage</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <DatabaseIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Database</p>
                    <p className="text-sm text-muted-foreground">MySQL 8.0</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">Manage</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GlobeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Domains</p>
                    <p className="text-sm text-muted-foreground">2 domains</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">Manage</Button>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-8">
              <div className="bg-muted/30 backdrop-blur-[2px] border rounded-lg p-1">
                <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto">
                  <TabsTrigger value="overview" className="py-2.5">Overview</TabsTrigger>
                  <TabsTrigger value="services" className="py-2.5">Services</TabsTrigger>
                  <TabsTrigger value="networking" className="py-2.5">Networking</TabsTrigger>
                  <TabsTrigger value="monitoring" className="py-2.5">Monitoring</TabsTrigger>
                  <TabsTrigger value="backups" className="py-2.5">Backups</TabsTrigger>
                  <TabsTrigger value="settings" className="py-2.5">Settings</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview" className="space-y-4 mt-8">
                <ServerOverview server={params.id} />
              </TabsContent>
              
              <TabsContent value="services" className="space-y-4 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Server Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Service cards would go here */}
                      <p className="text-muted-foreground">Service management interface</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="networking" className="space-y-4 mt-8">
                <ServerNetworking server={params.id} />
              </TabsContent>
              
              <TabsContent value="monitoring" className="space-y-4 mt-8">
                <ServerMonitoring server={params.id} />
              </TabsContent>
              
              <TabsContent value="backups" className="space-y-4 mt-8">
                <ServerBackups server={params.id} />
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4 mt-8">
                <ServerSecurity server={params.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 