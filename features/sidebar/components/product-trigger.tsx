"use client"

import React from "react"
import { Box } from "@/components"
import { useSidebarStore } from "@/features/sidebar"

import { Text } from "@/components/typography"

export const ProductTrigger = () => {
  const { isSidebarActive, setSidebarActive } = useSidebarStore()

  const color = isSidebarActive ? "text-primary" : "text-black"

  return (
    <Box
      position="relative"
      zIndex="40"
      onMouseEnter={() => setSidebarActive(true)}
      className="cursor-pointer "
    >
      <Text className={color}>Proizvodi</Text>
    </Box>
  )
}
