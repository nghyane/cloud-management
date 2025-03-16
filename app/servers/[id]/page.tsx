"use client";

import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  HardDrive,
  Database,
  FileText,
  Terminal,
  Shield,
  Activity,
  Settings,
  RefreshCw,
  Power,
  PowerOff,
} from "lucide-react";

// Sample server data for demonstration
const getServerById = (id: string) => {
  return {
    id,
    name: "Production API Server",
    provider: "AWS",
    region: "us-east-1",
    status: "online",
    type: "t3.large",
    ip: "54.23.212.100",
    cpu: 78,
    memory: 62,
    disk: 45,
    services: ["nginx", "node", "postgres"],
    lastConnected: "2 minutes ago",
    os: "Ubuntu 22.04 LTS",
    kernel: "5.15.0-1019-aws",
    uptime: "45 days, 7 hours",
    connectionMethod: "SSH Key",
    sshKeyName: "prod-api-key",
    databases: [
      { name: "users_db", type: "PostgreSQL", size: "12.4 GB", status: "healthy" },
      { name: "logs_db", type: "PostgreSQL", size: "45.7 GB", status: "healthy" },
    ],
    backups: [
      { id: "bkp-001", date: "2023-06-15", size: "24 GB", type: "Full" },
      { id: "bkp-002", date: "2023-06-22", size: "26 GB", type: "Full" },
    ],
  };
};

export default function ServerDetailPage() {
  const params = useParams();
  const serverId = params.id as string;
  const server = getServerById(serverId);

  if (!server) {
    return <div className="container mx-auto p-6">Loading server information...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{server.name}</h1>
            <Badge
              variant={server.status === "online" ? "default" : "destructive"}
              className={
                server.status === "online"
                  ? "bg-green-500/10 text-green-500 hover:bg-green-500/10"
                  : "bg-red-500/10 text-red-500 hover:bg-red-500/10"
              }
            >
              {server.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {server.provider} • {server.region} • {server.ip}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
            <a href={`/servers/${serverId}/terminal`}>
              <Terminal className="h-4 w-4" />
              <span>Terminal</span>
            </a>
          </Button>
          {server.status === "online" ? (
            <Button variant="destructive" size="sm" className="flex items-center gap-2">
              <PowerOff className="h-4 w-4" />
              <span>Stop</span>
            </Button>
          ) : (
            <Button variant="default" size="sm" className="flex items-center gap-2">
              <Power className="h-4 w-4" />
              <span>Start</span>
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid grid-cols-6 md:w-fit">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="databases">Databases</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="backups">Backups</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex flex-col items-center justify-center h-24 gap-2" asChild>
                    <a href={`/servers/${serverId}/terminal`}>
                      <Terminal className="h-6 w-6" />
                      <span>Terminal</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center h-24 gap-2" asChild>
                    <a href={`/servers/${serverId}/files`}>
                      <FileText className="h-6 w-6" />
                      <span>File Manager</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center h-24 gap-2" asChild>
                    <a href={`/servers/${serverId}/databases`}>
                      <Database className="h-6 w-6" />
                      <span>Databases</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center h-24 gap-2" asChild>
                    <a href={`/servers/${serverId}/services`}>
                      <Settings className="h-6 w-6" />
                      <span>Services</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  System Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">OS</dt>
                    <dd className="text-sm">{server.os}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">Kernel</dt>
                    <dd className="text-sm">{server.kernel}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">Instance Type</dt>
                    <dd className="text-sm">{server.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">Uptime</dt>
                    <dd className="text-sm">{server.uptime}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">IP Address</dt>
                    <dd className="text-sm">{server.ip}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Resource Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">CPU</span>
                      <span>{server.cpu}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${server.cpu}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Memory</span>
                      <span>{server.memory}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${server.memory}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Disk</span>
                      <span>{server.disk}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${server.disk}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Resource Usage</h3>
                  <Button variant="link" size="sm" className="text-sm" asChild>
                    <a href={`/servers/${serverId}/monitoring`}>
                      View Detailed Metrics
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Connection Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">Method</dt>
                    <dd className="text-sm">{server.connectionMethod}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">SSH Key</dt>
                    <dd className="text-sm">{server.sshKeyName}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-muted-foreground">Last Connected</dt>
                    <dd className="text-sm">{server.lastConnected}</dd>
                  </div>
                </dl>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="/vps/ssh-keys">
                      Manage SSH Keys
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Databases
                </CardTitle>
                <CardDescription>
                  Databases running on this server
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {server.databases.map((db) => (
                    <div key={db.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Database className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">{db.name}</div>
                          <div className="text-sm text-muted-foreground">{db.type} • {db.size}</div>
                        </div>
                      </div>
                      <Badge
                        variant="default"
                        className="bg-green-500/10 text-green-500 hover:bg-green-500/10"
                      >
                        {db.status}
                      </Badge>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                    <a href={`/servers/${serverId}/databases`}>
                      View All Databases
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Backups
                </CardTitle>
                <CardDescription>
                  Recent server backups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {server.backups.map((backup) => (
                    <div key={backup.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium">{backup.date}</div>
                        <div className="text-sm text-muted-foreground">{backup.type} • {backup.size}</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Restore
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                    <a href={`/servers/${serverId}/backups`}>
                      View All Backups
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="databases" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Databases</CardTitle>
              <CardDescription>
                Manage databases running on this server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Database management content will go here</p>
              <div className="mt-4">
                <Button asChild>
                  <a href={`/servers/${serverId}/databases`}>
                    Go to Database Management
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>File Management</CardTitle>
              <CardDescription>
                Browse and manage files on this server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>File browser content will go here</p>
              <div className="mt-4">
                <Button asChild>
                  <a href={`/servers/${serverId}/files`}>
                    Go to File Manager
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>
                Manage services running on this server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Services management content will go here</p>
              <div className="mt-4">
                <Button asChild>
                  <a href={`/servers/${serverId}/services`}>
                    Go to Services Management
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backups" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Backups</CardTitle>
              <CardDescription>
                Manage server backups and restore points
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Backup management content will go here</p>
              <div className="mt-4">
                <Button asChild>
                  <a href={`/servers/${serverId}/backups`}>
                    Go to Backup Management
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Server Settings</CardTitle>
              <CardDescription>
                Configure server settings and access controls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Server settings content will go here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 