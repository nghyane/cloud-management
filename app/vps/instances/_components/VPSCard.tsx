"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  ChevronRight,
  HardDrive, 
  Power,
  Server,
  Terminal,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ServerType, ProviderKey } from "@/app/types/server";
import { motion } from "framer-motion";

interface VPSCardProps {
  server: ServerType;
}

export function VPSCard({ server }: VPSCardProps) {
  const isRunning = server.status === "Running";
  const providerKey = server.provider as ProviderKey;
  const serverId = server.id || server.name;
  
  // Status indicator
  const statusColor = isRunning 
    ? "bg-emerald-500" 
    : server.status === "Warning" 
      ? "bg-amber-500" 
      : "bg-red-500";
      
  const statusTextColor = isRunning 
    ? "text-emerald-500" 
    : server.status === "Warning" 
      ? "text-amber-500" 
      : "text-red-500";

  // Usage indicator thresholds
  const getResourceIndicator = (value: number) => {
    if (value > 85) return "bg-red-500";
    if (value > 65) return "bg-amber-500";
    return "bg-emerald-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="border overflow-hidden bg-white dark:bg-card/90 backdrop-blur-sm transition-all hover:shadow-lg">
        <CardHeader className="p-5 pb-0 flex flex-row items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className={`size-2.5 rounded-full ${statusColor} animate-pulse`} />
              <span className={`text-xs font-medium ${statusTextColor}`}>
                {server.status}
              </span>
            </div>
            <h3 className="font-semibold text-lg">{server.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {server.os}
            </p>
          </div>
          
          <div className="relative h-10 w-10">
            <Image 
              src={`/providers/${providerKey.toLowerCase()}.svg`} 
              alt={providerKey}
              fill
              className="object-contain"
            />
          </div>
        </CardHeader>
        
        <CardContent className="p-5 space-y-4">
          <div className="bg-muted/30 rounded-lg p-3">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-muted-foreground">CPU</p>
                <p className="text-sm font-medium">{server.cpu} vCPU</p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground">RAM</p>
                <p className="text-sm font-medium">{server.ram} GB</p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground">Storage</p>
                <p className="text-sm font-medium">{server.disk} GB</p>
              </div>
            </div>
            
            <div className="mt-3 flex items-center gap-1">
              <div className={`h-1.5 flex-1 rounded-full ${getResourceIndicator(server.usage.cpu)}`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${getResourceIndicator(server.usage.ram)}`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${getResourceIndicator(server.usage.disk)}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{server.region}</span>
            </div>
            <div>
              <Badge variant="outline" className="text-xs font-normal">
                {server.ip}
              </Badge>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-5 pt-0 flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            <Power className="h-4 w-4 mr-1.5" />
            {isRunning ? "Stop" : "Start"}
          </Button>
          
          <Button size="sm" variant="outline" className="flex-1">
            <Terminal className="h-4 w-4 mr-1.5" />
            SSH
          </Button>
          
          <Button 
            size="sm" 
            className="flex-1"
            asChild
          >
            <Link href={`/vps/instances/${serverId}`}>
              Manage
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 