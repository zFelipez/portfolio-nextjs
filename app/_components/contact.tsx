"use client";
import { Button } from "@/components/ui/button"
import {
  
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Contact() {
  return (
   
      <form>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-secondary">Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1" className="text-secondary"> Nome </Label>
              <Input id="name-1" name="name" placeholder="Seu Nome" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1" className="text-secondary">Email</Label>
              <Input id="email-1" name="email" placeholder="seuemail@gmail.com" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="text-secondary hover:cursor-pointer">Cancelar</Button>
            </DialogClose>
            <Button type="submit" className=" hover:cursor-pointer hover:bg-blue-tech">Enviar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    
  )
}
