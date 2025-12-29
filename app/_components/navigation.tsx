"use client";

import * as React from "react";
import Link from "next/link";

import gsap from "gsap";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Contact } from "./contact";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Projeto Barbearia ",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Projeto Barbearia 2 ",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Projeto Barbearia 3 ",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Mais Projetos ...",
    href: "/",
    description: "Veja mais projetos que fiz",
  },
];

export type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
};

type NavigationProps = {
  data: Repo[];
};

export function Navigation({ data }: NavigationProps) {
  console.log(data);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 1,
        y: 30,
      });
    }
  }, []);

  return (
    <div
      className="  w-full flex justify-center bg-accent-foreground top-0 sticky p-6 rounded-b-2xl  bg-linear-to-b
  from-accent-foreground to-background transition-all duration-300 ease-in-out border-b border-gold/30  z-20"
    >
      <NavigationMenu className=" w-full" ref={ref}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent className="w-full">
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                <ListItem href="#" title="Sobre Mim" className="  ">
                  Informações sobre mim
                </ListItem>
                <ListItem href="#techs" title="Tecnologias">
                  Tecnologias com as quais tenho conhecimento.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="?">
                  ?
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" hover:cursor-pointer  font-eb-garamond ">
              Projetos
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-background">
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {data.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.name}
                    href={"/projects/all"}
                  >
                    {item.description}
                  </ListItem>
                ))}
                <ListItem
                    key={4}
                    title='Veja mais projetos'
                    href={"/projects/all"}
                    className="h-max"
                  >
                    
                  </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="border border-gold/30 hover:cursor-pointer     hover:bg-blue-tech font-eb-garamond">
                  Contato
                </Button>
              </DialogTrigger>
              <Contact></Contact>
            </Dialog>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium text-gold capitalize">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
