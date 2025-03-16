import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Plus,
  MoreVertical,
  Key,
  Copy,
  Trash2,
  Clock,
  Server,
  Download,
  Upload,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Cloud,
  Globe
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Sample SSH keys data
const sshKeys = [
  {
    id: "key-1234567890abcdef0",
    name: "Development Laptop",
    fingerprint: "SHA256:uDEXzrfDP6X8C8vfpEJK4FQxHCKOLE0xEdFrD/AHx23",
    publicKey: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3iM...truncated...user@dev-laptop",
    created: "2023-05-15",
    lastUsed: "2023-12-10",
    usedBy: [
      { name: "web-server-1", provider: "AWS", providerIcon: Cloud, providerColor: "#FF9900" },
      { name: "app-server-1", provider: "Google Cloud", providerIcon: Cloud, providerColor: "#4285F4" }
    ]
  },
  {
    id: "key-0987654321abcdef0",
    name: "CI/CD Pipeline",
    fingerprint: "SHA256:pFT5xNvB8Y7D2vMxR3JK1FQxHCKOLE0xEdFrD/AHx23",
    publicKey: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD4Zx...truncated...ci@jenkins",
    created: "2023-06-20",
    lastUsed: "2023-12-15",
    usedBy: [
      { name: "staging-server", provider: "DigitalOcean", providerIcon: Cloud, providerColor: "#0080FF" },
      { name: "db-server-1", provider: "Azure", providerIcon: Cloud, providerColor: "#0078D4" }
    ]
  },
  {
    id: "key-abcdef1234567890",
    name: "Production Deploy Key",
    fingerprint: "SHA256:rTY7xNvB8Y7D2vMxR3JK1FQxHCKOLE0xEdFrD/AHx23",
    publicKey: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDjKh...truncated...deploy@prod",
    created: "2023-04-10",
    lastUsed: "2023-12-18",
    usedBy: [
      { name: "web-server-1", provider: "AWS", providerIcon: Cloud, providerColor: "#FF9900" },
      { name: "private-server-1", provider: "Private Server", providerIcon: Server, providerColor: "#6B7280" }
    ]
  },
  {
    id: "key-567890abcdef1234",
    name: "Admin Workstation",
    fingerprint: "SHA256:tGH8xNvB8Y7D2vMxR3JK1FQxHCKOLE0xEdFrD/AHx23",
    publicKey: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvFr...truncated...admin@workstation",
    created: "2023-07-05",
    lastUsed: "2023-12-01",
    usedBy: [
      { name: "db-server-1", provider: "Azure", providerIcon: Cloud, providerColor: "#0078D4" },
      { name: "app-server-1", provider: "Google Cloud", providerIcon: Cloud, providerColor: "#4285F4" },
      { name: "private-server-1", provider: "Private Server", providerIcon: Server, providerColor: "#6B7280" }
    ]
  },
  {
    id: "key-abcdef567890123",
    name: "Backup Server",
    fingerprint: "SHA256:yUJ9xNvB8Y7D2vMxR3JK1FQxHCKOLE0xEdFrD/AHx23",
    publicKey: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCbTr...truncated...backup@server",
    created: "2023-08-15",
    lastUsed: "2023-11-20",
    usedBy: [
      { name: "staging-server", provider: "DigitalOcean", providerIcon: Cloud, providerColor: "#0080FF" }
    ]
  }
]

