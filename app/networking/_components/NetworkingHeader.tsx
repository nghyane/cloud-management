"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter, Plus, RefreshCw } from "lucide-react"

export function NetworkingHeader() {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <div className="font-semibold">Networking</div>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Providers</SelectItem>
                <SelectItem value="aws">AWS</SelectItem>
                <SelectItem value="gcp">Google Cloud</SelectItem>
                <SelectItem value="azure">Azure</SelectItem>
                <SelectItem value="private">Private Server</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Resource Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="vpc">VPC & Subnets</SelectItem>
                <SelectItem value="lb">Load Balancers</SelectItem>
                <SelectItem value="dns">DNS Management</SelectItem>
                <SelectItem value="firewall">Firewalls</SelectItem>
                <SelectItem value="cdn">CDN</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <div className="ml-auto flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Resource
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 