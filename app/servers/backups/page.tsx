"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  HardDrive, 
  Plus, 
  RefreshCw, 
  Search, 
  MoreHorizontal, 
  RotateCcw, 
  Download, 
  Trash2, 
  Server,
  Calendar,
  Clock,
  FileArchive,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Sample backup data
const backups = [
  {
    id: "backup-1",
    serverId: "server-1",
    serverName: "API Server",
    type: "automatic",
    status: "completed",
    size: "4.2 GB",
    date: "2023-12-15 14:30",
    retention: "7 days",
    description: "Daily automatic backup"
  },
  {
    id: "backup-2",
    serverId: "server-2",
    serverName: "Database Server",
    type: "manual",
    status: "completed",
    size: "12.8 GB",
    date: "2023-12-14 09:15",
    retention: "30 days",
    description: "Pre-deployment backup"
  },
  {
    id: "backup-3",
    serverId: "server-3",
    serverName: "Web Server",
    type: "automatic",
    status: "in-progress",
    size: "2.1 GB",
    date: "2023-12-15 16:45",
    retention: "7 days",
    description: "Daily automatic backup"
  },
  {
    id: "backup-4",
    serverId: "server-1",
    serverName: "API Server",
    type: "automatic",
    status: "completed",
    size: "4.1 GB",
    date: "2023-12-14 14:30",
    retention: "7 days",
    description: "Daily automatic backup"
  },
  {
    id: "backup-5",
    serverId: "server-2",
    serverName: "Database Server",
    type: "automatic",
    status: "completed",
    size: "12.5 GB",
    date: "2023-12-13 14:30",
    retention: "7 days",
    description: "Daily automatic backup"
  },
  {
    id: "backup-6",
    serverId: "server-3",
    serverName: "Web Server",
    type: "manual",
    status: "failed",
    size: "0 GB",
    date: "2023-12-12 11:20",
    retention: "30 days",
    description: "Manual backup attempt"
  }
];

// Sample servers data
const servers = [
  {
    id: "server-1",
    name: "API Server",
    provider: "aws",
    region: "us-east-1",
    status: "online"
  },
  {
    id: "server-2",
    name: "Database Server",
    provider: "digitalocean",
    region: "nyc1",
    status: "online"
  },
  {
    id: "server-3",
    name: "Web Server",
    provider: "gcp",
    region: "us-central1",
    status: "maintenance"
  }
];

export default function ServerBackupsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isCreateBackupDialogOpen, setIsCreateBackupDialogOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState("");
  const [backupDescription, setBackupDescription] = useState("");
  const [backupRetention, setBackupRetention] = useState("7");
  
  const filteredBackups = backups.filter(backup => {
    // Filter by search query
    const matchesSearch = 
      backup.serverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      backup.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tab
    const matchesTab = 
      activeTab === "all" || 
      (activeTab === "automatic" && backup.type === "automatic") ||
      (activeTab === "manual" && backup.type === "manual");
    
    return matchesSearch && matchesTab;
  });
  
  const handleCreateBackup = () => {
    // In a real app, this would create a new backup
    setIsCreateBackupDialogOpen(false);
    setSelectedServer("");
    setBackupDescription("");
    setBackupRetention("7");
  };
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <HardDrive className="h-6 w-6" />
            Server Backups
          </h1>
          <p className="text-muted-foreground">
            Manage and restore backups for all your servers
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-2" onClick={() => setIsCreateBackupDialogOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Create Backup</span>
          </Button>
        </div>
      </div>
      
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search backups..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="automatic">Automatic</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Backup History</CardTitle>
          <CardDescription>
            View and manage all server backups
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Server</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Retention</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBackups.map(backup => (
                <TableRow key={backup.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-muted-foreground" />
                      <span>{backup.serverName}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{backup.date.split(' ')[0]}</span>
                      <span className="text-xs text-muted-foreground">{backup.date.split(' ')[1]}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {backup.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{backup.size}</TableCell>
                  <TableCell>{backup.retention}</TableCell>
                  <TableCell>
                    <Badge variant={
                      backup.status === "completed" ? "default" : 
                      backup.status === "in-progress" ? "secondary" : 
                      "destructive"
                    }>
                      {backup.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" disabled={backup.status !== "completed"}>
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" disabled={backup.status !== "completed"}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Change Retention</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete Backup</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Dialog open={isCreateBackupDialogOpen} onOpenChange={setIsCreateBackupDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Backup</DialogTitle>
            <DialogDescription>
              Create a manual backup of your server. This process may take several minutes depending on the server size.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="server">Server</Label>
              <Select value={selectedServer} onValueChange={setSelectedServer}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a server" />
                </SelectTrigger>
                <SelectContent>
                  {servers.map(server => (
                    <SelectItem key={server.id} value={server.id}>
                      {server.name} ({server.provider})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Input
                id="description"
                placeholder="e.g., Pre-deployment backup"
                value={backupDescription}
                onChange={(e) => setBackupDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="retention">Retention Period</Label>
              <Select value={backupRetention} onValueChange={setBackupRetention}>
                <SelectTrigger>
                  <SelectValue placeholder="Select retention period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 day</SelectItem>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="365">1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateBackupDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateBackup} disabled={!selectedServer}>
              Create Backup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 