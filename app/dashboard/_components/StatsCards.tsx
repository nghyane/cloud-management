"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Activity, Cpu, Folder, HardDrive, Server, Shield } from "lucide-react";

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="border hover:border-border/80 transition-all">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Servers</p>
            <p className="text-2xl font-semibold">12</p>
          </div>
          <div className="p-3 bg-muted/20 rounded-full">
            <Server className="h-5 w-5 text-primary" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="border hover:border-border/80 transition-all">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Projects</p>
            <p className="text-2xl font-semibold">4</p>
          </div>
          <div className="p-3 bg-muted/20 rounded-full">
            <Folder className="h-5 w-5 text-primary" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="border hover:border-border/80 transition-all">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Resources</p>
            <p className="text-2xl font-semibold">48 vCPUs</p>
          </div>
          <div className="p-3 bg-muted/20 rounded-full">
            <Cpu className="h-5 w-5 text-primary" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="border hover:border-border/80 transition-all">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Alerts</p>
            <p className="text-2xl font-semibold">3</p>
          </div>
          <div className="p-3 bg-muted/20 rounded-full">
            <Shield className="h-5 w-5 text-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 