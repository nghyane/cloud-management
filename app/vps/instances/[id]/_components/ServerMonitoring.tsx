"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowUpDown, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ServerMonitoringProps {
  server: any;
}

export function ServerMonitoring({ server }: ServerMonitoringProps) {
  const networkData = {
    inbound: 2.4,
    outbound: 1.8,
    latency: 28,
  };

  const trafficData = [
    { time: "12:00", value: 32 },
    { time: "13:00", value: 56 },
    { time: "14:00", value: 78 },
    { time: "15:00", value: 45 },
    { time: "16:00", value: 23 },
    { time: "17:00", value: 67 },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>CPU Usage</CardTitle>
          <CardDescription>CPU utilization over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
            <p className="text-muted-foreground">CPU usage chart would be displayed here</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Memory Usage</CardTitle>
          <CardDescription>RAM utilization over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
            <p className="text-muted-foreground">Memory usage chart would be displayed here</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Disk Usage</CardTitle>
          <CardDescription>Storage utilization over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
            <p className="text-muted-foreground">Disk usage chart would be displayed here</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Network Monitoring</CardTitle>
          <CardDescription>Real-time performance metrics for your server</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <span>Network Traffic</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Inbound: {networkData.inbound} MB/s</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Outbound: {networkData.outbound} MB/s</span>
                </div>
              </div>
            </div>
            <div className="h-[200px] border rounded-md p-4 bg-muted/20">
              <div className="flex h-full items-end gap-2">
                {trafficData.map((item, i) => (
                  <div 
                    key={i} 
                    className="relative flex-1 bg-blue-500/80 rounded-t"
                    style={{ height: `${item.value}%` }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-green-500/80 rounded-t"
                      style={{ height: `${item.value * 0.7}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                {trafficData.map((item, i) => (
                  <span key={i}>{item.time}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Response Latency</span>
              </div>
              <span className="text-sm">{networkData.latency} ms</span>
            </div>
            <Progress value={Math.min(networkData.latency, 100)} className="h-2" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
          <CardDescription>System alerts and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="font-medium">High Memory Usage</p>
                <p className="text-sm text-muted-foreground">Memory usage exceeded 60% for over 1 hour</p>
                <p className="text-xs text-muted-foreground mt-1">Today, 10:45 AM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 