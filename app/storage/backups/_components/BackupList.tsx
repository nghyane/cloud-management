"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Download, HardDrive, Search } from "lucide-react";

export function BackupList() {
  return (
    <Card>
      <CardHeader className="px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle>Server Backups</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground/70" />
            <Input
              type="search"
              placeholder="Search backups..."
              className="pl-8 w-full"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <div className="mt-2">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((backup) => (
              <div key={backup} className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between p-3 border rounded-md hover:border-border/80 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-muted/20">
                    <HardDrive className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">web-server-{backup} backup</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>2023-11-0{backup}, 02:00 AM</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-auto sm:ml-0">
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    4.2 GB
                  </Badge>
                  <Button size="sm" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 