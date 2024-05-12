"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export const ProjectsDropDown = ()=> {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className="font-extrabold bg-black text-white">
          Projects</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Choose project type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top"><a href='https://imgbot.vercel.app'>Image bot</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom"><a href='https://fixupe.com'>CRM</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right"><a href='https://cryptoaitrader.vercel.app'>AI Trader</a></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
