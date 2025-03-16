"use client";

import { useState, useTransition } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { 
  FileText, 
  Folder, 
  File, 
  Upload, 
  Download, 
  Trash2, 
  Edit, 
  Copy, 
  MoreHorizontal,
  ChevronRight,
  Home,
  RefreshCw,
  Plus,
  Search,
  FileCode,
  FileImage,
  FileArchive,
  FileCog,
  FileJson,
  FileSpreadsheet,
  FileAudio,
  FileVideo,
  Loader2,
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

interface FileSystemItem {
  name: string;
  type: "file" | "directory";
  size: string;
  modified: string;
  permissions: string;
  owner: string;
  extension: string;
}

// Sample file system data
const fileSystem = {
  currentPath: "/var/www/html",
  items: [
    { 
      name: "index.html", 
      type: "file", 
      size: "4.2 KB", 
      modified: "2023-06-15 14:32", 
      permissions: "-rw-r--r--", 
      owner: "www-data",
      extension: "html"
    },
    { 
      name: "styles", 
      type: "directory", 
      size: "4.0 KB", 
      modified: "2023-06-10 09:15", 
      permissions: "drwxr-xr-x", 
      owner: "www-data",
      extension: ""
    },
    { 
      name: "scripts", 
      type: "directory", 
      size: "4.0 KB", 
      modified: "2023-06-12 11:42", 
      permissions: "drwxr-xr-x", 
      owner: "www-data",
      extension: ""
    },
    { 
      name: "app.js", 
      type: "file", 
      size: "12.6 KB", 
      modified: "2023-06-14 16:22", 
      permissions: "-rw-r--r--", 
      owner: "www-data",
      extension: "js"
    },
    { 
      name: "config.json", 
      type: "file", 
      size: "1.8 KB", 
      modified: "2023-06-13 10:05", 
      permissions: "-rw-r--r--", 
      owner: "www-data",
      extension: "json"
    },
    { 
      name: "logo.png", 
      type: "file", 
      size: "24.5 KB", 
      modified: "2023-06-01 09:30", 
      permissions: "-rw-r--r--", 
      owner: "www-data",
      extension: "png"
    },
    { 
      name: "data.csv", 
      type: "file", 
      size: "45.2 KB", 
      modified: "2023-06-08 14:12", 
      permissions: "-rw-r--r--", 
      owner: "www-data",
      extension: "csv"
    },
    { 
      name: "backup.tar.gz", 
      type: "file", 
      size: "1.2 MB", 
      modified: "2023-06-05 08:45", 
      permissions: "-rw-r--r--", 
      owner: "www-data",
      extension: "tar.gz"
    },
  ] as FileSystemItem[]
};

// File icon mapping
const getFileIcon = (extension: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    html: <FileCode className="h-4 w-4 text-orange-500" />,
    css: <FileCode className="h-4 w-4 text-blue-500" />,
    js: <FileCode className="h-4 w-4 text-yellow-500" />,
    ts: <FileCode className="h-4 w-4 text-blue-500" />,
    json: <FileJson className="h-4 w-4 text-green-500" />,
    png: <FileImage className="h-4 w-4 text-purple-500" />,
    jpg: <FileImage className="h-4 w-4 text-purple-500" />,
    jpeg: <FileImage className="h-4 w-4 text-purple-500" />,
    gif: <FileImage className="h-4 w-4 text-purple-500" />,
    svg: <FileImage className="h-4 w-4 text-purple-500" />,
    pdf: <FileText className="h-4 w-4 text-red-500" />,
    zip: <FileArchive className="h-4 w-4 text-gray-500" />,
    "tar.gz": <FileArchive className="h-4 w-4 text-gray-500" />,
    gz: <FileArchive className="h-4 w-4 text-gray-500" />,
    mp3: <FileAudio className="h-4 w-4 text-blue-500" />,
    wav: <FileAudio className="h-4 w-4 text-blue-500" />,
    mp4: <FileVideo className="h-4 w-4 text-blue-500" />,
    csv: <FileSpreadsheet className="h-4 w-4 text-green-500" />,
    xlsx: <FileSpreadsheet className="h-4 w-4 text-green-500" />,
    sh: <FileCog className="h-4 w-4 text-gray-500" />,
    conf: <FileCog className="h-4 w-4 text-gray-500" />,
  };

  return iconMap[extension] || <File className="h-4 w-4" />;
};

