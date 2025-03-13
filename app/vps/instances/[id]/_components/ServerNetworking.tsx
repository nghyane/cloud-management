"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServerNetworkingProps {
  server: string;
}

export function ServerNetworking({ server }: ServerNetworkingProps) {
  // Use mock data or fetch server details using the ID
  const serverIp = "192.168.1.101"; // Example IP or fetch using the server ID

  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">IP Addresses</h3>
            <div className="border rounded-md p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Public IPv4</p>
                  <p className="font-mono">{serverIp}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Private IPv4</p>
                  <p className="font-mono">10.0.1.5</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">IPv6</p>
                  <p className="font-mono">2001:0db8:85a3:0000:0000:8a2e:0370:7334</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Firewall Rules</h3>
            <div className="border rounded-md p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">SSH (TCP 22)</p>
                    <p className="text-xs text-muted-foreground">Allow from any IP</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">HTTP (TCP 80)</p>
                    <p className="text-xs text-muted-foreground">Allow from any IP</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">HTTPS (TCP 443)</p>
                    <p className="text-xs text-muted-foreground">Allow from any IP</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">MySQL (TCP 3306)</p>
                    <p className="text-xs text-muted-foreground">Allow from 192.168.1.0/24</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <Button className="w-full mt-4">Add Rule</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">DNS Records</h3>
            <div className="border rounded-md p-4">
              <div className="h-[100px] flex items-center justify-center">
                <p className="text-muted-foreground">DNS records would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 