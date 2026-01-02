'use client'
import { Button } from "@/components/ui/button";
import { DashboardLink } from "./dashboard-link";
import { useState } from "react";

export function DashboardMenu() {
  const [firstBtnDisabled, setFirstBtnDisabled] = useState(false);
  const [secondBtnDisabled, setSecondBtnDisabled] = useState(false);

  return (
    <section className="flex  gap-[5%] items-center justify-center p-5">
      <Button
      onClick={ ()=> setFirstBtnDisabled((prev)=> {
        if ( secondBtnDisabled){
          setSecondBtnDisabled(false);
          return !prev
        };
        return !prev;
      })}
        disabled={firstBtnDisabled}
        className=" font-normal hover:cursor-pointer hover:bg-blue-tech"
      >
        <DashboardLink url="/adm/projects"> Projects Settings</DashboardLink>
      </Button>
      <Button
      onClick={ ()=> setSecondBtnDisabled((prev)=> {
        if ( firstBtnDisabled){
          setFirstBtnDisabled(false);
          return !prev;
        }
        return !prev;
      })}
        disabled={secondBtnDisabled}
        className=" font-normal hover:cursor-pointer hover:bg-blue-tech"
      >
        <DashboardLink url="/adm/personal/info"> Personal Info Settings</DashboardLink>
      </Button>
    </section>
  );
}
