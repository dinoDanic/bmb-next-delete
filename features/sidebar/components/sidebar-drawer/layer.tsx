"use client"

import React from "react"
import { cva } from "class-variance-authority"

import { useSidebarStore } from "../../stores/useSidebarStore"

export const Layer = () => {
  const { isSidebarActive, clearStore } = useSidebarStore()

  const onMouseOver = () => clearStore()

  const layerVariant = cva(
    "left-0 top-0 fixed w-screen h-screen bg-black/50 z-10 transition-all opacity-1",
    {
      variants: {
        visiblilty: {
          visible: "opacity-1",
          hidden: "hidden",
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
