"use client";

import { MutableRefObject, FormEvent } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download, RefreshCw } from "lucide-react";

interface TerminalWindowProps {
  terminalRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  server: {
    name: string;
    ip: string;
  };
  terminalOutput: string[];
  currentCommand: string;
  setCurrentCommand: (command: string) => void;
  handleCommandSubmit: (e: FormEvent) => void;
  isConnected: boolean;
  isConnecting: boolean;
  handleReconnect: () => void;
}

export function TerminalWindow({
  terminalRef,
  inputRef,
  server,
  terminalOutput,
  currentCommand,
  setCurrentCommand,
  handleCommandSubmit,
  isConnected,
  isConnecting,
  handleReconnect
}: TerminalWindowProps) {
  return (
    <Card className="h-[calc(100vh-12rem)]">
      <CardHeader className="bg-black text-white p-3 flex flex-row items-center space-y-0 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm font-mono">
          {server.name} - SSH Terminal
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-white">
            <Copy className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-white">
            <Download className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-3rem)] flex flex-col">
        <div 
          ref={terminalRef}
          className="flex-1 bg-black text-green-400 p-4 font-mono text-sm overflow-auto"
        >
          {terminalOutput.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          {!isConnected && !isConnecting && (
            <div className="mt-4 p-2 bg-red-950 text-red-400 rounded border border-red-800">
              Connection lost. <Button onClick={handleReconnect} variant="link" className="text-red-400 p-0 h-auto">Reconnect</Button>
            </div>
          )}
          {isConnecting && (
            <div className="mt-4 p-2 bg-yellow-950 text-yellow-400 rounded border border-yellow-800 flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin" />
              Connecting to server...
            </div>
          )}
        </div>
        <form onSubmit={handleCommandSubmit} className="p-2 bg-black border-t border-gray-800">
          <div className="flex items-center">
            <span className="text-green-400 font-mono mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              className="flex-1 bg-transparent text-green-400 font-mono focus:outline-none"
              autoFocus
              disabled={!isConnected || isConnecting}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 