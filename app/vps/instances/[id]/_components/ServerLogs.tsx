"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { ServerType } from "../_types/server";

interface ServerLogsProps {
  server: ServerType;
}

export function ServerLogs({ server }: ServerLogsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Server Logs</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
          <Button variant="outline" size="sm">Refresh</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">System</Button>
            <Button variant="outline" size="sm" className="flex-1">Application</Button>
            <Button variant="outline" size="sm" className="flex-1">Security</Button>
            <Button variant="outline" size="sm" className="flex-1">Access</Button>
          </div>
          
          <div className="h-[400px] border rounded-md bg-muted/20 font-mono text-xs p-4 overflow-auto">
            <p className="text-muted-foreground">Nov 01 10:45:32 web-server-1 systemd[1]: Started Daily apt download activities.</p>
            <p className="text-muted-foreground">Nov 01 10:45:32 web-server-1 systemd[1]: Starting Daily apt download activities...</p>
            <p className="text-muted-foreground">Nov 01 10:45:32 web-server-1 systemd[1]: apt-daily.service: Succeeded.</p>
            <p className="text-muted-foreground">Nov 01 10:47:01 web-server-1 CRON[1234]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)</p>
            <p className="text-muted-foreground">Nov 01 11:00:01 web-server-1 CRON[1235]: (root) CMD (test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily ))</p>
            <p className="text-muted-foreground">Nov 01 11:17:01 web-server-1 CRON[1236]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)</p>
            <p className="text-muted-foreground">Nov 01 12:00:01 web-server-1 CRON[1237]: (root) CMD (test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily ))</p>
            <p className="text-muted-foreground">Nov 01 12:17:01 web-server-1 CRON[1238]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)</p>
            <p className="text-muted-foreground">Nov 01 13:00:01 web-server-1 CRON[1239]: (root) CMD (test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily ))</p>
            <p className="text-muted-foreground">Nov 01 13:17:01 web-server-1 CRON[1240]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)</p>
            <p className="text-muted-foreground">Nov 01 14:00:01 web-server-1 CRON[1241]: (root) CMD (test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily ))</p>
            <p className="text-muted-foreground">Nov 01 14:17:01 web-server-1 CRON[1242]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)</p>
            <p className="text-muted-foreground">Nov 01 15:00:01 web-server-1 CRON[1243]: (root) CMD (test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily ))</p>
            <p className="text-muted-foreground">Nov 01 15:17:01 web-server-1 CRON[1244]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 