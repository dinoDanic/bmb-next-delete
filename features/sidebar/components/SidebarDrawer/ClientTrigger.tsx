"use client"

import React, { FC, PropsWithChildren } from "react"
import { Box } from "@kodiui/ui"

import { useSidebarStore } from "../../stores/useSidebarStore"
import { sideBarOpen } from "./sidebarDrawer.css"

export const ClientTrigger: FC<PropsWithChildren> = ({ children }) => {
  const { isSidebarActive } = useSidebarStore()

  const state = isSidebarActive ? "active" : undefined

  return (
    <Box
      width="full"
      position="absolute"
      __left="-105%"
      height="screen"
      top="0"
      zIndex="20"
    >
      <div
        className={sideBarOpen({
          state,
        })}
      >
        {children}
      </div>
    </Box>
  )
}
