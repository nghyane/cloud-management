"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Network, Shield, Wifi } from "lucide-react"

export function NetworkingOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">VPCs & Subnets</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Network className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">8</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            32 subnets configured
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Load Balancers</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Wifi className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">6</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            4 public, 2 internal
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">DNS Zones</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Globe className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">12</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            156 DNS records
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Firewalls</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Across all providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Shield className="h-4 w-4 text-muted-foreground mr-2" />
            <div className="text-2xl font-bold">15</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            48 security rules
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 