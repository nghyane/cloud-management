"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export function VPSStatusCards() {
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

  const providerStats = [
    { provider: "aws", name: "AWS", servers: 4, status: "Healthy" },
    { provider: "digitalocean", name: "DigitalOcean", servers: 3, status: "Healthy" },
    { provider: "linode", name: "Linode", servers: 2, status: "Warning" },
    { provider: "gcp", name: "Google Cloud", servers: 1, status: "Healthy" }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {providerStats.map((item) => (
        <motion.div key={item.provider} variants={itemVariants}>
          <Card className="border overflow-hidden bg-white dark:bg-card/90 backdrop-blur-sm hover:shadow-md transition-all">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="relative h-12 w-12">
                <Image 
                  src={`/providers/${item.provider}.svg`} 
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium">{item.name}</p>
                  <div className={`h-2 w-2 rounded-full ${
                    item.status === "Healthy" ? "bg-emerald-500" : "bg-amber-500"
                  }`}></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.servers} server{item.servers !== 1 ? 's' : ''}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 