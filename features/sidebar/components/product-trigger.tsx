"use client"

import React from "react"
import { ListIcon } from "lucide-react"

import { Box } from "@/components/primitives/box/box"
import { Cluster } from "@/components/primitives/cluster"
import { Text } from "@/components/typography/text"

import { useSidebarStore } from "../stores/useSidebarStore"

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
        <Text size="sm" weight="medium">
          Proizvodi
        </Text>
      </Cluster>
    </Box>
  )
}
