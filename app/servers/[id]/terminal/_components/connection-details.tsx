"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Key } from "lucide-react";

interface ConnectionDetailsProps {
  server: {
    ip: string;
    connectionMethod: string;
  };
  selectedKey: string;
  setSelectedKey: (key: string) => void;
  sshKeys: {
    id: string;
    name: string;
    fingerprint: string;
    created: string;
    lastUsed: string;
  }[];
}

export function ConnectionDetails({ 
  server, 
  selectedKey, 
  setSelectedKey, 
  sshKeys 
}: ConnectionDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connection Details</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-4">
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-muted-foreground">Host</dt>
            <dd className="text-sm">{server.ip}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-muted-foreground">User</dt>
            <dd className="text-sm">root</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-muted-foreground">Port</dt>
            <dd className="text-sm">22</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-muted-foreground">Auth Method</dt>
            <dd className="text-sm">{server.connectionMethod}</dd>
          </div>
          <div className="space-y-2">
            <dt className="text-sm font-medium text-muted-foreground">SSH Key</dt>
            <dd>
              <Select value={selectedKey} onValueChange={setSelectedKey}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select SSH Key" />
                </SelectTrigger>
                <SelectContent>
                  {sshKeys.map((key) => (
                    <SelectItem key={key.id} value={key.id}>
                      <div className="flex items-center gap-2">
                        <Key className="h-3.5 w-3.5" />
                        <span>{key.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </dd>
          </div>
          <div className="pt-2">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="/vps/ssh-keys">
                Manage SSH Keys
              </a>
            </Button>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
} 