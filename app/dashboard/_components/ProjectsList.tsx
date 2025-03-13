"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Folder, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectType } from "@/app/types/server";

interface ProjectsListProps {
  projects: ProjectType[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <CardTitle className="text-base font-medium">Projects</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {projects.map((project) => (
            <div key={project.id} className="p-4 px-6 hover:bg-muted/5 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{project.name}</span>
                </div>
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Server className="h-3 w-3" />
                  {project.servers}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-muted-foreground">Created: {project.created}</div>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/projects/${project.id}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 