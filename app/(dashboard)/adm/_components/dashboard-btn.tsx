"use client";

 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type DashboardButtonProps = {
  url: string;
  pathname: string;
  children: React.ReactNode;
};

export function DashboardLink({pathname,  url, children }: DashboardButtonProps) {
  return  <Button
        asChild
        className={`${pathname ===  url && "bg-transparent hover:bg-transparent"}`}
      >
        <Link href={url}>{children}</Link>
      </Button>
}
