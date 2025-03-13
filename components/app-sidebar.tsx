"use client"

import * as React from "react"
import {
  Activity,
  Cloud,
  CreditCard,
  Database,
  HardDrive,
  Home,
  Network,
  Plus,
  Server,
  Settings,
  Shield,
  Users,
  Cpu,
  Globe,
  Layers,
  BarChart,
  Lock,
  Zap,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

// Sample data for the cloud management platform
const data = {
  user: {
    name: "John Doe",
    email: "john@hexacloud.com",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "Personal",
      logo: Home,
      plan: "Pro",
    },
    {
      name: "Acme Inc",
      logo: Server,
      plan: "Enterprise",
    },
    {
      name: "Startup Co",
      logo: Database,
      plan: "Team",
    },
  ],
  // Cloud providers the user has connected
  providers: [
    {
      name: "AWS",
      icon: Cloud,
      url: "/providers/aws",
      color: "#FF9900",
    },
    {
      name: "Google Cloud",
      icon: Cloud,
      url: "/providers/gcp",
      color: "#4285F4",
    },
    {
      name: "Azure",
      icon: Cloud,
      url: "/providers/azure",
      color: "#0078D4",
    },
    {
      name: "Private Server",
      icon: Server,
      url: "/providers/private",
      color: "#6B7280",
    },
  ],
  projects: [
    {
      name: "Production",
      url: "/projects/production",
      icon: Server,
    },
    {
      name: "Staging",
      url: "/projects/staging",
      icon: Database,
    },
    {
      name: "Development",
      url: "/projects/development",
      icon: HardDrive,
    },
  ],
  navigation: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Resource Usage",
          url: "/dashboard/resources",
        },
        {
          title: "Cost Analysis",
          url: "/dashboard/costs",
        },
      ],
    },
    {
      title: "Compute",
      url: "/compute",
      icon: Cpu,
      items: [
        {
          title: "Virtual Machines",
          url: "/compute/vms",
        },
        {
          title: "Kubernetes",
          url: "/compute/kubernetes",
        },
        {
          title: "Serverless",
          url: "/compute/serverless",
        },
        {
          title: "Auto Scaling",
          url: "/compute/auto-scaling",
        },
      ],
    },
    {
      title: "Networking",
      url: "/networking",
      icon: Network,
      items: [
        {
          title: "VPC & Subnets",
          url: "/networking/vpc",
        },
        {
          title: "Load Balancers",
          url: "/networking/load-balancers",
        },
        {
          title: "DNS Management",
          url: "/networking/dns",
        },
        {
          title: "Firewalls",
          url: "/networking/firewalls",
        },
        {
          title: "CDN",
          url: "/networking/cdn",
        },
      ],
    },
    {
      title: "Storage",
      url: "/storage",
      icon: HardDrive,
      items: [
        {
          title: "Object Storage",
          url: "/storage/object",
        },
        {
          title: "Block Storage",
          url: "/storage/block",
        },
        {
          title: "File Storage",
          url: "/storage/file",
        },
        {
          title: "Backups",
          url: "/storage/backups",
        },
      ],
    },
    {
      title: "Databases",
      url: "/databases",
      icon: Database,
      items: [
        {
          title: "Relational",
          url: "/databases/relational",
        },
        {
          title: "NoSQL",
          url: "/databases/nosql",
        },
        {
          title: "Caching",
          url: "/databases/caching",
        },
        {
          title: "Data Warehouses",
          url: "/databases/warehouses",
        },
      ],
    },
    {
      title: "Monitoring",
      url: "/monitoring",
      icon: Activity,
      items: [
        {
          title: "Metrics",
          url: "/monitoring/metrics",
        },
        {
          title: "Logs",
          url: "/monitoring/logs",
        },
        {
          title: "Alerts",
          url: "/monitoring/alerts",
        },
        {
          title: "Health Checks",
          url: "/monitoring/health",
        },
      ],
    },
    {
      title: "Security",
      url: "/security",
      icon: Shield,
      items: [
        {
          title: "Identity & Access",
          url: "/security/iam",
        },
        {
          title: "Encryption",
          url: "/security/encryption",
        },
        {
          title: "Compliance",
          url: "/security/compliance",
        },
        {
          title: "Security Groups",
          url: "/security/groups",
        },
      ],
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard,
      items: [
        {
          title: "Cost Explorer",
          url: "/billing/costs",
        },
        {
          title: "Budgets",
          url: "/billing/budgets",
        },
        {
          title: "Invoices",
          url: "/billing/invoices",
        },
        {
          title: "Payment Methods",
          url: "/billing/payment-methods",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "Account",
          url: "/settings/account",
        },
        {
          title: "API Keys",
          url: "/settings/api-keys",
        },
        {
          title: "Preferences",
          url: "/settings/preferences",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
      ],
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* Cloud Providers Section */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Cloud Providers</SidebarGroupLabel>
          <SidebarMenu>
            {data.providers.map((provider) => (
              <SidebarMenuItem key={provider.name}>
                <SidebarMenuButton asChild>
                  <a href={provider.url}>
                    <provider.icon style={{ color: provider.color }} />
                    <span>{provider.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <Plus className="text-sidebar-foreground/70" />
                <span>Add Provider</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Projects Section */}
        <NavProjects projects={data.projects} />
        
        {/* Main Navigation */}
        <NavMain items={data.navigation} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
