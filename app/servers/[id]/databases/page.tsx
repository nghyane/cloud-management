"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { 
  Database, 
  Plus, 
  RefreshCw, 
  Search, 
  MoreHorizontal, 
  Play, 
  Download, 
  Upload, 
  Trash2, 
  Save,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

// Sample server data for demonstration
const getServerById = (id: string) => {
  return {
    id,
    name: "Production API Server",
    provider: "AWS",
    region: "us-east-1",
    status: "online",
    ip: "54.23.212.100",
  };
};

// Sample database data
const databases = [
  {
    id: "db1",
    name: "users_db",
    type: "PostgreSQL",
    version: "14.5",
    size: "12.4 GB",
    tables: 24,
    status: "healthy",
    lastBackup: "2023-06-15 14:32",
  },
  {
    id: "db2",
    name: "logs_db",
    type: "PostgreSQL",
    version: "14.5",
    size: "45.7 GB",
    tables: 8,
    status: "healthy",
    lastBackup: "2023-06-14 08:15",
  },
  {
    id: "db3",
    name: "analytics",
    type: "MySQL",
    version: "8.0",
    size: "78.2 GB",
    tables: 32,
    status: "warning",
    lastBackup: "2023-06-10 22:45",
  },
  {
    id: "db4",
    name: "cache_db",
    type: "Redis",
    version: "7.0",
    size: "2.1 GB",
    tables: 0,
    status: "healthy",
    lastBackup: "2023-06-12 16:30",
  },
  {
    id: "db5",
    name: "documents",
    type: "MongoDB",
    version: "6.0",
    size: "34.8 GB",
    tables: 12,
    status: "healthy",
    lastBackup: "2023-06-13 11:20",
  },
];

// Sample backup data
const backups = [
  {
    id: "bkp1",
    database: "users_db",
    date: "2023-06-15 14:32",
    size: "11.8 GB",
    status: "completed",
    type: "Full",
  },
  {
    id: "bkp2",
    database: "logs_db",
    date: "2023-06-14 08:15",
    size: "42.3 GB",
    status: "completed",
    type: "Full",
  },
  {
    id: "bkp3",
    database: "analytics",
    date: "2023-06-10 22:45",
    size: "75.1 GB",
    status: "completed",
    type: "Full",
  },
  {
    id: "bkp4",
    database: "users_db",
    date: "2023-06-08 14:32",
    size: "11.2 GB",
    status: "completed",
    type: "Full",
  },
  {
    id: "bkp5",
    database: "analytics",
    date: "2023-06-16 08:30",
    size: "0",
    status: "in_progress",
    type: "Full",
  },
];

