"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Cloud, MoreHorizontal, Server, Power, PowerOff } from "lucide-react"

// Sample data for compute resources
const computeResources = [
  {
    id: "vm-1",
    name: "web-server-1",
    type: "Virtual Machine",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Running",
    statusColor: "bg-green-500",
    specs: "t3.medium (2 vCPU, 4 GB RAM)",
    region: "us-east-1",
    created: "2023-10-15",
    ip: "192.168.1.101"
  },
  {
    id: "vm-2",
    name: "db-server-1",
    type: "Virtual Machine",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Running",
    statusColor: "bg-green-500",
    specs: "r5.large (2 vCPU, 16 GB RAM)",
    region: "us-east-1",
    created: "2023-09-10",
    ip: "192.168.1.102"
  },
  {
    id: "vm-3",
    name: "analytics-1",
    type: "Virtual Machine",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Running",
    statusColor: "bg-green-500",
    specs: "e2-standard-4 (4 vCPU, 16 GB RAM)",
    region: "us-central1",
    created: "2023-10-25",
    ip: "10.0.1.15"
  },
  {
    id: "vm-4",
    name: "dev-server-1",
    type: "Virtual Machine",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    status: "Stopped",
    statusColor: "bg-red-500",
    specs: "Standard_D2s_v3 (2 vCPU, 8 GB RAM)",
    region: "eastus",
    created: "2023-10-28",
    ip: "192.168.5.10"
  },
  {
    id: "k8s-1",
    name: "production-cluster",
    type: "Kubernetes Cluster",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Running",
    statusColor: "bg-green-500",
    specs: "3 nodes (t3.large)",
    region: "us-east-1",
    created: "2023-08-15",
    ip: "N/A"
  },
  {
    id: "k8s-2",
    name: "dev-cluster",
    type: "Kubernetes Cluster",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Running",
    statusColor: "bg-green-500",
    specs: "2 nodes (e2-standard-2)",
    region: "us-central1",
    created: "2023-09-05",
    ip: "N/A"
  },
  {
    id: "server-1",
    name: "private-server-1",
    type: "Physical Server",
    provider: "Private",
    providerIcon: Server,
    providerColor: "#6B7280",
    status: "Running",
    statusColor: "bg-green-500",
    specs: "8 cores, 32 GB RAM",
    region: "On-premise",
    created: "2023-01-10",
    ip: "10.0.0.5"
  }
]

export function ComputeResourceList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compute Resources</CardTitle>
        <CardDescription>
          All compute resources across providers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Specs</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {computeResources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell className="font-medium">
                  {resource.name}
                </TableCell>
                <TableCell>{resource.type}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <resource.providerIcon 
                      className="h-4 w-4 mr-2" 
                      style={{ color: resource.providerColor }} 
                    />
                    {resource.provider}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-normal">
                    <div className={`w-2 h-2 rounded-full ${resource.statusColor} mr-2`}></div>
                    {resource.status}
                  </Badge>
                </TableCell>
                <TableCell>{resource.specs}</TableCell>
                <TableCell>{resource.region}</TableCell>
                <TableCell>{resource.ip}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    {resource.status === "Running" ? (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <PowerOff className="h-4 w-4 text-red-500" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Power className="h-4 w-4 text-green-500" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 