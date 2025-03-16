"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Cloud, Server, MoreHorizontal, AlertTriangle } from "lucide-react"

// Sample data for resource usage
const resources = [
  {
    id: "web-server-1",
    name: "web-server-1",
    provider: "aws",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "t3.medium",
    region: "us-east-1",
    cpu: 35,
    memory: 62,
    storage: 48,
    network: {
      in: "1.2 GB",
      out: "3.5 GB"
    },
    status: "normal"
  },
  {
    id: "db-server-1",
    name: "db-server-1",
    provider: "aws",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    type: "r5.large",
    region: "us-east-1",
    cpu: 42,
    memory: 85,
    storage: 65,
    network: {
      in: "0.8 GB",
      out: "1.5 GB"
    },
    status: "warning"
  },
  {
    id: "analytics-1",
    name: "analytics-1",
    provider: "gcp",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    type: "e2-standard-4",
    region: "us-central1",
    cpu: 78,
    memory: 45,
    storage: 32,
    network: {
      in: "3.2 GB",
      out: "1.7 GB"
    },
    status: "warning"
  },
  {
    id: "dev-server-1",
    name: "dev-server-1",
    provider: "azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    type: "Standard_D2s_v3",
    region: "eastus",
    cpu: 12,
    memory: 35,
    storage: 28,
    network: {
      in: "0.4 GB",
      out: "0.6 GB"
    },
    status: "normal"
  },
  {
    id: "private-server-1",
    name: "private-server-1",
    provider: "private",
    providerIcon: Server,
    providerColor: "#6B7280",
    type: "Custom",
    region: "On-premise",
    cpu: 56,
    memory: 72,
    storage: 45,
    network: {
      in: "1.8 GB",
      out: "2.2 GB"
    },
    status: "normal"
  }
]

export function ResourceTable() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Resource Details</CardTitle>
        <CardDescription>
          Detailed view of resource usage across all servers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Server</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>CPU</TableHead>
              <TableHead>Memory</TableHead>
              <TableHead>Storage</TableHead>
              <TableHead>Network</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    {resource.status === "warning" && (
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                    )}
                    {resource.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <resource.providerIcon 
                      className="h-4 w-4 mr-2" 
                      style={{ color: resource.providerColor }} 
                    />
                    {resource.provider}
                  </div>
                </TableCell>
                <TableCell>{resource.type}</TableCell>
                <TableCell>{resource.region}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={resource.cpu} 
                      className="w-16 h-2" 
                      indicatorClassName={resource.cpu > 70 ? "bg-red-500" : undefined}
                    />
                    <span className="text-xs">{resource.cpu}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={resource.memory} 
                      className="w-16 h-2" 
                      indicatorClassName={resource.memory > 80 ? "bg-red-500" : undefined}
                    />
                    <span className="text-xs">{resource.memory}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={resource.storage} className="w-16 h-2" />
                    <span className="text-xs">{resource.storage}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-xs">
                    <div>In: {resource.network.in}</div>
                    <div>Out: {resource.network.out}</div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 