"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Server, Database, HardDrive, Users } from "lucide-react";

export function SubscriptionUsage() {
  const usageItems = [
    {
      name: "Cloud Servers",
      used: 12,
      total: 25,
      icon: <Server className="h-4 w-4 text-primary" />,
      percent: 48,
      color: "bg-primary"
    },
    {
      name: "Storage",
      used: 345,
      total: 500,
      unit: "GB",
      icon: <HardDrive className="h-4 w-4 text-purple-500" />,
      percent: 69,
      color: "bg-purple-500"
    },
    {
      name: "Databases",
      used: 3,
      total: 10,
      icon: <Database className="h-4 w-4 text-blue-500" />,
      percent: 30,
      color: "bg-blue-500"
    },
    {
      name: "Team Members",
      used: 12,
      total: 15,
      icon: <Users className="h-4 w-4 text-amber-500" />,
      percent: 80,
      color: "bg-amber-500"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Resource Usage</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {usageItems.map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-muted">
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-mono">
                  {item.used} / {item.total}{item.unit ? ` ${item.unit}` : ''}
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={item.percent} 
                  className={`h-2 rounded-md bg-muted/50 [&>div]:${item.color}`}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex">
                  <div className="h-full border-l border-background/50 ml-[25%]"></div>
                  <div className="h-full border-l border-background/50 ml-[25%]"></div>
                  <div className="h-full border-l border-background/50 ml-[25%]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 