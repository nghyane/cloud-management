"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SavedCommandsProps {
  setCurrentCommand: (command: string) => void;
  isConnected: boolean;
  isConnecting: boolean;
}

export function SavedCommands({ 
  setCurrentCommand, 
  isConnected, 
  isConnecting 
}: SavedCommandsProps) {
  const savedCommands = [
    "systemctl status nginx",
    "tail -f /var/log/nginx/error.log",
    "docker ps",
    "df -h",
    "free -m"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Commands</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {savedCommands.map((cmd, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm" 
              className="w-full justify-start font-mono text-xs"
              onClick={() => setCurrentCommand(cmd)}
              disabled={!isConnected || isConnecting}
            >
              {cmd}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 