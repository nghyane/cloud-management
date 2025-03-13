"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Clock } from "lucide-react";

interface ServerBackupsProps {
  server: string;
}

export function ServerBackups({ server }: ServerBackupsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Backup History</CardTitle>
          <CardDescription>
            Manage your server backups
          </CardDescription>
        </div>
        <Button>Create Backup</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-md">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Full Backup</p>
                  <p className="text-sm text-muted-foreground">2023-11-01 12:30 PM</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button variant="outline" size="sm">Restore</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Full Backup</p>
                  <p className="text-sm text-muted-foreground">2023-10-25 09:15 AM</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button variant="outline" size="sm">Restore</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Full Backup</p>
                  <p className="text-sm text-muted-foreground">2023-10-18 03:45 PM</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button variant="outline" size="sm">Restore</Button>
              </div>
            </div>
          </div>
          
          <div className="border rounded-md p-4">
            <h3 className="text-sm font-medium mb-2">Backup Schedule</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm">Automatic backups</p>
                <p className="text-sm font-medium">Weekly (Sunday, 2:00 AM)</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Retention period</p>
                <p className="text-sm font-medium">4 weeks</p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">Configure Schedule</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 