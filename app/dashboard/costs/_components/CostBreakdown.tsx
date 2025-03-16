"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CostBreakdown() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Cost Breakdown</CardTitle>
        <CardDescription>
          Analyze costs by service, region, and time period
        </CardDescription>
        <Tabs defaultValue="service" className="mt-2">
          <TabsList>
            <TabsTrigger value="service">By Service</TabsTrigger>
            <TabsTrigger value="region">By Region</TabsTrigger>
            <TabsTrigger value="project">By Project</TabsTrigger>
            <TabsTrigger value="time">Over Time</TabsTrigger>
          </TabsList>
          <TabsContent value="service" className="mt-2">
            <div className="h-[400px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">Service Cost Breakdown Chart</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="space-y-1">
                <div className="text-sm font-medium">Compute</div>
                <div className="text-xl font-bold">$485.32</div>
                <div className="text-xs text-muted-foreground">37.8% of total</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Storage</div>
                <div className="text-xl font-bold">$312.45</div>
                <div className="text-xs text-muted-foreground">24.3% of total</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Database</div>
                <div className="text-xl font-bold">$256.78</div>
                <div className="text-xs text-muted-foreground">20.0% of total</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Networking</div>
                <div className="text-xl font-bold">$230.01</div>
                <div className="text-xs text-muted-foreground">17.9% of total</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="region" className="mt-2">
            <div className="h-[400px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">Regional Cost Breakdown Chart</div>
            </div>
          </TabsContent>
          <TabsContent value="project" className="mt-2">
            <div className="h-[400px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">Project Cost Breakdown Chart</div>
            </div>
          </TabsContent>
          <TabsContent value="time" className="mt-2">
            <div className="h-[400px] w-full rounded-md border flex items-center justify-center bg-muted/20">
              <div className="text-muted-foreground">Cost Over Time Chart</div>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
} 