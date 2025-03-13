import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { 
  ArrowRight, 
  Check, 
  CreditCard, 
  Download, 
  Receipt, 
  ShieldCheck, 
  Sparkles, 
  Zap 
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SubscriptionPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background z-10">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">
                  HexaCloud
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/billing">
                  Billing
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Subscription</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Current Plan */}
          <Card className="overflow-hidden border shadow-sm">
            <CardHeader className="bg-muted/30 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle>Current Plan</CardTitle>
                </div>
                <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary border-0">Pro</Badge>
              </div>
              <CardDescription>
                You are currently on the Pro plan, billed monthly.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4 border-b">
                <div>
                  <h3 className="text-2xl font-bold">Pro Plan</h3>
                  <p className="text-muted-foreground">Perfect for growing businesses</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Resources</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Up to 15 VPS instances</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>2TB storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Daily automated backups</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Support & Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>24/7 support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Custom domain management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Advanced monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 py-4 bg-muted/10 border-t flex flex-wrap gap-3 justify-between">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline" className="text-destructive">Cancel Subscription</Button>
            </CardFooter>
          </Card>
          
          {/* Payment Method */}
          <Card className="border shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Payment Method</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-12 w-16 items-center justify-center rounded-md">
                    <span className="font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Billing History */}
          <Card className="border shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Billing History</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="rounded-md overflow-hidden">
                <div className="grid grid-cols-4 bg-muted/50 px-4 py-3 text-sm font-medium">
                  <div>Date</div>
                  <div>Description</div>
                  <div>Amount</div>
                  <div className="text-right">Invoice</div>
                </div>
                <div className="divide-y">
                  {[
                    {
                      date: "Jun 1, 2024",
                      description: "Pro Plan - Monthly",
                      amount: "$49.00"
                    },
                    {
                      date: "May 1, 2024",
                      description: "Pro Plan - Monthly",
                      amount: "$49.00"
                    },
                    {
                      date: "Apr 1, 2024",
                      description: "Pro Plan - Monthly",
                      amount: "$49.00"
                    },
                    {
                      date: "Mar 1, 2024",
                      description: "Pro Plan - Monthly",
                      amount: "$49.00"
                    },
                    {
                      date: "Feb 1, 2024",
                      description: "Pro Plan - Monthly",
                      amount: "$49.00"
                    }
                  ].map((invoice, i) => (
                    <div key={i} className="grid grid-cols-4 items-center px-4 py-3">
                      <div className="text-sm">{invoice.date}</div>
                      <div className="text-sm">{invoice.description}</div>
                      <div className="text-sm font-medium">{invoice.amount}</div>
                      <div className="flex justify-end">
                        <Button size="sm" variant="ghost" className="h-8">
                          <Download className="h-3.5 w-3.5 mr-2" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Available Plans */}
          <Card className="border shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Available Plans</CardTitle>
              </div>
              <CardDescription>
                Choose the plan that best fits your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Starter Plan */}
                <Card className="overflow-hidden border border-muted transition-all hover:border-muted-foreground/20">
                  <CardHeader className="bg-muted/20 space-y-1">
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>For individuals and small projects</CardDescription>
                    <div className="mt-1">
                      <span className="text-3xl font-bold">$19</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Up to 5 VPS instances</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>500GB storage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Weekly backups</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Email support</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/10 border-t p-4">
                    <Button variant="outline" className="w-full" size="sm">
                      Downgrade
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Pro Plan (Current) */}
                <Card className="overflow-hidden border-2 border-primary shadow-md relative">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-primary text-primary-foreground">Current</Badge>
                  </div>
                  <CardHeader className="bg-primary/5 space-y-1">
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>Perfect for growing businesses</CardDescription>
                    <div className="mt-1">
                      <span className="text-3xl font-bold">$49</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Up to 15 VPS instances</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>2TB storage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Daily automated backups</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>24/7 support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Custom domain management</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/10 border-t p-4">
                    <Button disabled className="w-full" size="sm">Current Plan</Button>
                  </CardFooter>
                </Card>
                
                {/* Enterprise Plan */}
                <Card className="overflow-hidden border border-muted transition-all hover:border-muted-foreground/20">
                  <CardHeader className="bg-muted/20 space-y-1">
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large organizations and teams</CardDescription>
                    <div className="mt-1">
                      <span className="text-3xl font-bold">$149</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Unlimited VPS instances</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>10TB storage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Hourly automated backups</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Priority 24/7 support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Advanced security features</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Dedicated account manager</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/10 border-t p-4">
                    <Button variant="outline" className="w-full" size="sm">
                      Upgrade
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
