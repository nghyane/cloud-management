"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ResourceUsageCharts() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Resource Usage Trends</CardTitle>
        <CardDescription>
          Monitor resource usage patterns over time
        </CardDescription>
        <Tabs defaultValue="cpu" className="mt-2">
          <TabsList>
            <TabsTrigger value="cpu">CPU</TabsTrigger>
            <TabsTrigger value="memory">Memory</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
          </TabsList>
          <TabsContent value="cpu" className="mt-2">
            <div className="h-[300px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">CPU Usage Chart</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Peak Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Server: analytics-1
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Across all servers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Idle Servers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    &lt; 10% CPU usage
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="memory" className="mt-2">
            <div className="h-[300px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">Memory Usage Chart</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Peak Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Server: db-server-1
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Across all servers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">High Memory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    &gt; 75% memory usage
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="storage" className="mt-2">
            <div className="h-[300px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">Storage Usage Chart</div>
            </div>
          </TabsContent>
          <TabsContent value="network" className="mt-2">
            <div className="h-[300px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">Network Traffic Chart</div>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
} 