"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface CommandHistoryProps {
  commandHistory: string[];
  setCurrentCommand: (command: string) => void;
  isConnected: boolean;
  isConnecting: boolean;
}

export function CommandHistory({ 
  commandHistory, 
  setCurrentCommand, 
  isConnected, 
  isConnecting 
}: CommandHistoryProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Command History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {commandHistory.length > 0 ? (
            commandHistory.slice(-5).reverse().map((cmd, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start font-mono text-xs"
                onClick={() => setCurrentCommand(cmd)}
                disabled={!isConnected || isConnecting}
              >
                {cmd}
              </Button>
            ))
          ) : (
            <p className="text-xs text-muted-foreground text-center py-2">
              No commands in history
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 