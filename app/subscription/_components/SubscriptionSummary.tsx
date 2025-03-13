"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CreditCard, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function SubscriptionSummary() {
  return (
    <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card/80 to-card via-primary/5">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Professional Plan</h2>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                </div>
                <p className="text-muted-foreground mt-1">Perfect for growing teams with advanced needs</p>
                <div className="mt-3">
                  <span className="text-2xl font-bold">$89</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-muted">
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Period</p>
                <p className="font-medium">May 15 - Jun 14, 2023</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-muted">
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Auto-renews</p>
                <p className="font-medium">June 15, 2023</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Manage Plan
              </Button>
              <Button variant="outline" className="w-full">Billing Portal</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 