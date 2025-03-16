"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Cloud, MoreHorizontal, Network, Globe, Shield, Wifi } from "lucide-react"

// Sample data for network resources
const networkResources = [
  {
    id: "vpc-1",
    name: "production-vpc",
    type: "VPC",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Active",
    statusColor: "bg-green-500",
    details: "10.0.0.0/16",
    region: "us-east-1",
    created: "2023-08-15"
  },
  {
    id: "vpc-2",
    name: "staging-vpc",
    type: "VPC",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Active",
    statusColor: "bg-green-500",
    details: "10.1.0.0/16",
    region: "us-east-1",
    created: "2023-09-10"
  },
  {
    id: "vpc-3",
    name: "development-vpc",
    type: "VPC",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Active",
    statusColor: "bg-green-500",
    details: "172.16.0.0/16",
    region: "us-central1",
    created: "2023-10-05"
  },
  {
    id: "lb-1",
    name: "web-lb",
    type: "Load Balancer",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Active",
    statusColor: "bg-green-500",
    details: "Public (HTTP/HTTPS)",
    region: "us-east-1",
    created: "2023-08-20"
  },
  {
    id: "lb-2",
    name: "api-lb",
    type: "Load Balancer",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Active",
    statusColor: "bg-green-500",
    details: "Internal (HTTP)",
    region: "us-central1",
    created: "2023-09-15"
  },
  {
    id: "dns-1",
    name: "example.com",
    type: "DNS Zone",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Active",
    statusColor: "bg-green-500",
    details: "Public (25 records)",
    region: "Global",
    created: "2023-05-10"
  },
  {
    id: "fw-1",
    name: "web-firewall",
    type: "Firewall",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    status: "Active",
    statusColor: "bg-green-500",
    details: "8 rules",
    region: "us-east-1",
    created: "2023-08-18"
  },
  {
    id: "fw-2",
    name: "db-firewall",
    type: "Firewall",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    status: "Active",
    statusColor: "bg-green-500",
    details: "5 rules",
    region: "us-central1",
    created: "2023-09-12"
  }
]

export function NetworkResourceList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Resources</CardTitle>
        <CardDescription>
          All network resources across providers
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
              <TableHead>Details</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {networkResources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell className="font-medium">
                  {resource.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {resource.type === "VPC" && <Network className="h-4 w-4 mr-2" />}
                    {resource.type === "Load Balancer" && <Wifi className="h-4 w-4 mr-2" />}
                    {resource.type === "DNS Zone" && <Globe className="h-4 w-4 mr-2" />}
                    {resource.type === "Firewall" && <Shield className="h-4 w-4 mr-2" />}
                    {resource.type}
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
                <TableCell>
                  <Badge variant="outline" className="font-normal">
                    <div className={`w-2 h-2 rounded-full ${resource.statusColor} mr-2`}></div>
                    {resource.status}
                  </Badge>
                </TableCell>
                <TableCell>{resource.details}</TableCell>
                <TableCell>{resource.region}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
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