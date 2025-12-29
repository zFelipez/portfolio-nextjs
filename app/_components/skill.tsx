import { Badge } from "@/components/ui/badge";

import React from "react";

type SkillProps = {
  children: React.ReactNode;
  name: string;
};

export function Skill({ children, name }: SkillProps) {
  return (
    <div
      className=" h-72 w-72  shrink-0 bg-accent-foreground flex flex-col items-center text-center text-secondary justify-center text-4xl gap-1 rounded-xl  
        hover:bg-blue-tech hover: shadow-lg hover:shadow-gold/50 border   border-blue-tech hover:text-primary transition-all duration-300 ease-in-out cursor-pointer hover:scale-105
        "
    >
      <div className="flex items-center gap-1">
        {children}
        {name}
      </div>
      <Badge
        className="text-xs bg-linear-to-b
  from-accent-foreground to-background text-secondary"
        variant="secondary"
      >
        Avançado
      </Badge>
    </div>
  );
}
