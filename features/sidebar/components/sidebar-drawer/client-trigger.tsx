"use client"

import React, { FC, PropsWithChildren } from "react"
import { cva } from "class-variance-authority"

import { Box } from "@/components/primitives/box/box"

import { useSidebarStore } from "../../stores/useSidebarStore"

export const ClientTrigger: FC<PropsWithChildren> = ({ children }) => {
  const { isSidebarActive } = useSidebarStore()

  const state = isSidebarActive ? "active" : undefined

  const sidebarVariants = cva("translate-x-0 transition-all duration-400", {
    variants: {
      state: {
        active: "translate-x-[105%]",
      },
    },
  })

  return (
    <Box
      width="full"
      position="absolute"
      zIndex="20"
      top="0"
      height="screen"
      className="left-[-105%]"
    >
      <div
        className={sidebarVariants({
          state,
        })}
      >
        {children}
      </div>
    </Box>
  )
}
