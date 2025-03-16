"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Server, 
  Play, 
  Square, 
  RotateCcw, 
  Plus, 
  RefreshCw, 
  Search,
  MoreHorizontal,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Settings,
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Sample server data for demonstration
const getServerById = (id: string) => {
  return {
    id,
    name: "Production API Server",
    provider: "aws",
    region: "us-east-1",
    status: "online",
    ip: "54.23.212.100",
  };
};

// Sample services data
const services = [
  {
    id: "nginx",
    name: "Nginx",
    status: "running",
    type: "web-server",
    port: 80,
    autostart: true,
    uptime: "45 days, 7 hours",
    memory: "128 MB",
    cpu: "2.5%",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    status: "running",
    type: "database",
    port: 5432,
    autostart: true,
    uptime: "45 days, 7 hours",
    memory: "512 MB",
    cpu: "4.2%",
  },
  {
    id: "redis",
    name: "Redis",
    status: "running",
    type: "cache",
    port: 6379,
    autostart: true,
    uptime: "45 days, 7 hours",
    memory: "256 MB",
    cpu: "1.8%",
  },
  {
    id: "node-app",
    name: "Node.js App",
    status: "running",
    type: "application",
    port: 3000,
    autostart: true,
    uptime: "12 days, 3 hours",
    memory: "384 MB",
    cpu: "8.5%",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    status: "stopped",
    type: "database",
    port: 27017,
    autostart: false,
    uptime: "0",
    memory: "0 MB",
    cpu: "0%",
  },
];

export default function ServerServicesPage() {
  const params = useParams();
  const serverId = params.id as string;
  const server = getServerById(serverId);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddServiceDialogOpen, setIsAddServiceDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceAction = (serviceId: string, action: 'start' | 'stop' | 'restart') => {
    setIsLoading({ ...isLoading, [serviceId]: true });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading({ ...isLoading, [serviceId]: false });
      // In a real app, you would update the service status here
    }, 1500);
  };

  const handleAddService = () => {
    // In a real app, this would add a new service
    setIsAddServiceDialogOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Settings className="h-6 w-6" />
            Services
          </h1>
          <p className="text-muted-foreground">
            Manage services on {server.name} ({server.ip})
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-2" onClick={() => setIsAddServiceDialogOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Add Service</span>
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {filteredServices.filter(s => s.status === "running").length} Running
              </Badge>
              <Badge variant="outline" className="text-sm">
                {filteredServices.filter(s => s.status === "stopped").length} Stopped
              </Badge>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
          <CardDescription>
            Manage services running on this server
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Port</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Memory</TableHead>
                <TableHead>CPU</TableHead>
                <TableHead>Autostart</TableHead>
                <TableHead className="w-[150px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.type}</TableCell>
                  <TableCell>{service.port}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {service.status === "running" ? (
                        <>
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span>Running</span>
                        </>
                      ) : (
                        <>
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <span>Stopped</span>
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{service.memory}</TableCell>
                  <TableCell>{service.cpu}</TableCell>
                  <TableCell>
                    <Switch checked={service.autostart} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {service.status === "running" ? (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleServiceAction(service.id, 'stop')}
                          disabled={isLoading[service.id]}
                        >
                          {isLoading[service.id] ? (
                            <RefreshCw className="h-4 w-4 animate-spin" />
                          ) : (
                            <Square className="h-4 w-4" />
                          )}
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleServiceAction(service.id, 'start')}
                          disabled={isLoading[service.id]}
                        >
                          {isLoading[service.id] ? (
                            <RefreshCw className="h-4 w-4 animate-spin" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleServiceAction(service.id, 'restart')}
                        disabled={isLoading[service.id] || service.status !== "running"}
                      >
                        {isLoading[service.id] ? (
                          <RefreshCw className="h-4 w-4 animate-spin" />
                        ) : (
                          <RotateCcw className="h-4 w-4" />
                        )}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Logs</DropdownMenuItem>
                          <DropdownMenuItem>Edit Configuration</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredServices.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No services found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isAddServiceDialogOpen} onOpenChange={setIsAddServiceDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>
              Configure a new service to run on this server
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="service-name">Service Name</Label>
              <Input id="service-name" placeholder="e.g. Nginx, MongoDB" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service-type">Service Type</Label>
              <select id="service-type" className="w-full p-2 border rounded-md">
                <option value="web-server">Web Server</option>
                <option value="database">Database</option>
                <option value="application">Application</option>
                <option value="cache">Cache</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="service-port">Port</Label>
                <Input id="service-port" type="number" placeholder="e.g. 80, 3000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service-autostart">Autostart</Label>
                <div className="flex items-center h-10">
                  <Switch id="service-autostart" defaultChecked />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service-command">Start Command</Label>
              <Input id="service-command" placeholder="e.g. nginx -c /etc/nginx/nginx.conf" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddServiceDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddService}>
              Add Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 