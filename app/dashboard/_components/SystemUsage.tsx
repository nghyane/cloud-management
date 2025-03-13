"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Cpu, HardDrive, Network, Server } from "lucide-react";

export function SystemUsage() {
  return (
    <Card>
      <CardHeader className="p-6 pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Cpu className="h-5 w-5" />
          System Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-muted-foreground" />
              <span>CPU Usage</span>
            </div>
            <span>42%</span>
          </div>
          <Progress value={42} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <span>Memory Usage</span>
            </div>
            <span>68%</span>
          </div>
          <Progress value={68} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-muted-foreground" />
              <span>Storage Usage</span>
            </div>
            <span>57%</span>
          </div>
          <Progress value={57} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Network className="h-4 w-4 text-muted-foreground" />
              <span>Network Traffic</span>
            </div>
            <span>4.7 GB ⬆️ / 12.3 GB ⬇️</span>
          </div>
          <div className="flex gap-1 h-2">
            <div className="bg-blue-400 w-[35%] rounded-l-full" />
            <div className="bg-indigo-400 w-[65%] rounded-r-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 