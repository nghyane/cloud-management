"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"

export function CostOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Cost (30 days)</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            All providers combined
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
            <div className="text-2xl font-bold">1,284.56</div>
          </div>
          <div className="flex items-center mt-2 text-xs text-green-500">
            <ArrowDown className="h-3 w-3 mr-1" />
            <span>8% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">AWS Costs</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Last 30 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
            <div className="text-2xl font-bold">685.42</div>
          </div>
          <div className="flex items-center mt-2 text-xs text-red-500">
            <ArrowUp className="h-3 w-3 mr-1" />
            <span>12% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Google Cloud Costs</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Last 30 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
            <div className="text-2xl font-bold">412.18</div>
          </div>
          <div className="flex items-center mt-2 text-xs text-green-500">
            <ArrowDown className="h-3 w-3 mr-1" />
            <span>5% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Other Providers</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Azure, Private Servers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
            <div className="text-2xl font-bold">186.96</div>
          </div>
          <div className="flex items-center mt-2 text-xs text-green-500">
            <ArrowDown className="h-3 w-3 mr-1" />
            <span>3% from last month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 