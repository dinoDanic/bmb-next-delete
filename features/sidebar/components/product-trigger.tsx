"use client"

import React from "react"
import { ListIcon } from "lucide-react"

import { Box } from "@/components/primitives/box/box"
import { Cluster } from "@/components/primitives/cluster"

import { useSidebarStore } from "../stores/use-sidebar-store"

export const ProductTrigger = () => {
  const { isSidebarActive, setSidebarActive } = useSidebarStore()

  const color = isSidebarActive ? "text-primary" : "text-black"

  return (
    <Box
      position="relative"
      zIndex="40"
      onMouseEnter={() => setSidebarActive(true)}
      className="cursor-pointer"
      width="96"
    >
      <Cluster gap="xs" alignItems="center" className={color}>
        <ListIcon width="13px" />
        Proizvodi
      </Cluster>
    </Box>
  )
}