export default function ServerDatabasesPage() {
  const params = useParams();
  const serverId = params.id as string;
  const server = getServerById(serverId);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("databases");
  const [sqlQuery, setSqlQuery] = useState("SELECT * FROM users LIMIT 10;");
  const [isQueryDialogOpen, setIsQueryDialogOpen] = useState(false);
  const [selectedDatabase, setSelectedDatabase] = useState("");
  const [isBackupDialogOpen, setIsBackupDialogOpen] = useState(false);

  const filteredDatabases = databases.filter(db => 
    db.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    db.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBackups = backups.filter(backup => 
    backup.database.toLowerCase().includes(searchQuery.toLowerCase()) ||
    backup.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRunQuery = () => {
    // In a real app, this would execute the SQL query
    console.log(`Running query on ${selectedDatabase}: ${sqlQuery}`);
    setIsQueryDialogOpen(false);
  };

  const handleCreateBackup = () => {
    // In a real app, this would initiate a backup
    console.log(`Creating backup for ${selectedDatabase}`);
    setIsBackupDialogOpen(false);
  };

  const openQueryDialog = (dbName: string) => {
    setSelectedDatabase(dbName);
    setIsQueryDialogOpen(true);
  };

  const openBackupDialog = (dbName: string) => {
    setSelectedDatabase(dbName);
    setIsBackupDialogOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Database className="h-6 w-6" />
            Database Management
          </h1>
          <p className="text-muted-foreground">
            Manage databases on {server.name} ({server.ip})
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Add Database</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="databases">Databases</TabsTrigger>
                <TabsTrigger value="backups">Backups</TabsTrigger>
                <TabsTrigger value="query">Query Tool</TabsTrigger>
              </TabsList>
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <TabsContent value="databases">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Databases</CardTitle>
                  <CardDescription>
                    Manage databases running on this server
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Version</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Tables</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Backup</TableHead>
                        <TableHead className="w-12"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDatabases.map((db) => (
                        <TableRow key={db.id} className="group">
                          <TableCell className="font-medium">{db.name}</TableCell>
                          <TableCell>{db.type}</TableCell>
                          <TableCell>{db.version}</TableCell>
                          <TableCell>{db.size}</TableCell>
                          <TableCell>{db.tables}</TableCell>
                          <TableCell>
                            <Badge
                              variant="default"
                              className={
                                db.status === "healthy"
                                  ? "bg-green-500/10 text-green-500 hover:bg-green-500/10"
                                  : db.status === "warning"
                                  ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10"
                                  : "bg-red-500/10 text-red-500 hover:bg-red-500/10"
                              }
                            >
                              {db.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{db.lastBackup}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="flex items-center gap-2" onClick={() => openQueryDialog(db.name)}>
                                  <Play className="h-4 w-4" />
                                  <span>Query</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2" onClick={() => openBackupDialog(db.name)}>
                                  <Save className="h-4 w-4" />
                                  <span>Backup</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2">
                                  <Download className="h-4 w-4" />
                                  <span>Export</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                      {filteredDatabases.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                            No databases found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backups">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Database Backups</CardTitle>
                  <CardDescription>
                    Manage and restore database backups
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Database</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-12"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBackups.map((backup) => (
                        <TableRow key={backup.id} className="group">
                          <TableCell className="font-medium">{backup.database}</TableCell>
                          <TableCell>{backup.date}</TableCell>
                          <TableCell>{backup.status === "in_progress" ? "—" : backup.size}</TableCell>
                          <TableCell>{backup.type}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {backup.status === "completed" ? (
                                <>
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span>Completed</span>
                                </>
                              ) : backup.status === "in_progress" ? (
                                <>
                                  <Clock className="h-4 w-4 text-blue-500" />
                                  <span>In Progress</span>
                                </>
                              ) : (
                                <>
                                  <AlertTriangle className="h-4 w-4 text-red-500" />
                                  <span>Failed</span>
                                </>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="flex items-center gap-2">
                                  <Play className="h-4 w-4" />
                                  <span>Restore</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2">
                                  <Download className="h-4 w-4" />
                                  <span>Download</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                      {filteredBackups.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No backups found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="query">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>SQL Query Tool</CardTitle>
                  <CardDescription>
                    Run SQL queries directly on your databases
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="database-select">Select Database</Label>
                      <select
                        id="database-select"
                        className="w-full p-2 border rounded-md"
                        value={selectedDatabase}
                        onChange={(e) => setSelectedDatabase(e.target.value)}
                      >
                        <option value="">Select a database</option>
                        {databases.map((db) => (
                          <option key={db.id} value={db.name}>
                            {db.name} ({db.type})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sql-query">SQL Query</Label>
                      <Textarea
                        id="sql-query"
                        placeholder="Enter your SQL query here..."
                        className="font-mono text-sm h-32"
                        value={sqlQuery}
                        onChange={(e) => setSqlQuery(e.target.value)}
                      />
                    </div>
                    <Button 
                      className="flex items-center gap-2"
                      disabled={!selectedDatabase}
                      onClick={handleRunQuery}
                    >
                      <Play className="h-4 w-4" />
                      <span>Run Query</span>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 p-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <p>Query results will appear here after execution.</p>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Query Dialog */}
      <Dialog open={isQueryDialogOpen} onOpenChange={setIsQueryDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Query Database: {selectedDatabase}</DialogTitle>
            <DialogDescription>
              Run SQL queries directly on the selected database
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="dialog-sql-query">SQL Query</Label>
              <Textarea
                id="dialog-sql-query"
                placeholder="Enter your SQL query here..."
                className="font-mono text-sm h-32"
                value={sqlQuery}
                onChange={(e) => setSqlQuery(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsQueryDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleRunQuery} className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span>Run Query</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Backup Dialog */}
      <Dialog open={isBackupDialogOpen} onOpenChange={setIsBackupDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Backup Database: {selectedDatabase}</DialogTitle>
            <DialogDescription>
              Create a new backup of the selected database
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="backup-type">Backup Type</Label>
              <select
                id="backup-type"
                className="w-full p-2 border rounded-md"
                defaultValue="full"
              >
                <option value="full">Full Backup</option>
                <option value="incremental">Incremental Backup</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="compress-backup"
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked
                />
                <Label htmlFor="compress-backup">Compress Backup</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsBackupDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateBackup} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              <span>Create Backup</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 