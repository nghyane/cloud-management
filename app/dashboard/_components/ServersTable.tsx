"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ServerType, ProviderKey, providerColors } from "@/app/types/server";
import { Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServersTableProps {
  servers: ServerType[];
}

export function ServersTable({ servers }: ServersTableProps) {
  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <CardTitle className="text-base font-medium">Recent Servers</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-medium">Name</TableHead>
              <TableHead className="font-medium">Provider</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">CPU</TableHead>
              <TableHead className="font-medium">RAM</TableHead>
              <TableHead className="font-medium">Uptime</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {servers.slice(0, 5).map((server) => {
              const isRunning = server.status === "Running";
              const statusColor = isRunning 
                ? "bg-emerald-500" 
                : server.status === "Warning" 
                  ? "bg-amber-500" 
                  : "bg-red-500";
              const serverId = server.id || server.name;
              const providerKey = server.provider as ProviderKey;
              
              return (
                <TableRow key={serverId} className="hover:bg-transparent">
                  <TableCell className="font-medium">
                    <Link 
                      href={`/vps/instances/${serverId}`}
                      className="hover:underline flex items-center gap-1"
                    >
                      {server.name}
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className="text-xs text-muted-foreground border-border/50 rounded-full px-2"
                    >
                      {server.provider}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${statusColor}`} />
                      <span className="text-sm">{server.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Progress value={server.usage.cpu} className="h-1 w-16" />
                    <span className="text-xs text-muted-foreground">{server.usage.cpu}%</span>
                  </TableCell>
                  <TableCell>
                    <Progress value={server.usage.ram} className="h-1 w-16" />
                    <span className="text-xs text-muted-foreground">{server.usage.ram}%</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{server.uptime}</span>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 