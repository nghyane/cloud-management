import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { BackupHeader } from "./_components/BackupHeader"
import { BackupList } from "./_components/BackupList"

export default function BackupsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <BackupHeader />

        <div className="flex-1 overflow-auto">
          <div className="container mx-auto py-6 px-4">
            <BackupList />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 