"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VPSCardList } from "./VPSCardList";
import { VPSListView } from "./VPSListView";
import { ServerType, ProjectType, ProviderKey } from "@/app/types/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Folder, 
  FolderPlus, 
  Server, 
  Search, 
  Filter, 
  Grid, 
  List, 
  LayoutGrid, 
  Plus,
  X,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { VPSCard } from "./VPSCard";
import { CreateVPSCard } from "./CreateVPSCard";

// Sample data for projects
const projects: ProjectType[] = [
  {
    id: "project-1",
    name: "E-commerce Platform",
    description: "Main production environment for our online store",
    servers: 4,
    created: "2023-08-15",
    owner: "DevOps Team"
  },
  {
    id: "project-2",
    name: "Analytics Backend",
    description: "Data processing and analytics infrastructure",
    servers: 3,
    created: "2023-09-20",
    owner: "Data Team"
  },
  {
    id: "project-3",
    name: "Development Environment",
    description: "Staging and testing servers",
    servers: 2,
    created: "2023-10-05",
    owner: "Development Team"
  }
];

// Sample data for servers
const servers: ServerType[] = [
  {
    id: "web-server-1",
    name: "web-server-1",
    status: "Running",
    ip: "192.168.1.101",
    region: "US East (N. Virginia)",
    cpu: 4,
    ram: 8,
    disk: 160,
    uptime: "14d 6h 32m",
    provider: "aws",
    os: "Ubuntu 22.04 LTS",
    created: "2023-10-15",
    lastBackup: "2023-11-01",
    projectId: "project-1",
    projectName: "E-commerce Platform",
    usage: {
      cpu: 35,
      ram: 62,
      disk: 48,
      network: {
        in: "1.2 GB",
        out: "3.5 GB"
      }
    }
  },
  {
    id: "db-server-1",
    name: "db-server-1",
    status: "Running",
    ip: "192.168.1.102",
    region: "US East (N. Virginia)",
    cpu: 8,
    ram: 16,
    disk: 500,
    uptime: "21d 12h 45m",
    provider: "aws",
    os: "Ubuntu 22.04 LTS",
    created: "2023-09-10",
    lastBackup: "2023-11-01",
    projectId: "project-1",
    projectName: "E-commerce Platform",
    usage: {
      cpu: 42,
      ram: 58,
      disk: 65,
      network: {
        in: "0.8 GB",
        out: "1.5 GB"
      }
    }
  },
  {
    id: "analytics-1",
    name: "analytics-1",
    status: "Running",
    ip: "10.0.1.15",
    region: "Amsterdam",
    cpu: 4,
    ram: 8,
    disk: 250,
    uptime: "7d 3h 12m",
    provider: "digitalocean",
    os: "Debian 11",
    created: "2023-10-25",
    lastBackup: "2023-10-31",
    projectId: "project-2",
    projectName: "Analytics Backend",
    usage: {
      cpu: 78,
      ram: 45,
      disk: 32,
      network: {
        in: "2.5 GB",
        out: "1.8 GB"
      }
    }
  },
  {
    id: "analytics-2",
    name: "analytics-2",
    status: "Running",
    ip: "10.0.1.16",
    region: "Amsterdam",
    cpu: 4,
    ram: 8,
    disk: 250,
    uptime: "7d 3h 10m",
    provider: "digitalocean",
    os: "Debian 11",
    created: "2023-10-25",
    lastBackup: "2023-10-31",
    projectId: "project-2",
    projectName: "Analytics Backend",
    usage: {
      cpu: 65,
      ram: 40,
      disk: 28,
      network: {
        in: "1.8 GB",
        out: "1.2 GB"
      }
    }
  },
  {
    id: "dev-server-1",
    name: "dev-server-1",
    status: "Running",
    ip: "192.168.1.103",
    region: "US West (Oregon)",
    cpu: 2,
    ram: 4,
    disk: 80,
    uptime: "2d 5h 40m",
    provider: "aws",
    os: "Ubuntu 22.04 LTS",
    created: "2023-10-30",
    lastBackup: "2023-11-01",
    projectId: "project-3",
    projectName: "Development Environment",
    usage: {
      cpu: 25,
      ram: 30,
      disk: 20,
      network: {
        in: "0.4 GB",
        out: "0.6 GB"
      }
    }
  },
  {
    id: "storage-1",
    name: "storage-1",
    status: "Running",
    ip: "192.168.1.105",
    region: "US East (N. Virginia)",
    cpu: 2,
    ram: 4,
    disk: 1000,
    uptime: "30d 2h 15m",
    provider: "aws",
    os: "Ubuntu 22.04 LTS",
    created: "2023-10-01",
    lastBackup: "2023-10-30",
    usage: {
      cpu: 15,
      ram: 30,
      disk: 42,
      network: {
        in: "0.5 GB",
        out: "2.1 GB"
      }
    }
  }
];