export default function SshKeysPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">SSH Keys</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex items-center space-x-2">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search SSH keys..."
                    className="w-full pl-8"
                  />
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add SSH Key
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Add New SSH Key</DialogTitle>
                        <DialogDescription>
                          Add a new SSH key to securely connect to your servers without a password.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Key Name</Label>
                          <Input id="name" placeholder="e.g. My Laptop" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="public-key">Public Key</Label>
                          <Textarea 
                            id="public-key" 
                            placeholder="Paste your SSH public key (starts with ssh-rsa or ssh-ed25519)" 
                            className="min-h-[120px]"
                          />
                          <p className="text-xs text-muted-foreground">
                            Your public key is usually located in ~/.ssh/id_rsa.pub or ~/.ssh/id_ed25519.pub
                          </p>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Add Key</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/vps">VPS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>SSH Keys</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">SSH Keys</h1>
              <p className="text-muted-foreground">
                Manage SSH keys for secure access to your servers across multiple cloud providers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total SSH Keys</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Key className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">{sshKeys.length}</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Active across all providers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Servers Using Keys</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Server className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">
                        {new Set(sshKeys.flatMap(key => key.usedBy.map(server => server.name))).size}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Servers with key-based authentication
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Last Key Added</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <div className="text-2xl font-bold">
                        {sshKeys.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())[0].created}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Date of most recent key addition
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="list">
                <TabsList className="mb-4">
                  <TabsTrigger value="list">
                    List View
                  </TabsTrigger>
                  <TabsTrigger value="grid">
                    Grid View
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="list">
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[250px]">Name</TableHead>
                            <TableHead>Fingerprint</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead>Last Used</TableHead>
                            <TableHead>Used By</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sshKeys.map((key) => (
                            <TableRow key={key.id}>
                              <TableCell className="font-medium">
                                <div className="flex items-center">
                                  <Key className="h-4 w-4 mr-2 text-muted-foreground" />
                                  {key.name}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {key.id}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="font-mono text-xs truncate max-w-[200px]">
                                  {key.fingerprint}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                  {key.created}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                  {key.lastUsed}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex flex-wrap gap-1">
                                  {key.usedBy.map((server) => {
                                    const ServerIcon = server.providerIcon;
                                    return (
                                      <Badge 
                                        key={`${key.id}-${server.name}`} 
                                        variant="outline"
                                        className="flex items-center"
                                      >
                                        <ServerIcon 
                                          className="h-3 w-3 mr-1" 
                                          style={{ color: server.providerColor }} 
                                        />
                                        {server.name}
                                      </Badge>
                                    );
                                  })}
                                </div>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreVertical className="h-4 w-4" />
                                      <span className="sr-only">Open menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <Copy className="h-4 w-4 mr-2" />
                                      Copy Public Key
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <FileText className="h-4 w-4 mr-2" />
                                      View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Server className="h-4 w-4 mr-2" />
                                      Manage Servers
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      Delete Key
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="grid">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sshKeys.map((key) => (
                      <Card key={key.id}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Key className="h-5 w-5 mr-2 text-muted-foreground" />
                              <CardTitle className="text-base">{key.name}</CardTitle>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Copy className="h-4 w-4 mr-2" />
                                  Copy Public Key
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="h-4 w-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Server className="h-4 w-4 mr-2" />
                                  Manage Servers
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete Key
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <CardDescription className="text-xs mt-1">
                            {key.id}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="font-mono text-xs truncate">
                              {key.fingerprint}
                            </div>
                            
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                Created: {key.created}
                              </div>
                            </div>
                            
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              Last used: {key.lastUsed}
                            </div>
                            
                            <div className="mt-2">
                              <div className="text-sm font-medium mb-1">Used by:</div>
                              <div className="flex flex-wrap gap-1">
                                {key.usedBy.map((server) => {
                                  const ServerIcon = server.providerIcon;
                                  return (
                                    <Badge 
                                      key={`${key.id}-${server.name}`} 
                                      variant="outline"
                                      className="flex items-center"
                                    >
                                      <ServerIcon 
                                        className="h-3 w-3 mr-1" 
                                        style={{ color: server.providerColor }} 
                                      />
                                      {server.name}
                                    </Badge>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-4 pb-2">
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Key
                          </Button>
                          <Button variant="outline" size="sm">
                            <Server className="h-4 w-4 mr-2" />
                            Manage Servers
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 