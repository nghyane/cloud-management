"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServerType } from "@/app/types/server";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Server } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample data
const servers: ServerType[] = [
  {
    id: "web-server-1",
    name: "web-server-1",
    status: "Running",
    ip: "192.168.1.101",
    region: "US East (N. Virginia)",
    cpu: 4,
    ram: 8,
    disk: 160,
    uptime: "14d 6h 32m",
    provider: "aws",
    os: "Ubuntu 22.04 LTS",
    created: "2023-10-15",
    lastBackup: "2023-11-01",
    projectId: "project-1",
    projectName: "E-commerce Platform",
    usage: {
      cpu: 35,
      ram: 62,
      disk: 48,
      network: {
        in: "1.2 GB",
        out: "3.5 GB"
      }
    },
    specs: {
      cpuModel: "Intel Xeon E5-2686 v4",
      ramType: "DDR4",
      diskType: "SSD",
      networkSpeed: "Up to 5 Gbps"
    }
  },
  {
    id: "db-server-1",
    name: "db-server-1",
    status: "Running",
    ip: "192.168.1.102",
    region: "EU (Frankfurt)",
    cpu: 8,
    ram: 16,
    disk: 320,
    uptime: "23d 12h 47m",
    provider: "digitalocean",
    os: "Ubuntu 22.04 LTS",
    created: "2023-09-28",
    lastBackup: "2023-11-02",
    projectId: "project-2",
    projectName: "Analytics Backend",
    usage: {
      cpu: 42,
      ram: 78,
      disk: 53,
      network: {
        in: "3.7 GB",
        out: "5.2 GB"
      }
    },
    specs: {
      cpuModel: "AMD EPYC 7601",
      ramType: "DDR4",
      diskType: "NVMe SSD",
      networkSpeed: "Up to 10 Gbps"
    }
  },
  {
    id: "analytics-1",
    name: "analytics-1",
    status: "Warning",
    ip: "192.168.1.103",
    region: "Asia Pacific (Tokyo)",
    cpu: 2,
    ram: 4,
    disk: 80,
    uptime: "7d 3h 19m",
    provider: "linode",
    os: "Debian 11",
    created: "2023-10-02",
    lastBackup: "2023-10-31",
    projectId: "project-3",
    projectName: "Mobile Analytics",
    usage: {
      cpu: 87,
      ram: 65,
      disk: 42,
      network: {
        in: "0.8 GB",
        out: "1.7 GB"
      }
    },
    specs: {
      cpuModel: "Intel Xeon E5-2697",
      ramType: "DDR4",
      diskType: "SSD",
      networkSpeed: "Up to 1 Gbps"
    }
  }
];

export function RecentServers() {
  return (
    <Card>
      <CardHeader className="p-6 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Server className="h-5 w-5" />
          Recent Servers
        </CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/vps/instances">
            View All
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {servers.map((server, index) => {
            const isRunning = server.status === "Running";
            const statusColor = isRunning 
              ? "text-emerald-500" 
              : server.status === "Warning" 
                ? "text-amber-500" 
                : "text-red-500";
              
            const bgStatusColor = isRunning 
              ? "bg-emerald-500" 
              : server.status === "Warning" 
                ? "bg-amber-500" 
                : "bg-red-500";
                
            return (
              <motion.div
                key={server.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 rounded-md border overflow-hidden">
                      <Image 
                        src={`/providers/${server.provider.toLowerCase()}.svg`}
                        alt={server.provider}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{server.name}</p>
                        <div className="flex items-center gap-1">
                          <div className={`h-2 w-2 rounded-full ${bgStatusColor}`}></div>
                          <span className={`text-xs ${statusColor}`}>{server.status}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {server.cpu} vCPU • {server.ram} GB RAM • {server.disk} GB SSD
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href={`/vps/instances/${server.id}`}>
                      Manage <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
} 