"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServerType } from "@/app/types/server";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Power, Terminal } from "lucide-react";
import { motion } from "framer-motion";

interface VPSListViewProps {
  servers: ServerType[];
}

export function VPSListView({ servers }: VPSListViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-lg border bg-white dark:bg-card/90 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Server</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Specs</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {servers.map((server) => {
              const isRunning = server.status === "Running";
              const statusColor = isRunning 
                ? "text-emerald-500" 
                : server.status === "Warning" 
                  ? "text-amber-500" 
                  : "text-red-500";
              
              const badgeColor = isRunning 
                ? "bg-emerald-500/10 text-emerald-500" 
                : server.status === "Warning" 
                  ? "bg-amber-500/10 text-amber-500" 
                  : "bg-red-500/10 text-red-500";
                
              return (
                <TableRow key={server.id} className="group hover:bg-muted/30">
                  <TableCell className="font-medium">
                    <div>
                      <p className="font-medium">{server.name}</p>
                      <p className="text-xs text-muted-foreground">{server.region}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image 
                          src={`/providers/${server.provider.toLowerCase()}.svg`}
                          alt={server.provider}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{server.provider}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{server.cpu} vCPU • {server.ram} GB • {server.disk} GB</p>
                      <p className="text-xs text-muted-foreground">{server.os}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted px-2 py-1 rounded">{server.ip}</code>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={badgeColor}>
                      <div className="flex items-center gap-1.5">
                        <div className={`h-1.5 w-1.5 rounded-full ${isRunning ? 'bg-emerald-500' : server.status === 'Warning' ? 'bg-amber-500' : 'bg-red-500'} animate-pulse`}></div>
                        {server.status}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Power className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Terminal className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/vps/instances/${server.id}`} className="gap-1">
                          Manage
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
} 