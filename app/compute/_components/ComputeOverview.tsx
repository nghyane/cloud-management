"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Cpu, Server } from "lucide-react"

export function ComputeOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Virtual Machines</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Server className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">24</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            18 running, 6 stopped
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Kubernetes Clusters</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Cloud className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">3</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            2 production, 1 development
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Serverless Functions</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Cpu className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">42</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            12.5K invocations today
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Auto Scaling Groups</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Server className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">8</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            32 total instances
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 