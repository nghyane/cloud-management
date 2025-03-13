"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Server, Database, Globe, Code } from "lucide-react";
import Link from "next/link";

export function DashboardActions() {
  const actions = [
    {
      title: "Deploy Server",
      description: "Create a new virtual server",
      icon: <Server className="h-5 w-5" />,
      href: "/vps/instances/new",
      color: "text-emerald-500"
    },
    {
      title: "Create Database",
      description: "Set up a managed database",
      icon: <Database className="h-5 w-5" />,
      href: "/databases/new",
      color: "text-blue-500"
    },
    {
      title: "Add Domain",
      description: "Configure a website domain",
      icon: <Globe className="h-5 w-5" />,
      href: "/domains/new",
      color: "text-violet-500"
    },
    {
      title: "Deploy App",
      description: "Deploy an application",
      icon: <Code className="h-5 w-5" />,
      href: "/apps/new",
      color: "text-amber-500"
    }
  ];

  return (
    <Card>
      <CardHeader className="p-6 pb-3">
        <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="grid grid-cols-1 gap-2">
          {actions.map((action, i) => (
            <Button 
              key={i}
              variant="outline" 
              className="justify-start h-auto py-3 px-4"
              asChild
            >
              <Link href={action.href}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full bg-muted ${action.color}`}>
                    {action.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 