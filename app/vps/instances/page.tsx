import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { VPSInstancesContent } from "./_components/VPSInstancesContent"
import { VPSHeader } from "./_components/VPSHeader"
import { VPSStatusCards } from "./_components/VPSStatusCards"

export default function VPSInstancesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <VPSHeader />

        <div className="flex-1 overflow-auto bg-gradient-to-b from-background/80 to-background dark:from-background/40 dark:to-background backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight mb-3">Cloud Server Management</h1>
              <p className="text-muted-foreground text-lg">
                Deploy and manage servers across multiple cloud providers with a simple interface
              </p>
            </div>
            
            <VPSStatusCards />
            <VPSInstancesContent />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 