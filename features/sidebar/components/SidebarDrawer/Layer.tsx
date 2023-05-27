"use client"

import React from "react"

import { useSidebarStore } from "../../stores/useSidebarStore"
import { layerRecipe } from "./layer.css"

export const Layer = () => {
  const { isSidebarActive, clearStore } = useSidebarStore()

  const onMouseOver = () => clearStore()

  return (
    <div
      className={layerRecipe({
        visibility: isSidebarActive ? "vidible" : "hidden",
      })}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    />
  )
}
