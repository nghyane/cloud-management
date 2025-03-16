"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Server, 
  Database, 
  HardDrive, 
  AlertTriangle, 
  Clock,
  ArrowUpRight,
  BarChart3,
  Shield,
  Settings,
  Terminal,
  FileText,
  RefreshCw,
  Plus,
  Key,
  RotateCcw,
  Cpu,
  Disc,
  Network,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MemoryStick
} from "lucide-react";

// Sample server data
const servers = [
  {
    id: "server-1",
    name: "API Server",
    provider: "aws",
    region: "us-east-1",
    status: "online",
    type: "t3.medium",
    ip: "54.23.212.100",
    cpu: 42,
    memory: 68,
    disk: 76,
    services: ["nginx", "node", "postgres"],
    lastConnected: "2 minutes ago",
    uptime: "15 days, 7 hours"
  },
  {
    id: "server-2",
    name: "Database Server",
    provider: "digitalocean",
    region: "nyc1",
    status: "online",
    type: "standard-2",
    ip: "142.93.15.32",
    cpu: 28,
    memory: 45,
    disk: 62,
    services: ["mysql", "redis"],
    lastConnected: "5 minutes ago",
    uptime: "23 days, 12 hours"
  },
  {
    id: "server-3",
    name: "Web Server",
    provider: "gcp",
    region: "us-central1",
    status: "maintenance",
    type: "e2-standard-2",
    ip: "35.184.23.45",
    cpu: 12,
    memory: 30,
    disk: 48,
    services: ["nginx", "php-fpm"],
    lastConnected: "20 minutes ago",
    uptime: "5 days, 3 hours"
  }
];

// Sample alerts data
const alerts = [
  {
    id: "alert-1",
    severity: "critical",
    server: "Database Server",
    message: "High CPU usage (92%) for over 15 minutes",
    time: "10 minutes ago"
  },
  {
    id: "alert-2",
    severity: "warning",
    server: "API Server",
    message: "Disk usage above 75% threshold",
    time: "30 minutes ago"
  },
  {
    id: "alert-3",
    severity: "info",
    server: "Web Server",
    message: "Scheduled maintenance in progress",
    time: "1 hour ago"
  }
];

// Sample recent activities
const recentActivities = [
  {
    id: "activity-1",
    type: "backup",
    server: "API Server",
    description: "Automatic backup completed",
    time: "2 hours ago",
    status: "success"
  },
  {
    id: "activity-2",
    type: "security",
    server: "Database Server",
    description: "SSH login from new IP address",
    time: "3 hours ago",
    status: "warning"
  },
  {
    id: "activity-3",
    type: "system",
    server: "Web Server",
    description: "System updates installed",
    time: "5 hours ago",
    status: "success"
  },
  {
    id: "activity-4",
    type: "resource",
    server: "API Server",
    description: "Memory usage spike detected",
    time: "6 hours ago",
    status: "warning"
  }
];

// Calculate overall system health
const calculateSystemHealth = () => {
  const onlineServers = servers.filter(s => s.status === "online").length;
  const serverHealth = (onlineServers / servers.length) * 100;
  
  const avgCpu = servers.reduce((acc, server) => acc + server.cpu, 0) / servers.length;
  const avgMemory = servers.reduce((acc, server) => acc + server.memory, 0) / servers.length;
  const avgDisk = servers.reduce((acc, server) => acc + server.disk, 0) / servers.length;
  
  const resourceHealth = 100 - ((avgCpu + avgMemory + avgDisk) / 3);
  
  const criticalAlerts = alerts.filter(a => a.severity === "critical").length;
  const warningAlerts = alerts.filter(a => a.severity === "warning").length;
  const alertsHealth = 100 - (criticalAlerts * 20 + warningAlerts * 5);
  
  const overallHealth = (serverHealth * 0.4) + (resourceHealth * 0.4) + (alertsHealth * 0.2);
  
  return {
    score: Math.round(overallHealth),
    status: overallHealth > 80 ? "healthy" : overallHealth > 60 ? "warning" : "critical"
  };
};

