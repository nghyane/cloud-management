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
  type LucideIcon
} from "lucide-react"
import { usePathname } from "next/navigation"

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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarInset,
  SidebarProvider as SidebarContextProvider,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
      items: []
    },
    {
      title: "Servers",
      url: "/servers",
      icon: Server,
      items: [
        {
          title: "All Servers",
          url: "/servers",
        },
        {
          title: "Connect Server",
          url: "/servers/connect",
        }
      ]
    },
    {
      title: "Databases",
      url: "/servers/databases",
      icon: Database,
      items: [
        {
          title: "All Databases",
          url: "/servers/databases",
        },
        {
          title: "Backups",
          url: "/servers/backups",
        }
      ]
    },
    {
      title: "Storage",
      url: "/servers/files",
      icon: HardDrive,
      items: [
        {
          title: "File Manager",
          url: "/servers/files",
        },
        {
          title: "Backups",
          url: "/servers/backups",
        }
      ]
    },
    {
      title: "Monitoring",
      url: "/servers/monitoring",
      icon: Activity,
      items: [
        {
          title: "Overview",
          url: "/servers/monitoring",
        },
        {
          title: "Alerts",
          url: "/servers/alerts",
        }
      ]
    },
    {
      title: "Security",
      url: "/security",
      icon: Shield,
      items: [
        {
          title: "SSH Keys",
          url: "/security/ssh-keys",
        },
        {
          title: "Firewall",
          url: "/security/firewall",
        }
      ]
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/settings",
        },
        {
          title: "Providers",
          url: "/settings/providers",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        }
      ]
    }
  ],
}

// Define the navigation items type
type NavigationItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  items: {
    title: string;
    url: string;
  }[];
};

export function AppSidebar() {
  const pathname = usePathname();
  
  const navigation: NavigationItem[] = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      items: []
    },
    {
      title: "Servers",
      url: "/servers",
      icon: Server,
      items: [
        {
          title: "All Servers",
          url: "/servers",
        },
        {
          title: "Connect Server",
          url: "/servers/connect",
        }
      ]
    },
    {
      title: "Databases",
      url: "/servers/databases",
      icon: Database,
      items: [
        {
          title: "All Databases",
          url: "/servers/databases",
        },
        {
          title: "Backups",
          url: "/servers/backups",
        }
      ]
    },
    {
      title: "Storage",
      url: "/servers/files",
      icon: HardDrive,
      items: [
        {
          title: "File Manager",
          url: "/servers/files",
        },
        {
          title: "Backups",
          url: "/servers/backups",
        }
      ]
    },
    {
      title: "Monitoring",
      url: "/servers/monitoring",
      icon: Activity,
      items: [
        {
          title: "Overview",
          url: "/servers/monitoring",
        },
        {
          title: "Alerts",
          url: "/servers/alerts",
        }
      ]
    },
    {
      title: "Security",
      url: "/security",
      icon: Shield,
      items: [
        {
          title: "SSH Keys",
          url: "/security/ssh-keys",
        },
        {
          title: "Firewall",
          url: "/security/firewall",
        }
      ]
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/settings",
        },
        {
          title: "Providers",
          url: "/settings/providers",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        }
      ]
    }
  ];

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
              <SidebarMenuButton asChild>
                <a href="/providers/add">
                  <Plus className="text-sidebar-foreground/70" />
                  <span>Add Provider</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Projects Section */}
        <NavProjects projects={data.projects} />
        
        {/* Main Navigation */}
        <NavMain items={navigation} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  return (
    <SidebarContextProvider>
      {children}
    </SidebarContextProvider>
  );
}
