"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
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
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Cloud, 
  Server, 
  ArrowLeft,
  Key,
  CreditCard,
  Globe,
  Info,
  Check
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AddProviderPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("aws")
  const [selectedProvider, setSelectedProvider] = useState("aws")

  useEffect(() => {
    // Get provider from URL query parameter
    const providerParam = searchParams.get("provider")
    if (providerParam && ["aws", "gcp", "azure", "private"].includes(providerParam)) {
      setActiveTab(providerParam)
      setSelectedProvider(providerParam)
    }
  }, [searchParams])

  // Handle provider selection change
  const handleProviderChange = (value: string) => {
    setSelectedProvider(value)
    setActiveTab(value)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <div className="mr-4 hidden md:flex">
              <div className="font-semibold">Add Cloud Provider</div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="ml-auto flex items-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="/providers">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Providers
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/providers">Providers</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Add Provider</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Add Cloud Provider</h1>
              <p className="text-muted-foreground">
                Connect a new cloud provider or on-premise infrastructure to your account
              </p>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Provider Type</CardTitle>
                  <CardDescription>
                    Choose the type of cloud provider you want to connect
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={selectedProvider} 
                    onValueChange={handleProviderChange}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    <Label
                      htmlFor="aws"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <RadioGroupItem value="aws" id="aws" className="sr-only" />
                      <Cloud className="mb-3 h-6 w-6" style={{ color: "#FF9900" }} />
                      <div className="text-center">
                        <span className="block font-medium">AWS</span>
                        <span className="block text-xs text-muted-foreground">Amazon Web Services</span>
                      </div>
                    </Label>
                    <Label
                      htmlFor="gcp"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <RadioGroupItem value="gcp" id="gcp" className="sr-only" />
                      <Cloud className="mb-3 h-6 w-6" style={{ color: "#4285F4" }} />
                      <div className="text-center">
                        <span className="block font-medium">Google Cloud</span>
                        <span className="block text-xs text-muted-foreground">Google Cloud Platform</span>
                      </div>
                    </Label>
                    <Label
                      htmlFor="azure"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <RadioGroupItem value="azure" id="azure" className="sr-only" />
                      <Cloud className="mb-3 h-6 w-6" style={{ color: "#0078D4" }} />
                      <div className="text-center">
                        <span className="block font-medium">Azure</span>
                        <span className="block text-xs text-muted-foreground">Microsoft Azure</span>
                      </div>
                    </Label>
                    <Label
                      htmlFor="private"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <RadioGroupItem value="private" id="private" className="sr-only" />
                      <Server className="mb-3 h-6 w-6" />
                      <div className="text-center">
                        <span className="block font-medium">Private</span>
                        <span className="block text-xs text-muted-foreground">On-premise Server</span>
                      </div>
                    </Label>
                  </RadioGroup>
                </CardContent>
              </Card>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4 w-full justify-start">
                  <TabsTrigger value="aws">
                    <Cloud className="mr-2 h-4 w-4" style={{ color: "#FF9900" }} />
                    AWS
                  </TabsTrigger>
                  <TabsTrigger value="gcp">
                    <Cloud className="mr-2 h-4 w-4" style={{ color: "#4285F4" }} />
                    Google Cloud
                  </TabsTrigger>
                  <TabsTrigger value="azure">
                    <Cloud className="mr-2 h-4 w-4" style={{ color: "#0078D4" }} />
                    Azure
                  </TabsTrigger>
                  <TabsTrigger value="private">
                    <Server className="mr-2 h-4 w-4" />
                    Private Server
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="aws">
                  <Card>
                    <CardHeader>
                      <CardTitle>Connect AWS Account</CardTitle>
                      <CardDescription>
                        Enter your AWS credentials to connect your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="aws-name">Provider Name</Label>
                            <Input id="aws-name" placeholder="My AWS Account" />
                            <p className="text-xs text-muted-foreground">
                              A friendly name to identify this provider
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="aws-account-id">AWS Account ID</Label>
                            <Input id="aws-account-id" placeholder="123456789012" />
                            <p className="text-xs text-muted-foreground">
                              Your 12-digit AWS account ID
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="aws-access-key">Access Key ID</Label>
                          <Input id="aws-access-key" placeholder="AKIAIOSFODNN7EXAMPLE" />
                          <p className="text-xs text-muted-foreground">
                            Your AWS access key ID
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="aws-secret-key">Secret Access Key</Label>
                          <Input id="aws-secret-key" type="password" placeholder="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" />
                          <p className="text-xs text-muted-foreground">
                            Your AWS secret access key
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="aws-region">Default Region</Label>
                          <Select defaultValue="us-east-1">
                            <SelectTrigger id="aws-region">
                              <SelectValue placeholder="Select a region" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                              <SelectItem value="us-east-2">US East (Ohio)</SelectItem>
                              <SelectItem value="us-west-1">US West (N. California)</SelectItem>
                              <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                              <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
                              <SelectItem value="eu-central-1">EU (Frankfurt)</SelectItem>
                              <SelectItem value="ap-northeast-1">Asia Pacific (Tokyo)</SelectItem>
                              <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground">
                            The default region for this AWS account
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="aws-description">Description (Optional)</Label>
                          <Textarea id="aws-description" placeholder="Enter a description for this provider" />
                          <p className="text-xs text-muted-foreground">
                            Additional information about this provider
                          </p>
                        </div>
                      </div>
                      
                      <div className="rounded-md bg-blue-50 dark:bg-blue-950/50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                              AWS IAM Permissions
                            </h3>
                            <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                              <p>
                                Make sure your IAM user has the necessary permissions. We recommend using the AWS managed policy <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">ReadOnlyAccess</code> at minimum, and <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">PowerUserAccess</code> for full functionality.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" asChild>
                        <a href="/providers">Cancel</a>
                      </Button>
                      <Button>
                        <Check className="mr-2 h-4 w-4" />
                        Connect AWS Account
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="gcp">
                  <Card>
                    <CardHeader>
                      <CardTitle>Connect Google Cloud Account</CardTitle>
                      <CardDescription>
                        Enter your Google Cloud credentials to connect your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="gcp-name">Provider Name</Label>
                            <Input id="gcp-name" placeholder="My Google Cloud Account" />
                            <p className="text-xs text-muted-foreground">
                              A friendly name to identify this provider
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gcp-project-id">Project ID</Label>
                            <Input id="gcp-project-id" placeholder="my-gcp-project-123" />
                            <p className="text-xs text-muted-foreground">
                              Your Google Cloud project ID
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="gcp-service-account-key">Service Account Key (JSON)</Label>
                          <Textarea 
                            id="gcp-service-account-key" 
                            placeholder='{"type": "service_account", "project_id": "my-project", ...}'
                            className="font-mono text-xs h-32"
                          />
                          <p className="text-xs text-muted-foreground">
                            Paste your Google Cloud service account key JSON
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="gcp-region">Default Region</Label>
                          <Select defaultValue="us-central1">
                            <SelectTrigger id="gcp-region">
                              <SelectValue placeholder="Select a region" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us-central1">US Central (Iowa)</SelectItem>
                              <SelectItem value="us-east1">US East (South Carolina)</SelectItem>
                              <SelectItem value="us-west1">US West (Oregon)</SelectItem>
                              <SelectItem value="europe-west1">Europe West (Belgium)</SelectItem>
                              <SelectItem value="europe-west2">Europe West (London)</SelectItem>
                              <SelectItem value="asia-east1">Asia East (Taiwan)</SelectItem>
                              <SelectItem value="asia-southeast1">Asia Southeast (Singapore)</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground">
                            The default region for this Google Cloud account
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="gcp-description">Description (Optional)</Label>
                          <Textarea id="gcp-description" placeholder="Enter a description for this provider" />
                          <p className="text-xs text-muted-foreground">
                            Additional information about this provider
                          </p>
                        </div>
                      </div>
                      
                      <div className="rounded-md bg-blue-50 dark:bg-blue-950/50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                              Google Cloud Service Account
                            </h3>
                            <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                              <p>
                                Create a service account with appropriate roles. We recommend at minimum the <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">Viewer</code> role, and <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">Editor</code> for full functionality.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" asChild>
                        <a href="/providers">Cancel</a>
                      </Button>
                      <Button>
                        <Check className="mr-2 h-4 w-4" />
                        Connect Google Cloud Account
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="azure">
                  <Card>
                    <CardHeader>
                      <CardTitle>Connect Azure Account</CardTitle>
                      <CardDescription>
                        Enter your Microsoft Azure credentials to connect your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="azure-name">Provider Name</Label>
                            <Input id="azure-name" placeholder="My Azure Account" />
                            <p className="text-xs text-muted-foreground">
                              A friendly name to identify this provider
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="azure-subscription-id">Subscription ID</Label>
                            <Input id="azure-subscription-id" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
                            <p className="text-xs text-muted-foreground">
                              Your Azure subscription ID
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="azure-tenant-id">Tenant ID</Label>
                          <Input id="azure-tenant-id" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
                          <p className="text-xs text-muted-foreground">
                            Your Azure Active Directory tenant ID
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="azure-client-id">Client ID</Label>
                          <Input id="azure-client-id" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
                          <p className="text-xs text-muted-foreground">
                            Your Azure Active Directory application client ID
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="azure-client-secret">Client Secret</Label>
                          <Input id="azure-client-secret" type="password" placeholder="Your client secret" />
                          <p className="text-xs text-muted-foreground">
                            Your Azure Active Directory application client secret
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="azure-region">Default Region</Label>
                          <Select defaultValue="eastus">
                            <SelectTrigger id="azure-region">
                              <SelectValue placeholder="Select a region" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="eastus">East US</SelectItem>
                              <SelectItem value="eastus2">East US 2</SelectItem>
                              <SelectItem value="westus">West US</SelectItem>
                              <SelectItem value="westus2">West US 2</SelectItem>
                              <SelectItem value="northeurope">North Europe</SelectItem>
                              <SelectItem value="westeurope">West Europe</SelectItem>
                              <SelectItem value="southeastasia">Southeast Asia</SelectItem>
                              <SelectItem value="eastasia">East Asia</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground">
                            The default region for this Azure account
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="azure-description">Description (Optional)</Label>
                          <Textarea id="azure-description" placeholder="Enter a description for this provider" />
                          <p className="text-xs text-muted-foreground">
                            Additional information about this provider
                          </p>
                        </div>
                      </div>
                      
                      <div className="rounded-md bg-blue-50 dark:bg-blue-950/50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                              Azure Service Principal
                            </h3>
                            <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                              <p>
                                Create a service principal with appropriate roles. We recommend at minimum the <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">Reader</code> role, and <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">Contributor</code> for full functionality.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" asChild>
                        <a href="/providers">Cancel</a>
                      </Button>
                      <Button>
                        <Check className="mr-2 h-4 w-4" />
                        Connect Azure Account
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="private">
                  <Card>
                    <CardHeader>
                      <CardTitle>Connect Private Server</CardTitle>
                      <CardDescription>
                        Enter your on-premise server details to connect
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="private-name">Server Name</Label>
                            <Input id="private-name" placeholder="My Private Server" />
                            <p className="text-xs text-muted-foreground">
                              A friendly name to identify this server
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="private-host">Host Address</Label>
                            <Input id="private-host" placeholder="192.168.1.100 or server.example.com" />
                            <p className="text-xs text-muted-foreground">
                              IP address or hostname of your server
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="private-port">SSH Port</Label>
                            <Input id="private-port" placeholder="22" type="number" />
                            <p className="text-xs text-muted-foreground">
                              SSH port (default is 22)
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="private-username">Username</Label>
                            <Input id="private-username" placeholder="admin" />
                            <p className="text-xs text-muted-foreground">
                              SSH username for authentication
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="private-auth-method">Authentication Method</Label>
                          <Select defaultValue="key">
                            <SelectTrigger id="private-auth-method">
                              <SelectValue placeholder="Select authentication method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="key">SSH Key</SelectItem>
                              <SelectItem value="password">Password</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground">
                            Method to authenticate with the server
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="private-ssh-key">SSH Private Key</Label>
                          <Textarea 
                            id="private-ssh-key" 
                            placeholder="-----BEGIN RSA PRIVATE KEY-----..."
                            className="font-mono text-xs h-32"
                          />
                          <p className="text-xs text-muted-foreground">
                            Your SSH private key for authentication
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="private-description">Description (Optional)</Label>
                          <Textarea id="private-description" placeholder="Enter a description for this server" />
                          <p className="text-xs text-muted-foreground">
                            Additional information about this server
                          </p>
                        </div>
                      </div>
                      
                      <div className="rounded-md bg-blue-50 dark:bg-blue-950/50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                              Server Requirements
                            </h3>
                            <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                              <p>
                                Ensure your server has SSH access enabled and the necessary monitoring agents installed. The user should have sudo privileges for full functionality.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" asChild>
                        <a href="/providers">Cancel</a>
                      </Button>
                      <Button>
                        <Check className="mr-2 h-4 w-4" />
                        Connect Private Server
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 