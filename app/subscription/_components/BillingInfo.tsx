"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  CalendarClock,
  Edit,
  Users,
  User,
  Mail,
  MapPin
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function BillingInfo() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>
            Manage your billing information and company details
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Edit className="mr-2 h-4 w-4" /> 
          Edit
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Company Details</h3>
                  <p className="text-sm">Acme Corporation</p>
                  <p className="text-sm text-muted-foreground">Tax ID: US123456789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Team Size</h3>
                  <p className="text-sm">25 users ($10 per user)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CalendarClock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Billing Cycle</h3>
                  <p className="text-sm">Monthly (Next billing: June 15, 2023)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3">Billing Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">John Smith</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">john@acmecorp.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">
                    <p>123 Business Street</p>
                    <p>San Francisco, CA 94103</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-sm font-medium mb-3">Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Professional Plan</span>
                <span className="text-sm">$89.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">25 Users</span>
                <span className="text-sm">$250.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Add-ons</span>
                <span className="text-sm">$29.00</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Monthly Total</span>
                <span>$368.00</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 