"use client";
import { Button } from "@/components/ui/button";
import { DashboardLink } from "./dashboard-link";
import { useState } from "react";
import { House } from "lucide-react";

export function DashboardMenu() {
  const [firstBtnDisabled, setFirstBtnDisabled] = useState(false);
  const [admBtnDisabled, setAdmBtnDisabled] = useState(false);
  const [secondBtnDisabled, setSecondBtnDisabled] = useState(false);

  return (
    <section className="flex  gap-[5%] items-center justify-center p-5">
      <Button
        onClick={() =>
          setFirstBtnDisabled((prev) => {
            if (secondBtnDisabled || admBtnDisabled) {
              setSecondBtnDisabled(false);
              setAdmBtnDisabled(false);
              return !prev;
            }
            return !prev;
          })
        }
        disabled={firstBtnDisabled}
        className=" font-normal hover:cursor-pointer hover:bg-blue-tech"
      >
        <DashboardLink url="/adm/projects"> Projects Settings</DashboardLink>
      </Button>
      <Button
        onClick={() =>
          setAdmBtnDisabled((prev) => {
            if (firstBtnDisabled || secondBtnDisabled) {
              setFirstBtnDisabled(false);
              setSecondBtnDisabled(false);
              return !prev;
            }
            return !prev;
          })
        }
        disabled={admBtnDisabled}
        className=" font-normal hover:cursor-pointer hover:bg-blue-tech"
      >
        <DashboardLink url="/adm">
          {" "}
          <House />
        </DashboardLink>
      </Button>

      <Button
        onClick={() =>
          setSecondBtnDisabled((prev) => {
            if (firstBtnDisabled || admBtnDisabled) {
              setFirstBtnDisabled(false);
              setAdmBtnDisabled(false);
              return !prev;
            }
            return !prev;
          })
        }
        disabled={secondBtnDisabled}
        className=" font-normal hover:cursor-pointer hover:bg-blue-tech"
      >
        <DashboardLink url="/adm/personal/info">
          {" "}
          Personal Info Settings
        </DashboardLink>
      </Button>
    </section>
  );
}