export default function ServerFilesPage() {
  const params = useParams();
  const serverId = params.id as string;
  const server = getServerById(serverId);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [isNewFolderDialogOpen, setIsNewFolderDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredItems = fileSystem.items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemSelect = (name: string) => {
    setSelectedItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name) 
        : [...prev, name]
    );
  };

  const handleSelectAll = () => {
    startTransition(() => {
      if (selectedItems.length === fileSystem.items.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(fileSystem.items.map(item => item.name));
      }
    });
  };

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) {
      toast.error("Folder name cannot be empty");
      return;
    }

    startTransition(() => {
      // In a real app, this would make an API call to create the folder
      console.log(`Creating folder: ${newFolderName}`);
      toast.success(`Successfully created folder "${newFolderName}"`);
      setNewFolderName("");
      setIsNewFolderDialogOpen(false);
    });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate a refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("File list has been refreshed");
    }, 800);
  };

  const handleBulkAction = (action: 'download' | 'copy' | 'delete') => {
    startTransition(() => {
      // In a real app, this would make API calls for the selected action
      console.log(`Performing ${action} on:`, selectedItems);
      
      if (action === 'delete') {
        toast.error(`Deleting ${selectedItems.length} item(s)`);
        setSelectedItems([]);
      } else if (action === 'download') {
        toast.success(`Downloading ${selectedItems.length} item(s)`);
      } else {
        toast.success(`Copying ${selectedItems.length} item(s)`);
      }
    });
  };

  const pathParts = fileSystem.currentPath.split('/').filter(Boolean);

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-6 w-6" />
            File Manager
          </h1>
          <p className="text-muted-foreground">
            Manage files on {server.name} ({server.ip})
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            {isRefreshing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            <span>Refresh</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => {
              setIsUploading(true);
              // Simulate upload process
              setTimeout(() => {
                setIsUploading(false);
                toast.success("Your files have been uploaded successfully");
              }, 2000);
            }}
            disabled={isUploading}
          >
            {isUploading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Upload className="h-4 w-4" />
            )}
            <span>Upload</span>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex items-center gap-2" 
            onClick={() => setIsNewFolderDialogOpen(true)}
          >
            <Plus className="h-4 w-4" />
            <span>New Folder</span>
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <ScrollArea className="w-full md:w-auto max-w-full">
              <Breadcrumb className="overflow-hidden">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="flex items-center gap-1">
                      <Home className="h-3 w-3" />
                      <span>root</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  {pathParts.map((part, index) => (
                    <BreadcrumbItem key={index}>
                      {index === pathParts.length - 1 ? (
                        <BreadcrumbPage>{part}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href="#">{part}</BreadcrumbLink>
                      )}
                      {index < pathParts.length - 1 && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </ScrollArea>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search files..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <CardTitle>Files and Directories</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {selectedItems.length} of {fileSystem.items.length} selected
              </span>
              {selectedItems.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Actions
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                      className="flex items-center gap-2"
                      onClick={() => handleBulkAction('download')}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="flex items-center gap-2"
                      onClick={() => handleBulkAction('copy')}
                    >
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="flex items-center gap-2 text-destructive"
                      onClick={() => handleBulkAction('delete')}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={selectedItems.length === fileSystem.items.length && fileSystem.items.length > 0}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all files"
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="hidden md:table-cell">Modified</TableHead>
                  <TableHead className="hidden md:table-cell">Permissions</TableHead>
                  <TableHead className="hidden md:table-cell">Owner</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isPending ? (
                  // Loading skeleton
                  Array.from({ length: 5 }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell className="hidden md:table-cell"><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell className="hidden md:table-cell"><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell className="hidden md:table-cell"><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <TableRow key={item.name} className="group">
                      <TableCell>
                        <Checkbox 
                          checked={selectedItems.includes(item.name)}
                          onCheckedChange={() => handleItemSelect(item.name)}
                          aria-label={`Select ${item.name}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {item.type === "directory" ? (
                            <Folder className="h-4 w-4 text-blue-500" />
                          ) : (
                            getFileIcon(item.extension)
                          )}
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell className="hidden md:table-cell">{item.modified}</TableCell>
                      <TableCell className="hidden md:table-cell font-mono text-xs">{item.permissions}</TableCell>
                      <TableCell className="hidden md:table-cell">{item.owner}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              aria-label="More options"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {item.type === "directory" ? (
                              <DropdownMenuItem className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4" />
                                <span>Open</span>
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="flex items-center gap-2">
                                <Edit className="h-4 w-4" />
                                <span>Edit</span>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Download className="h-4 w-4" />
                              <span>Download</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Copy className="h-4 w-4" />
                              <span>Copy</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                              <Trash2 className="h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No files or directories found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isNewFolderDialogOpen} onOpenChange={setIsNewFolderDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Folder</DialogTitle>
            <DialogDescription>
              Enter a name for the new folder to create in {fileSystem.currentPath}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="folder-name">Folder Name</Label>
              <Input
                id="folder-name"
                placeholder="new-folder"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsNewFolderDialogOpen(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleCreateFolder}
              disabled={isPending || !newFolderName.trim()}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Folder"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 