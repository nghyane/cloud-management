"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, HardDrive, Shield } from "lucide-react";

export function RecentAlerts() {
  return (
    <Card>
      <CardHeader className="p-6 pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ScrollArea className="h-[220px]">
          <div className="space-y-4 pr-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-muted/20">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <p className="font-medium">High Memory Usage</p>
                <p className="text-sm text-muted-foreground">Memory usage exceeded 80% on analytics-1</p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-muted/20">
                <HardDrive className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <p className="font-medium">Disk Space Warning</p>
                <p className="text-sm text-muted-foreground">analytics-1 is at 85% capacity</p>
                <p className="text-xs text-muted-foreground mt-1">Yesterday, 14:25</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-muted/20">
                <Shield className="h-4 w-4 text-red-500" />
              </div>
              <div>
                <p className="font-medium">Security Update Available</p>
                <p className="text-sm text-muted-foreground">Critical updates available for 3 servers</p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
} 