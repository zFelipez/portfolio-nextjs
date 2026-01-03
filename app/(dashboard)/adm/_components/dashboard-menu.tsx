"use client";
import { usePathname } from "next/navigation";
import { DashboardLink } from "./dashboard-btn";
import { Home } from "lucide-react";


export function DashboardMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full gap-2 items-center justify-center p-5">
       <DashboardLink pathname={pathname} url="/adm" >Projects Settings </DashboardLink>
       <DashboardLink pathname={pathname} url="/adm/projects" > <Home/></DashboardLink>
       <DashboardLink pathname={pathname} url="/adm/personal/info" > Personal Info </DashboardLink>

      
    </nav>
  );
}
