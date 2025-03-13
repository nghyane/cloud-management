"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, PlusCircle, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function PaymentMethods() {
  const paymentMethods = [
    {
      id: "pm_1",
      type: "Visa",
      last4: "4242",
      expiry: "04/25",
      isDefault: true
    },
    {
      id: "pm_2",
      type: "Mastercard",
      last4: "8888",
      expiry: "12/24",
      isDefault: false
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Payment Methods</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div 
              key={method.id}
              className={`p-3 rounded-lg border flex items-center justify-between
                ${method.isDefault ? 'bg-muted/30 border-primary/20' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-12 rounded-md overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={`/payment/${method.type.toLowerCase()}.svg`}
                    alt={method.type}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">
                      {method.type} •••• {method.last4}
                    </p>
                    {method.isDefault && (
                      <Badge variant="outline" className="text-xs h-5 bg-primary/10 text-primary border-primary/20">
                        Default
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">Expires {method.expiry}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-2 gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Payment Method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 