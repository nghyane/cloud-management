"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ResourceOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Average across all resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42%</div>
          <Progress value={42} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            +5% from last week
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Average across all resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">68%</div>
          <Progress value={68} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            +12% from last week
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Storage Usage</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Average across all resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">54%</div>
          <Progress value={54} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            +3% from last week
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Network Traffic</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Total across all resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8.2 TB</div>
          <div className="flex items-center justify-between mt-2 text-xs">
            <div>Inbound: 3.5 TB</div>
            <div>Outbound: 4.7 TB</div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            +18% from last week
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 