export function VPSInstancesContent() {
  const [viewType, setViewType] = useState<"card" | "list">("card");
  const [searchQuery, setSearchQuery] = useState("");
  const [providerFilter, setProviderFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [projectFilter, setProjectFilter] = useState<string>("all");
  
  // Filter servers based on search query and filters
  const filteredServers = useMemo(() => {
    return servers.filter(server => {
      const matchesSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          server.ip.includes(searchQuery) ||
                          (server.projectName && server.projectName.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesProject = projectFilter === "all" || 
                            (projectFilter === "unassigned" && !server.projectId) ||
                            server.projectId === projectFilter;
      
      const matchesProvider = providerFilter === "all" || server.provider === providerFilter;
      
      const matchesStatus = statusFilter === "all" || 
                          (statusFilter === "running" && server.status === "Running") ||
                          (statusFilter === "stopped" && server.status !== "Running");
      
      return matchesSearch && matchesProject && matchesProvider && matchesStatus;
    });
  }, [searchQuery, projectFilter, providerFilter, statusFilter, servers]);

  // Group servers by project
  const serversByProject = useMemo(() => {
    return projects.map(project => {
      return {
        project,
        servers: filteredServers.filter(server => server.projectId === project.id)
      };
    });
  }, [filteredServers]);

  // Get unassigned servers
  const unassignedServers = useMemo(() => {
    return filteredServers.filter(server => !server.projectId);
  }, [filteredServers]);

  // Count active filters
  const activeFilterCount = [
    projectFilter !== "all" ? 1 : 0,
    providerFilter !== "all" ? 1 : 0,
    statusFilter !== "all" ? 1 : 0
  ].reduce((a, b) => a + b, 0);

  // Reset all filters
  const resetFilters = () => {
    setProjectFilter("all");
    setProviderFilter("all");
    setStatusFilter("all");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search" 
            placeholder="Search servers..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 flex-shrink-0">
          <Select value={providerFilter} onValueChange={setProviderFilter}>
            <SelectTrigger className="w-[130px] h-10">
              <SelectValue placeholder="Provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              <SelectItem value="aws">AWS</SelectItem>
              <SelectItem value="digitalocean">DigitalOcean</SelectItem>
              <SelectItem value="linode">Linode</SelectItem>
              <SelectItem value="gcp">Google Cloud</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px] h-10">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Running">Running</SelectItem>
              <SelectItem value="Stopped">Stopped</SelectItem>
              <SelectItem value="Warning">Warning</SelectItem>
              <SelectItem value="Error">Error</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="border rounded-md p-2 flex">
            <Button
              variant={viewType === "card" ? "default" : "ghost"}
              size="sm"
              className="h-6 px-2"
              onClick={() => setViewType("card")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewType === "list" ? "default" : "ghost"}
              size="sm"
              className="h-6 px-2"
              onClick={() => setViewType("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Active filters */}
      {(searchQuery || providerFilter !== "all" || statusFilter !== "all" || projectFilter !== "all") && (
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Search: {searchQuery}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          
          {providerFilter !== "all" && (
            <Badge variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Provider: {providerFilter}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setProviderFilter("all")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          
          {statusFilter !== "all" && (
            <Badge variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Status: {statusFilter}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setStatusFilter("all")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          
          {projectFilter !== "all" && (
            <Badge variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Project: {projects.find(p => p.id === projectFilter)?.name || projectFilter}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setProjectFilter("all")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}

      {filteredServers.length === 0 ? (
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-full bg-muted/50 mb-4">
              <Filter className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No servers found</h3>
            <p className="text-muted-foreground max-w-md">
              {searchQuery || providerFilter !== "all" || statusFilter !== "all" || projectFilter !== "all"
                ? "No servers match your current filters. Try adjusting your search or filter criteria."
                : "You haven't created any servers yet. Get started by creating your first server."}
            </p>
            {(searchQuery || providerFilter !== "all" || statusFilter !== "all" || projectFilter !== "all") ? (
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchQuery("");
                setProviderFilter("all");
                setStatusFilter("all");
                setProjectFilter("all");
              }}>
                Clear Filters
              </Button>
            ) : (
              <Button className="mt-4">
                Create Your First Server
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <>
          {filteredServers.length > 0 && (
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Showing {filteredServers.length} servers</span>
              {(searchQuery || providerFilter !== "all" || statusFilter !== "all" || projectFilter !== "all") && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-2 h-7 text-xs"
                  onClick={() => {
                    setSearchQuery("");
                    setProviderFilter("all");
                    setStatusFilter("all");
                    setProjectFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}
          
          {viewType === "card" ? (
            <VPSCardList servers={filteredServers} />
          ) : (
            <VPSListView servers={filteredServers} />
          )}
        </>
      )}
    </div>
  );
} 