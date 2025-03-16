"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Activity, 
  AlertTriangle, 
  Clock, 
  Download, 
  RefreshCw,
  Cpu,
  HardDrive,
  MemoryStick,
  Network,
  Thermometer,
  Wifi,
} from "lucide-react";

// Sample server data for demonstration
const getServerById = (id: string) => {
  return {
    id,
    name: "Production API Server",
    provider: "aws",
    region: "us-east-1",
    status: "online",
    ip: "54.23.212.100",
  };
};

// Sample monitoring data
const generateTimeSeriesData = (hours = 24, min = 0, max = 100, trend = 'stable') => {
  const data = [];
  let value = Math.floor(min + Math.random() * (max - min) / 2);
  
  for (let i = 0; i < hours; i++) {
    // Add some randomness based on trend
    let change;
    if (trend === 'increasing') {
      change = Math.random() * 10 - 3; // More likely to increase
    } else if (trend === 'decreasing') {
      change = Math.random() * 10 - 7; // More likely to decrease
    } else if (trend === 'spike') {
      change = (i === Math.floor(hours / 2)) ? 40 : Math.random() * 10 - 5;
    } else {
      change = Math.random() * 10 - 5; // Stable with fluctuations
    }
    
    value = Math.max(min, Math.min(max, value + change));
    
    data.push({
      time: new Date(Date.now() - (hours - i) * 3600000).toISOString(),
      value: Math.floor(value),
    });
  }
  
  return data;
};

const monitoringData = {
  cpu: {
    current: 42,
    average: 38,
    peak: 87,
    data: generateTimeSeriesData(24, 10, 100, 'spike'),
  },
  memory: {
    current: 68,
    average: 65,
    peak: 72,
    data: generateTimeSeriesData(24, 50, 100, 'increasing'),
  },
  disk: {
    current: 76,
    average: 75,
    peak: 76,
    data: generateTimeSeriesData(24, 70, 100, 'stable'),
  },
  network: {
    inbound: {
      current: 2.4,
      average: 1.8,
      peak: 8.7,
      data: generateTimeSeriesData(24, 0, 10, 'stable'),
    },
    outbound: {
      current: 1.2,
      average: 0.9,
      peak: 4.3,
      data: generateTimeSeriesData(24, 0, 10, 'stable'),
    },
  },
  temperature: {
    current: 48,
    average: 45,
    peak: 62,
    data: generateTimeSeriesData(24, 35, 80, 'stable'),
  },
};

// Sample alerts
const alerts = [
  {
    id: "alert-1",
    type: "warning",
    message: "CPU usage exceeded 80% for 5 minutes",
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    resolved: true,
  },
  {
    id: "alert-2",
    type: "critical",
    message: "Server unreachable for 30 seconds",
    timestamp: new Date(Date.now() - 3600000 * 8).toISOString(),
    resolved: true,
  },
  {
    id: "alert-3",
    type: "warning",
    message: "Disk usage above 75%",
    timestamp: new Date(Date.now() - 3600000 * 1).toISOString(),
    resolved: false,
  },
];

export default function ServerMonitoringPage() {
  const params = useParams();
  const serverId = params.id as string;
  const server = getServerById(serverId);
  const [timeRange, setTimeRange] = useState("24h");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  // This would be a real chart component in a production app
  const ChartPlaceholder = ({ data, label, color = "blue" }: { data: any[], label: string, color?: string }) => (
    <div className="w-full h-64 bg-muted/20 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        Chart visualization would appear here
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
        <span className="text-sm text-muted-foreground">0h</span>
        <span className="text-sm text-muted-foreground">{timeRange}</span>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Activity className="h-6 w-6" />
            Monitoring
          </h1>
          <p className="text-muted-foreground">
            Performance metrics for {server.name} ({server.ip})
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last Hour</SelectItem>
              <SelectItem value="6h">Last 6 Hours</SelectItem>
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleRefresh}>
            {isRefreshing ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            <span>Refresh</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              CPU Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{monitoringData.cpu.current}%</div>
            <div className="text-xs text-muted-foreground mt-1">
              Avg: {monitoringData.cpu.average}% | Peak: {monitoringData.cpu.peak}%
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${monitoringData.cpu.current}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MemoryStick className="h-4 w-4" />
              Memory Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{monitoringData.memory.current}%</div>
            <div className="text-xs text-muted-foreground mt-1">
              Avg: {monitoringData.memory.average}% | Peak: {monitoringData.memory.peak}%
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
              <div 
                className="bg-purple-500 h-2 rounded-full" 
                style={{ width: `${monitoringData.memory.current}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <HardDrive className="h-4 w-4" />
              Disk Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{monitoringData.disk.current}%</div>
            <div className="text-xs text-muted-foreground mt-1">
              Avg: {monitoringData.disk.average}% | Peak: {monitoringData.disk.peak}%
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
              <div 
                className="bg-amber-500 h-2 rounded-full" 
                style={{ width: `${monitoringData.disk.current}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="cpu" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="cpu">CPU</TabsTrigger>
          <TabsTrigger value="memory">Memory</TabsTrigger>
          <TabsTrigger value="disk">Disk</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="temperature">Temperature</TabsTrigger>
        </TabsList>
        <TabsContent value="cpu">
          <Card>
            <CardHeader>
              <CardTitle>CPU Usage</CardTitle>
              <CardDescription>
                CPU utilization over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder data={monitoringData.cpu.data} label="CPU Usage %" color="blue" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="memory">
          <Card>
            <CardHeader>
              <CardTitle>Memory Usage</CardTitle>
              <CardDescription>
                Memory utilization over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder data={monitoringData.memory.data} label="Memory Usage %" color="purple" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="disk">
          <Card>
            <CardHeader>
              <CardTitle>Disk Usage</CardTitle>
              <CardDescription>
                Disk utilization over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder data={monitoringData.disk.data} label="Disk Usage %" color="amber" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="network">
          <Card>
            <CardHeader>
              <CardTitle>Network Traffic</CardTitle>
              <CardDescription>
                Network traffic over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Network className="h-4 w-4" />
                      Inbound Traffic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{monitoringData.network.inbound.current} MB/s</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Avg: {monitoringData.network.inbound.average} MB/s | Peak: {monitoringData.network.inbound.peak} MB/s
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Wifi className="h-4 w-4" />
                      Outbound Traffic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{monitoringData.network.outbound.current} MB/s</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Avg: {monitoringData.network.outbound.average} MB/s | Peak: {monitoringData.network.outbound.peak} MB/s
                    </div>
                  </CardContent>
                </Card>
              </div>
              <ChartPlaceholder data={monitoringData.network.inbound.data} label="Network Traffic MB/s" color="green" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="temperature">
          <Card>
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
              <CardDescription>
                System temperature over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder data={monitoringData.temperature.data} label="Temperature °C" color="red" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Recent Alerts
          </CardTitle>
          <CardDescription>
            System alerts and notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          {alerts.length > 0 ? (
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className={`p-2 rounded-full ${
                    alert.type === 'critical' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{alert.message}</h4>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {new Date(alert.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        alert.resolved 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {alert.resolved ? 'Resolved' : 'Active'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No alerts in the selected time period
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 