"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download,
  ExternalLink,
  FileText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BillingHistory() {
  const invoices = [
    {
      id: "INV-2023-005",
      date: "May 15, 2023",
      amount: "$368.00",
      status: "Paid",
      statusColor: "emerald"
    },
    {
      id: "INV-2023-004",
      date: "April 15, 2023",
      amount: "$368.00",
      status: "Paid",
      statusColor: "emerald"
    },
    {
      id: "INV-2023-003",
      date: "March 15, 2023",
      amount: "$289.00",
      status: "Paid",
      statusColor: "emerald"
    },
    {
      id: "INV-2023-002",
      date: "February 15, 2023",
      amount: "$289.00",
      status: "Paid",
      statusColor: "emerald"
    },
    {
      id: "INV-2023-001",
      date: "January 15, 2023",
      amount: "$289.00",
      status: "Paid",
      statusColor: "emerald"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Billing History</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {invoices.map((invoice) => (
            <div 
              key={invoice.id}
              className="p-3 rounded-lg border flex items-center justify-between hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{invoice.id}</p>
                  <p className="text-xs text-muted-foreground">{invoice.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge 
                  variant="outline"
                  className={`bg-${invoice.statusColor}-500/10 text-${invoice.statusColor}-500 border-${invoice.statusColor}-500/20`}
                >
                  {invoice.status}
                </Badge>
                <span className="text-sm font-medium">{invoice.amount}</span>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-4">
          View All Invoices
        </Button>
      </CardContent>
    </Card>
  );
} 