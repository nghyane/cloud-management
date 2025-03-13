"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function CreateVPSCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      whileHover={{ y: -4 }}
    >
      <Card className="border border-dashed h-full min-h-[380px] bg-gradient-to-br from-muted/20 to-background backdrop-blur-[2px] hover:border-primary/30 hover:bg-muted/20 transition-all">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
          <div className="relative mb-6">
            <div className="absolute -inset-1 rounded-full bg-primary/10 blur-sm animate-pulse"></div>
            <div className="relative p-4 rounded-full bg-primary/10">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h3 className="text-xl font-medium mb-3">Deploy New Server</h3>
          <p className="text-muted-foreground mb-8 max-w-[240px]">
            Create a new cloud server on your preferred provider
          </p>
          
          <div className="grid grid-cols-3 gap-3 mb-8 w-full">
            <div className="flex flex-col items-center">
              <div className="relative h-10 w-10 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image 
                  src="/providers/aws.svg" 
                  alt="AWS" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs mt-1">AWS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-10 w-10 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image 
                  src="/providers/digitalocean.svg" 
                  alt="DigitalOcean" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs mt-1">DO</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-10 w-10 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image 
                  src="/providers/linode.svg" 
                  alt="Linode" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs mt-1">Linode</span>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="rounded-lg group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <Plus className="h-5 w-5 mr-2 relative z-10" />
            <span className="relative z-10">Deploy Server</span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
} 