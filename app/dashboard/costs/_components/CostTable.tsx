"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Cloud, Server, MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react"

// Sample data for cost details
const costItems = [
  {
    id: "aws-ec2",
    service: "EC2 Instances",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    cost: 325.42,
    previousCost: 298.15,
    change: 9.1,
    trend: "up"
  },
  {
    id: "aws-s3",
    service: "S3 Storage",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    cost: 156.78,
    previousCost: 162.33,
    change: -3.4,
    trend: "down"
  },
  {
    id: "aws-rds",
    service: "RDS Database",
    provider: "AWS",
    providerIcon: Cloud,
    providerColor: "#FF9900",
    cost: 203.22,
    previousCost: 195.87,
    change: 3.8,
    trend: "up"
  },
  {
    id: "gcp-compute",
    service: "Compute Engine",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    cost: 187.45,
    previousCost: 201.22,
    change: -6.8,
    trend: "down"
  },
  {
    id: "gcp-storage",
    service: "Cloud Storage",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    cost: 98.32,
    previousCost: 95.45,
    change: 3.0,
    trend: "up"
  },
  {
    id: "gcp-bigquery",
    service: "BigQuery",
    provider: "Google Cloud",
    providerIcon: Cloud,
    providerColor: "#4285F4",
    cost: 126.41,
    previousCost: 132.18,
    change: -4.4,
    trend: "down"
  },
  {
    id: "azure-vm",
    service: "Virtual Machines",
    provider: "Azure",
    providerIcon: Cloud,
    providerColor: "#0078D4",
    cost: 112.35,
    previousCost: 108.92,
    change: 3.1,
    trend: "up"
  },
  {
    id: "private-server",
    service: "Dedicated Server",
    provider: "Private",
    providerIcon: Server,
    providerColor: "#6B7280",
    cost: 74.61,
    previousCost: 76.22,
    change: -2.1,
    trend: "down"
  }
]

export function CostTable() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Cost Details</CardTitle>
        <CardDescription>
          Detailed breakdown of costs by service and provider
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead className="text-right">Current Cost</TableHead>
              <TableHead className="text-right">Previous Period</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {costItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {item.service}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <item.providerIcon 
                      className="h-4 w-4 mr-2" 
                      style={{ color: item.providerColor }} 
                    />
                    {item.provider}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${item.cost.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  ${item.previousCost.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end">
                    {item.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                    )}
                    <span className={item.trend === "up" ? "text-red-500" : "text-green-500"}>
                      {item.change > 0 ? "+" : ""}{item.change}%
                    </span>
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