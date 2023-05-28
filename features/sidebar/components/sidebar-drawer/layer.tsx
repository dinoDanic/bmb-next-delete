"use client"

import React from "react"
import { cva } from "class-variance-authority"

import { useSidebarStore } from "../../stores/use-sidebar-store"

export const Layer = () => {
  const { isSidebarActive, clearStore } = useSidebarStore()

  const onMouseOver = () => clearStore()

  const layerVariant = cva(
    "left-0 top-0 fixed w-screen h-screen bg-black/50 backdrop-blur-sm z-10 transition-all opacity-1",
    {
      variants: {
        visiblilty: {
          visible: "opacity-1",
          hidden: "opacity-0 pointer-events-none",
        },
      },
      defaultVariants: {
        visiblilty: "hidden",
      },
    }
  )

  return (
    <div
      className={layerVariant({
        visiblilty: isSidebarActive ? "visible" : "hidden",
      })}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    />
  )
}
