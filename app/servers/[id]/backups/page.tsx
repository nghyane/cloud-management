"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  HardDrive, 
  Plus, 
  RefreshCw, 
  RotateCcw, 
  Download, 
  Trash2, 
  Server,
  Calendar,
  Clock,
  FileArchive,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  MoreHorizontal
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Sample server data
const getServerById = (id: string) => {
  return {
    id,
    name: "API Server",
    provider: "aws",
    region: "us-east-1",
    status: "online",
    ip: "54.23.212.100",
  };
};

// Sample backup data for a specific server
const getServerBackups = (serverId: string) => [
  {
    id: "backup-1",
    serverId,
    type: "automatic",
    status: "completed",
    size: "4.2 GB",
    date: "2023-12-15 14:30",
    retention: "7 days",
    description: "Daily automatic backup"
  },
  {
    id: "backup-4",
    serverId,
    type: "automatic",
    status: "completed",
    size: "4.1 GB",
    date: "2023-12-14 14:30",
    retention: "7 days",
    description: "Daily automatic backup"
  },
  {
    id: "backup-7",
    serverId,
    type: "manual",
    status: "completed",
    size: "4.3 GB",
    date: "2023-12-13 10:15",
    retention: "30 days",
    description: "Pre-update backup"
  },
  {
    id: "backup-10",
    serverId,
    type: "automatic",
    status: "completed",
    size: "4.0 GB",
    date: "2023-12-12 14:30",
    retention: "7 days",
    description: "Daily automatic backup"
  }
];

export default function ServerBackupsPage() {
  const params = useParams();
  const serverId = params.id as string;
  const server = getServerById(serverId);
  const backups = getServerBackups(serverId);
  
  const [isCreateBackupDialogOpen, setIsCreateBackupDialogOpen] = useState(false);
  const [backupDescription, setBackupDescription] = useState("");
  const [backupRetention, setBackupRetention] = useState("7");
  const [isRestoreDialogOpen, setIsRestoreDialogOpen] = useState(false);
  const [selectedBackupId, setSelectedBackupId] = useState("");
  
  const handleCreateBackup = () => {
    // In a real app, this would create a new backup
    setIsCreateBackupDialogOpen(false);
    setBackupDescription("");
    setBackupRetention("7");
  };
  
  const handleRestoreBackup = () => {
    // In a real app, this would restore the selected backup
    setIsRestoreDialogOpen(false);
    setSelectedBackupId("");
  };
  
  const initiateRestore = (backupId: string) => {
    setSelectedBackupId(backupId);
    setIsRestoreDialogOpen(true);
  };
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Button variant="ghost" size="sm" className="h-8 gap-1" asChild>
              <a href={`/servers/${serverId}`}>
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Server</span>
              </a>
            </Button>
          </div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <HardDrive className="h-6 w-6" />
            {server.name} Backups
          </h1>
          <p className="text-muted-foreground">
            Manage and restore backups for {server.name} ({server.ip})
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
        <CardHeader>
          <CardTitle>Backup Configuration</CardTitle>
          <CardDescription>
            Current backup settings for this server
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Automatic Backups</h3>
              <Badge variant="default">Enabled</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Daily backups at 2:30 AM UTC
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Default Retention</h3>
              <p className="text-sm">7 days</p>
              <p className="text-sm text-muted-foreground mt-2">
                Older backups are automatically deleted
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Storage Used</h3>
              <p className="text-sm">16.6 GB</p>
              <p className="text-sm text-muted-foreground mt-2">
                4 backups stored
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Edit Configuration
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Backup History</CardTitle>
          <CardDescription>
            View and manage all backups for {server.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Retention</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {backups.map(backup => (
                <TableRow key={backup.id}>
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
                  <TableCell>{backup.description}</TableCell>
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
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        disabled={backup.status !== "completed"}
                        onClick={() => initiateRestore(backup.id)}
                      >
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
      
      {/* Create Backup Dialog */}
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
              <Select value={serverId} onValueChange={(value) => {
                // Handle server selection
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a server" />
                </SelectTrigger>
                <SelectContent>
                  {/* Add server options here */}
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
            <Button onClick={handleCreateBackup}>
              Create Backup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Restore Backup Dialog */}
      <Dialog open={isRestoreDialogOpen} onOpenChange={setIsRestoreDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Restore Backup</DialogTitle>
            <DialogDescription>
              Are you sure you want to restore this backup?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRestoreDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleRestoreBackup}>
              Restore
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 