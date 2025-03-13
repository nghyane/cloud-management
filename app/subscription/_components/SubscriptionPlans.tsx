"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function SubscriptionPlans() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals or small projects",
      price: "$29",
      features: [
        "Up to 5 cloud servers",
        "Basic monitoring",
        "Email support",
        "Standard security features",
        "1 project"
      ],
      current: false,
      popular: false,
      variant: "outline" as const,
      color: "blue"
    },
    {
      name: "Professional",
      description: "For growing teams with advanced needs",
      price: "$89",
      features: [
        "Up to 25 cloud servers",
        "Advanced monitoring",
        "Priority email & chat support",
        "Enhanced security features",
        "5 projects",
        "Team access management",
        "API access"
      ],
      current: true,
      popular: true,
      variant: "default" as const,
      color: "primary"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      price: "$249",
      features: [
        "Unlimited cloud servers",
        "Premium monitoring & alerting",
        "24/7 phone, email & chat support",
        "Advanced security & compliance",
        "Unlimited projects",
        "Custom integrations",
        "Dedicated account manager"
      ],
      current: false,
      popular: false,
      variant: "outline" as const,
      color: "purple"
    }
  ];

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

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Available Plans</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="h-4 w-4" />
          <span>You can change your plan at any time</span>
        </div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-primary/30 shadow-md dark:shadow-primary/10' : ''}`}>
                {plan.current && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/20 shadow">
                      Current Plan
                    </Badge>
                  </div>
                )}
                <CardHeader className={`pb-3 ${plan.popular ? 'bg-primary/5 dark:bg-primary/10' : 'bg-muted/30'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
                      </p>
                    </div>
                    {plan.popular && (
                      <Badge className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/30">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <div className={`mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-${plan.color}-500/10`}>
                          <Check className={`h-3 w-3 text-${plan.color}-500`} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-muted/20 rounded-b-lg">
                  {plan.current ? (
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  ) : (
                    <Button variant={plan.variant} className="w-full group">
                      {plan.popular && (
                        <Zap className="mr-2 h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      )}
                      Switch to {plan.name}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 