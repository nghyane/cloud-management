"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Key, Lock } from "lucide-react";

interface ServerSecurityProps {
  server: string;
}

export function ServerSecurity({ server }: ServerSecurityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">SSH Keys</h3>
            <div className="border rounded-md p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">admin_key</p>
                      <p className="text-xs text-muted-foreground">Added on 2023-10-15</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">deploy_key</p>
                      <p className="text-xs text-muted-foreground">Added on 2023-10-20</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>
              <Button className="w-full mt-4">Add SSH Key</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Security Updates</h3>
            <div className="border rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-amber-500" />
                  <div>
                    <p className="font-medium">System Updates Available</p>
                    <p className="text-sm text-muted-foreground">3 security updates available</p>
                  </div>
                </div>
                <Button variant="outline">Apply Updates</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Password Policy</h3>
            <div className="border rounded-md p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Password expiration</p>
                  <p className="text-sm font-medium">90 days</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Minimum password length</p>
                  <p className="text-sm font-medium">12 characters</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Require special characters</p>
                  <p className="text-sm font-medium">Yes</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Configure Policy</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Two-Factor Authentication</h3>
            <div className="border rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="font-medium">2FA Enabled</p>
                    <p className="text-sm text-muted-foreground">Last verified: 2023-10-30</p>
                  </div>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 