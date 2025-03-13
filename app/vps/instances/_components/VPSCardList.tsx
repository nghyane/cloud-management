"use client";

import { VPSCard } from "./VPSCard";
import { CreateVPSCard } from "./CreateVPSCard";
import { ServerType } from "@/app/types/server";

interface VPSCardListProps {
  servers: ServerType[];
}

export function VPSCardList({ servers }: VPSCardListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {servers.map((server) => (
        <VPSCard key={server.id} server={server} />
      ))}
      <CreateVPSCard />
    </div>
  );
} 