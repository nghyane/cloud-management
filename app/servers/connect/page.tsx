"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Server, Key, Lock, Globe, Cloud, Database, FileText, Terminal, Activity } from "lucide-react";

export default function ConnectServerPage() {
  const [connectionMethod, setConnectionMethod] = useState("ssh-key");
  const [isConnecting, setIsConnecting] = useState(false);
  const [serverName, setServerName] = useState("");
  const [serverHost, setServerHost] = useState("");
  const [serverPort, setServerPort] = useState("22");
  const [username, setUsername] = useState("root");
  const [password, setPassword] = useState("");
  const [sshKey, setSshKey] = useState("");
  const [provider, setProvider] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [selectedServices, setSelectedServices] = useState({
    ssh: true,
    database: true,
    fileManager: true,
    monitoring: true,
  });

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      // In a real app, you would redirect to the server details page
      window.location.href = "/servers";
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Connect to Server</h1>
          <p className="text-muted-foreground">
            Add a new server to your dashboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Server Connection Details</CardTitle>
              <CardDescription>
                Enter the details needed to connect to your server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleConnect}>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="server-name">Server Name</Label>
                        <Input
                          id="server-name"
                          placeholder="My Production Server"
                          value={serverName}
                          onChange={(e) => setServerName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="provider">Cloud Provider (Optional)</Label>
                        <Select value={provider} onValueChange={setProvider}>
                          <SelectTrigger id="provider">
                            <SelectValue placeholder="Select provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aws">AWS</SelectItem>
                            <SelectItem value="digitalocean">DigitalOcean</SelectItem>
                            <SelectItem value="gcp">Google Cloud</SelectItem>
                            <SelectItem value="azure">Azure</SelectItem>
                            <SelectItem value="linode">Linode</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="server-host">Server Host/IP</Label>
                        <Input
                          id="server-host"
                          placeholder="example.com or 192.168.1.1"
                          value={serverHost}
                          onChange={(e) => setServerHost(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="server-port">SSH Port</Label>
                        <Input
                          id="server-port"
                          placeholder="22"
                          value={serverPort}
                          onChange={(e) => setServerPort(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Authentication Method</Label>
                    <Tabs 
                      defaultValue="ssh-key" 
                      value={connectionMethod}
                      onValueChange={setConnectionMethod}
                      className="w-full"
                    >
                      <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="ssh-key" className="flex items-center gap-2">
                          <Key className="h-4 w-4" />
                          <span>SSH Key</span>
                        </TabsTrigger>
                        <TabsTrigger value="password" className="flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          <span>Password</span>
                        </TabsTrigger>
                        <TabsTrigger value="provider-api" className="flex items-center gap-2">
                          <Cloud className="h-4 w-4" />
                          <span>Provider API</span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="ssh-key" className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            placeholder="root"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="ssh-key">SSH Private Key</Label>
                            <Button type="button" variant="link" size="sm" className="h-5">
                              Generate New Key
                            </Button>
                          </div>
                          <Textarea
                            id="ssh-key"
                            placeholder="Paste your private key here"
                            className="font-mono text-xs h-32"
                            value={sshKey}
                            onChange={(e) => setSshKey(e.target.value)}
                            required
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="password" className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="username-pwd">Username</Label>
                          <Input
                            id="username-pwd"
                            placeholder="root"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter server password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="provider-api" className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="api-key">API Key/Token</Label>
                          <Input
                            id="api-key"
                            type="password"
                            placeholder="Enter provider API key"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            required
                          />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Using provider API requires selecting a cloud provider above.
                          We'll use the API to automatically discover and connect to your servers.
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div className="space-y-4">
                    <Label>Services to Enable</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="ssh"
                          checked={selectedServices.ssh}
                          onCheckedChange={(checked) => 
                            setSelectedServices({...selectedServices, ssh: checked})
                          }
                        />
                        <Label htmlFor="ssh" className="flex items-center gap-2">
                          <Terminal className="h-4 w-4" />
                          <span>SSH Terminal</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="database"
                          checked={selectedServices.database}
                          onCheckedChange={(checked) => 
                            setSelectedServices({...selectedServices, database: checked})
                          }
                        />
                        <Label htmlFor="database" className="flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          <span>Database Management</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="file-manager"
                          checked={selectedServices.fileManager}
                          onCheckedChange={(checked) => 
                            setSelectedServices({...selectedServices, fileManager: checked})
                          }
                        />
                        <Label htmlFor="file-manager" className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          <span>File Manager</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="monitoring"
                          checked={selectedServices.monitoring}
                          onCheckedChange={(checked) => 
                            setSelectedServices({...selectedServices, monitoring: checked})
                          }
                        />
                        <Label htmlFor="monitoring" className="flex items-center gap-2">
                          <Activity className="h-4 w-4" />
                          <span>Monitoring</span>
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" type="button" onClick={() => window.history.back()}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isConnecting}>
                    {isConnecting ? "Connecting..." : "Connect Server"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connection Guide</CardTitle>
              <CardDescription>
                How to connect to your server
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Using SSH Key (Recommended)</h3>
                <p className="text-sm text-muted-foreground">
                  SSH keys provide a more secure way to log in to your server compared to passwords.
                </p>
                <div className="text-xs bg-muted p-2 rounded-md">
                  <code>ssh-keygen -t rsa -b 4096 -C "your_email@example.com"</code>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Using Password</h3>
                <p className="text-sm text-muted-foreground">
                  Password authentication is simpler but less secure. Use strong passwords and consider enabling two-factor authentication.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Using Provider API</h3>
                <p className="text-sm text-muted-foreground">
                  Connect using your cloud provider's API for automated discovery and enhanced features.
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>AWS: Use IAM Access Keys</li>
                  <li>DigitalOcean: Generate API Token</li>
                  <li>GCP: Create Service Account Key</li>
                  <li>Azure: Create App Registration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-500/10 text-green-500 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Use SSH keys instead of passwords when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-500/10 text-green-500 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Use a non-standard SSH port (not 22) to reduce automated attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-500/10 text-green-500 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Restrict API keys to only the permissions needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-500/10 text-green-500 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Enable firewall rules to limit access to your server</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 