const systemHealth = calculateSystemHealth();

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      {/* Header with system health overview */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Server Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and manage your server infrastructure
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="default" size="sm" className="h-9 gap-1" asChild>
            <a href="/servers/connect">
              <Plus className="h-4 w-4" />
              <span>Connect Server</span>
            </a>
          </Button>
        </div>
      </div>
      
      {/* System health card */}
      <Card className="overflow-hidden">
        <div className={`h-2 w-full ${
          systemHealth.status === "healthy" ? "bg-green-500" : 
          systemHealth.status === "warning" ? "bg-yellow-500" : 
          "bg-red-500"
        }`}></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">System Health</h2>
                {systemHealth.status === "healthy" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {systemHealth.status === "warning" && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                {systemHealth.status === "critical" && <XCircle className="h-5 w-5 text-red-500" />}
              </div>
              <p className="text-muted-foreground mb-4">
                {systemHealth.status === "healthy" ? "All systems operating normally" : 
                 systemHealth.status === "warning" ? "Some issues require attention" : 
                 "Critical issues detected"}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Servers</p>
                  <p className="text-xl font-medium">{servers.filter(s => s.status === "online").length}/{servers.length} online</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg CPU</p>
                  <p className="text-xl font-medium">{Math.round(servers.reduce((acc, server) => acc + server.cpu, 0) / servers.length)}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Memory</p>
                  <p className="text-xl font-medium">{Math.round(servers.reduce((acc, server) => acc + server.memory, 0) / servers.length)}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Alerts</p>
                  <p className="text-xl font-medium">{alerts.length}</p>
                </div>
              </div>
            </div>
            <div className="w-32 h-32 relative flex items-center justify-center rounded-full border-8 border-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">{systemHealth.score}</span>
              </div>
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeDasharray="251.2" 
                  strokeDashoffset={251.2 - (251.2 * systemHealth.score / 100)}
                  className={
                    systemHealth.status === "healthy" ? "text-green-500" : 
                    systemHealth.status === "warning" ? "text-yellow-500" : 
                    "text-red-500"
                  }
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Main content with tabs */}
      <Tabs defaultValue="servers" className="space-y-6">
        <TabsList className="grid grid-cols-3 md:w-[400px]">
          <TabsTrigger value="servers">Servers</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        
        {/* Servers Tab */}
        <TabsContent value="servers" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servers.map(server => (
              <Card key={server.id} className="overflow-hidden">
                <div className={`h-1 w-full ${
                  server.status === "online" ? "bg-green-500" : 
                  server.status === "maintenance" ? "bg-yellow-500" : 
                  "bg-red-500"
                }`}></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Server className="h-4 w-4" />
                      {server.name}
                    </CardTitle>
                    <Badge variant={
                      server.status === "online" ? "default" : 
                      server.status === "maintenance" ? "outline" : 
                      "destructive"
                    }>
                      {server.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    {server.ip} • {server.type} • {server.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <div className="flex items-center gap-1">
                          <Cpu className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>CPU</span>
                        </div>
                        <span className={`font-medium ${
                          server.cpu > 80 ? "text-red-500" : 
                          server.cpu > 60 ? "text-yellow-500" : 
                          ""
                        }`}>{server.cpu}%</span>
                      </div>
                      <Progress value={server.cpu} className={`h-1.5 ${
                        server.cpu > 80 ? "bg-red-500" : 
                        server.cpu > 60 ? "bg-yellow-500" : 
                        ""
                      }`} />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <div className="flex items-center gap-1">
                          <MemoryStick className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>Memory</span>
                        </div>
                        <span className={`font-medium ${
                          server.memory > 80 ? "text-red-500" : 
                          server.memory > 60 ? "text-yellow-500" : 
                          ""
                        }`}>{server.memory}%</span>
                      </div>
                      <Progress value={server.memory} className={`h-1.5 ${
                        server.memory > 80 ? "bg-red-500" : 
                        server.memory > 60 ? "bg-yellow-500" : 
                        ""
                      }`} />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <div className="flex items-center gap-1">
                          <Disc className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>Disk</span>
                        </div>
                        <span className={`font-medium ${
                          server.disk > 80 ? "text-red-500" : 
                          server.disk > 60 ? "text-yellow-500" : 
                          ""
                        }`}>{server.disk}%</span>
                      </div>
                      <Progress value={server.disk} className={`h-1.5 ${
                        server.disk > 80 ? "bg-red-500" : 
                        server.disk > 60 ? "bg-yellow-500" : 
                        ""
                      }`} />
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Uptime:</span>
                      <span className="ml-1 font-medium">{server.uptime}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Region:</span>
                      <span className="ml-1 font-medium">{server.region}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Services:</span>
                      <span className="ml-1 font-medium">{server.services.join(", ")}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={`/servers/${server.id}`}>
                      Manage
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={`/servers/${server.id}/terminal`}>
                      <Terminal className="h-3.5 w-3.5 mr-1" />
                      Terminal
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {/* Add Server Card */}
            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <div className="rounded-full bg-muted w-12 h-12 flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Add New Server</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Connect to an existing server or create a new one
              </p>
              <Button asChild>
                <a href="/servers/connect">Connect Server</a>
              </Button>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <a href="/servers">
                View All Servers
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </TabsContent>
        
        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Alerts</CardTitle>
              <CardDescription>
                Issues that require your attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.length > 0 ? (
                  alerts.map(alert => (
                    <div key={alert.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full ${
                        alert.severity === "critical" ? "bg-red-100 text-red-700" :
                        alert.severity === "warning" ? "bg-yellow-100 text-yellow-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {alert.severity === "critical" && <AlertTriangle className="h-4 w-4" />}
                        {alert.severity === "warning" && <AlertCircle className="h-4 w-4" />}
                        {alert.severity === "info" && <Activity className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">
                            {alert.server}
                          </h4>
                          <Badge variant={
                            alert.severity === "critical" ? "destructive" :
                            alert.severity === "warning" ? "outline" :
                            "secondary"
                          }>
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm">{alert.message}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{alert.time}</span>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Acknowledge</Button>
                            <Button variant="outline" size="sm">Investigate</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="text-lg font-medium mb-1">All Clear</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      No active alerts at the moment
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Alert History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest events across your servers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full ${
                      activity.status === "success" ? "bg-green-100 text-green-700" :
                      activity.status === "warning" ? "bg-yellow-100 text-yellow-700" :
                      activity.status === "error" ? "bg-red-100 text-red-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {activity.type === "backup" && <HardDrive className="h-4 w-4" />}
                      {activity.type === "security" && <Shield className="h-4 w-4" />}
                      {activity.type === "system" && <Settings className="h-4 w-4" />}
                      {activity.type === "resource" && <Activity className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">
                          {activity.server}
                        </h4>
                        <Badge variant={
                          activity.status === "success" ? "default" :
                          activity.status === "warning" ? "outline" :
                          activity.status === "error" ? "destructive" :
                          "secondary"
                        }>
                          {activity.type}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm">{activity.description}</p>
                      <div className="mt-2 flex items-center">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2" asChild>
            <a href="/servers">
              <Server className="h-5 w-5" />
              <span>All Servers</span>
            </a>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2" asChild>
            <a href="/servers/backups">
              <HardDrive className="h-5 w-5" />
              <span>Backups</span>
            </a>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2" asChild>
            <a href="/security/ssh-keys">
              <Key className="h-5 w-5" />
              <span>SSH Keys</span>
            </a>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2" asChild>
            <a href="/servers/monitoring">
              <Activity className="h-5 w-5" />
              <span>Monitoring</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
