"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Folder, Server, Terminal } from "lucide-react";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="p-6 pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ScrollArea className="h-[400px]">
          <div className="space-y-6 pr-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-muted/20">
                <Server className="h-4 w-4 text-emerald-500" />
              </div>
              <div>
                <p className="font-medium">Server Created</p>
                <p className="text-sm text-muted-foreground">analytics-2 server created in US-East region</p>
                <p className="text-xs text-muted-foreground mt-1">Today, 10:25 AM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-muted/20">
                <Terminal className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">Maintenance Completed</p>
                <p className="text-sm text-muted-foreground">Scheduled maintenance completed on 3 servers</p>
                <p className="text-xs text-muted-foreground mt-1">Yesterday, 23:15 PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-muted/20">
                <Folder className="h-4 w-4 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">Project Created</p>
                <p className="text-sm text-muted-foreground">Development Environment project created</p>
                <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
} 