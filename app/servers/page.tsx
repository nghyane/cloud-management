import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Cloud, Database, HardDrive, Terminal, Shield, Activity, Plus } from "lucide-react";

// Sample data for demonstration
const servers = [
  {
    id: "server-1",
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
  },
  {
    id: "server-2",
    name: "Database Server",
    provider: "DigitalOcean",
    region: "nyc3",
    status: "online",
    type: "Premium Intel",
    ip: "142.93.180.24",
    cpu: 42,
    memory: 58,
    disk: 72,
    services: ["mysql", "redis"],
    lastConnected: "5 minutes ago",
  },
  {
    id: "server-3",
    name: "Staging Environment",
    provider: "GCP",
    region: "us-central1",
    status: "offline",
    type: "e2-standard-4",
    ip: "35.192.45.12",
    cpu: 0,
    memory: 0,
    disk: 65,
    services: ["nginx", "node", "mongodb"],
    lastConnected: "2 days ago",
  },
  {
    id: "server-4",
    name: "File Storage Server",
    provider: "Linode",
    region: "ap-south",
    status: "maintenance",
    type: "Dedicated 32GB",
    ip: "172.105.54.89",
    cpu: 12,
    memory: 24,
    disk: 88,
    services: ["minio", "nginx"],
    lastConnected: "1 hour ago",
  },
];

export default function ServersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Servers</h1>
          <p className="text-muted-foreground">
            Manage all your servers across different providers
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span>Add Server</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Servers</TabsTrigger>
          <TabsTrigger value="aws">AWS</TabsTrigger>
          <TabsTrigger value="digitalocean">DigitalOcean</TabsTrigger>
          <TabsTrigger value="gcp">GCP</TabsTrigger>
          <TabsTrigger value="linode">Linode</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servers.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        </TabsContent>
        {/* Other tabs content would filter servers by provider */}
      </Tabs>
    </div>
  );
}

function ServerCard({ server }: { server: any }) {
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-red-500",
    maintenance: "bg-yellow-500",
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              {server.name}
            </CardTitle>
            <CardDescription>
              {server.provider} • {server.region}
            </CardDescription>
          </div>
          <Badge
            variant={
              server.status === "online"
                ? "default"
                : server.status === "offline"
                ? "destructive"
                : "secondary"
            }
            className={
              server.status === "online"
                ? "bg-green-500/10 text-green-500 hover:bg-green-500/10"
                : server.status === "offline"
                ? "bg-red-500/10 text-red-500 hover:bg-red-500/10"
                : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10"
            }
          >
            {server.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col">
              <span className="text-muted-foreground">IP Address</span>
              <span className="font-medium">{server.ip}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Instance Type</span>
              <span className="font-medium">{server.type}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">CPU</span>
              <span>{server.cpu}%</span>
            </div>
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
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
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
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
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${server.disk}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-xs text-muted-foreground">
          Last connected: {server.lastConnected}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <a href={`/servers/${server.id}`}>
              <Activity className="h-4 w-4" />
              <span className="sr-only">Details</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`/servers/${server.id}/terminal`}>
              <Terminal className="h-4 w-4" />
              <span className="sr-only">Terminal</span>
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
} 