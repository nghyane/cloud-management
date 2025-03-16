"use client";

import { TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TerminalHeaderProps {
  server: {
    name: string;
    ip: string;
    connectionMethod: string;
  };
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  serverId: string;
}

export function TerminalHeader({ 
  server, 
  isFullscreen, 
  toggleFullscreen, 
  serverId 
}: TerminalHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <TerminalIcon className="h-6 w-6" />
          Terminal
        </h1>
        <p className="text-muted-foreground">
          Connected to {server.name} ({server.ip}) via {server.connectionMethod}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={`/servers/${serverId}`}>
            <X className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
} 