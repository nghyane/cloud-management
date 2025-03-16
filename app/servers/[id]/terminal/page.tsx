"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { TerminalHeader } from "./_components/terminal-header";
import { TerminalWindow } from "./_components/terminal-window";
import { ConnectionDetails } from "./_components/connection-details";
import { SavedCommands } from "./_components/saved-commands";
import { CommandHistory } from "./_components/command-history";
import { getServerById, sshKeys } from "./_components/data";

export default function ServerTerminalPage() {
  const params = useParams();
  const id = params.id as string;
  const server = getServerById(id);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [selectedKey, setSelectedKey] = useState(sshKeys[0].id);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    `Connected to ${server.name} (${server.ip})`,
    "Last login: Wed Jun 28 2023 14:32:45 GMT+0000 (UTC)",
    "Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-1019-aws x86_64)",
    "",
    " * Documentation:  https://help.ubuntu.com",
    " * Management:     https://landscape.canonical.com",
    " * Support:        https://ubuntu.com/advantage",
    "",
    "root@server:~# ",
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentCommand.trim()) return;
    
    // Add command to history
    setCommandHistory((prev) => [...prev, currentCommand]);
    
    // Simulate command output
    let output: string[] = [];
    
    if (currentCommand === "ls") {
      output = ["app  config  logs  node_modules  package.json  public  README.md"];
    } else if (currentCommand === "whoami") {
      output = ["root"];
    } else if (currentCommand === "df -h") {
      output = [
        "Filesystem      Size  Used Avail Use% Mounted on",
        "/dev/root        80G   24G   56G  30% /",
        "tmpfs           7.9G     0  7.9G   0% /dev/shm",
        "/dev/nvme1n1    100G   45G   55G  45% /data"
      ];
    } else if (currentCommand === "uptime") {
      output = [" 14:32:45 up 45 days,  7:12,  1 user,  load average: 0.08, 0.12, 0.10"];
    } else if (currentCommand === "ps aux") {
      output = [
        "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND",
        "root         1  0.0  0.1 169936 11876 ?        Ss   May12   0:22 /sbin/init",
        "root       123  0.0  0.1  18504  7456 ?        Ss   May12   0:00 /lib/systemd/systemd-journald",
        "root       433  0.0  0.5 1274428 42576 ?       Ssl  May12   1:54 /usr/bin/node /app/server.js",
        "postgres   612  0.1  1.2 213968 98760 ?        Ss   May12  45:23 postgres: writer process",
        "nginx      843  0.0  0.1  14228  9456 ?        S    May12   0:02 nginx: worker process"
      ];
    } else if (currentCommand === "clear") {
      setTerminalOutput(["root@server:~# "]);
      setCurrentCommand("");
      return;
    } else if (currentCommand.startsWith("cd ")) {
      output = []; // cd command doesn't produce output
    } else if (currentCommand === "help") {
      output = [
        "Available commands for demo:",
        "  ls         - List directory contents",
        "  whoami     - Display current user",
        "  df -h      - Show disk usage",
        "  uptime     - Show system uptime",
        "  ps aux     - List running processes",
        "  clear      - Clear terminal screen",
        "  cd [dir]   - Change directory",
        "  help       - Show this help message"
      ];
    } else {
      output = [`Command not found: ${currentCommand}`];
    }
    
    // Update terminal output
    setTerminalOutput((prev) => [
      ...prev.slice(0, -1), // Remove the last prompt
      `root@server:~# ${currentCommand}`, // Add command with prompt
      ...output, // Add command output
      "root@server:~# " // Add new prompt
    ]);
    
    setCurrentCommand("");
    
    // Scroll to bottom of terminal
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // Refocus input after toggling fullscreen
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };
  
  const handleReconnect = () => {
    setIsConnecting(true);
    setIsConnected(false);
    setTerminalOutput([
      "Disconnected from server. Attempting to reconnect...",
    ]);
    
    // Simulate reconnection
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      setTerminalOutput([
        "Connection established to server.",
        `Connected to ${server.name} (${server.ip})`,
        "Last login: Wed Jun 28 2023 14:32:45 GMT+0000 (UTC)",
        "Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-1019-aws x86_64)",
        "",
        "root@server:~# ",
      ]);
    }, 2000);
  };
  
  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={`container mx-auto p-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : ''}`}>
      <TerminalHeader 
        server={server} 
        isFullscreen={isFullscreen} 
        toggleFullscreen={toggleFullscreen} 
        serverId={id}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className={`lg:col-span-3 ${isFullscreen ? 'col-span-4' : ''}`}>
          <TerminalWindow
            terminalRef={terminalRef}
            inputRef={inputRef}
            server={server}
            terminalOutput={terminalOutput}
            currentCommand={currentCommand}
            setCurrentCommand={setCurrentCommand}
            handleCommandSubmit={handleCommandSubmit}
            isConnected={isConnected}
            isConnecting={isConnecting}
            handleReconnect={handleReconnect}
          />
        </div>

        {!isFullscreen && (
          <div className="space-y-6">
            <ConnectionDetails 
              server={server} 
              selectedKey={selectedKey} 
              setSelectedKey={setSelectedKey} 
              sshKeys={sshKeys}
            />

            <SavedCommands 
              setCurrentCommand={setCurrentCommand} 
              isConnected={isConnected} 
              isConnecting={isConnecting}
            />
            
            <CommandHistory 
              commandHistory={commandHistory} 
              setCurrentCommand={setCurrentCommand} 
              isConnected={isConnected} 
              isConnecting={isConnecting}
            />
          </div>
        )}
      </div>
    </div>
  );
} 