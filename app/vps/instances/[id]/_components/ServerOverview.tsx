"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Cpu, 
  HardDrive, 
  Network, 
  Server,
  Clock,
  Calendar,
  Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ServerOverviewProps {
  server: string;
}

export function ServerOverview({ server }: ServerOverviewProps) {
  // Use server ID to fetch/display data
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 space-y-4">
        <Card className="overflow-hidden">
          <CardHeader className="p-6 pb-3 border-b bg-muted/30">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              System Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-primary" />
                    <span className="font-medium">CPU Usage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-mono bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      42%
                    </motion.span>
                    <span className="text-xs text-muted-foreground">4 cores @ 2.3GHz</span>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={42} className="h-3 rounded-md" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex">
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">Memory Usage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-mono bg-blue-500/10 text-blue-500 px-2 py-1 rounded-md"
                    >
                      68%
                    </motion.span>
                    <span className="text-xs text-muted-foreground">2.72 GB / 4 GB</span>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={68} className="h-3 rounded-md bg-muted/50" indicatorClassName="bg-blue-500" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex">
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">Storage Usage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-mono bg-purple-500/10 text-purple-500 px-2 py-1 rounded-md"
                    >
                      57%
                    </motion.span>
                    <span className="text-xs text-muted-foreground">45.6 GB / 80 GB</span>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={57} className="h-3 rounded-md bg-muted/50" indicatorClassName="bg-purple-500" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex">
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                    <div className="h-full border-l border-background/50 ml-[25%]"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium">Network Traffic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-2 text-sm font-mono">
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                        ⬆️ 4.7 GB
                      </Badge>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                        ⬇️ 12.3 GB
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="h-3 rounded-md overflow-hidden flex bg-muted/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "27%" }}
                    transition={{ duration: 0.5 }}
                    className="bg-emerald-500 rounded-l-md"
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "73%" }}
                    transition={{ duration: 0.5 }}
                    className="bg-blue-500 rounded-r-md"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-muted/30 p-3 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Load Avg (1m)</div>
                <div className="text-lg font-medium">0.42</div>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Processes</div>
                <div className="text-lg font-medium">127</div>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Uptime</div>
                <div className="text-lg font-medium">14d 7h</div>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Temp</div>
                <div className="text-lg font-medium">48°C</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="p-6 pb-3">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Server className="h-5 w-5" />
              Server Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">CPU</span>
                  <span>2 vCPU (Intel Xeon)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Memory</span>
                  <span>4 GB DDR4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Storage</span>
                  <span>80 GB SSD</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Operating System</span>
                  <span>Ubuntu 22.04 LTS</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Kernel</span>
                  <span>5.15.0-58-generic</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Architecture</span>
                  <span>x86_64</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardHeader className="p-6 pb-3">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Server Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Provider</p>
              <p className="font-medium">AWS</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Region</p>
              <p className="font-medium">us-east-1 (N. Virginia)</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">IP Addresses</p>
              <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Public</Badge>
                  <span className="text-sm">192.168.1.1</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Private</Badge>
                  <span className="text-sm">10.0.0.4</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="p-6 pb-3">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Uptime & History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Current Uptime</p>
              <p className="font-medium">14 days, 7 hours</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Last Reboot</p>
              <p className="font-medium">May 1, 2023 - 09:43 AM</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Created</p>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-sm">April 15, 2023</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 