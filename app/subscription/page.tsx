import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { SubscriptionHeader } from "./_components/SubscriptionHeader";
import { SubscriptionPlans } from "./_components/SubscriptionPlans";
import { BillingInfo } from "./_components/BillingInfo";
import { PaymentMethods } from "./_components/PaymentMethods";
import { BillingHistory } from "./_components/BillingHistory";
import { SubscriptionSummary } from "./_components/SubscriptionSummary";
import { SubscriptionUsage } from "./_components/SubscriptionUsage";
import { motion } from "framer-motion";

export default function SubscriptionPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <SubscriptionHeader />
        
        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 max-w-3xl mx-auto"
            >
              <h1 className="text-3xl font-semibold tracking-tight mb-2">Subscription & Billing</h1>
              <p className="text-muted-foreground text-lg">
                Manage your subscription plan, payment methods, and billing information
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <SubscriptionSummary />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <SubscriptionPlans />
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <motion.div 
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <BillingInfo />
                <SubscriptionUsage />
                <BillingHistory />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <PaymentMethods />
              </motion.div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 