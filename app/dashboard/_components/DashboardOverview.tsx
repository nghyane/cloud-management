"use client";

import { Card, CardContent } from "@/components/ui/card";
import { HardDrive, Server, Database, Cloud, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function DashboardOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const stats = [
    { 
      title: "Total Servers", 
      value: "10", 
      icon: <Server className="h-5 w-5 text-primary" />,
      change: "+2 this month",
      color: "bg-primary/10" 
    },
    { 
      title: "Active Services", 
      value: "24", 
      icon: <Activity className="h-5 w-5 text-emerald-500" />,
      change: "All systems operational",
      color: "bg-emerald-500/10" 
    },
    { 
      title: "Databases", 
      value: "8", 
      icon: <Database className="h-5 w-5 text-blue-500" />,
      change: "6 MySQL, 2 PostgreSQL",
      color: "bg-blue-500/10" 
    },
    { 
      title: "Total Storage", 
      value: "1.2 TB", 
      icon: <HardDrive className="h-5 w-5 text-purple-500" />,
      change: "560 GB available",
      color: "bg-purple-500/10" 
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="border overflow-hidden bg-white dark:bg-card/90 backdrop-blur-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 