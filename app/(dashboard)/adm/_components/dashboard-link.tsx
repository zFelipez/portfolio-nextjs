"use client";

 
import Link from "next/link";
import React from "react";

type DashboardButtonProps = {
  url: string;

  children: React.ReactNode;
};

export function DashboardLink({ url, children }: DashboardButtonProps) {
  return <Link href={url}>{children}</Link>;
}
