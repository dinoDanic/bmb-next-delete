import React from "react"
import { FlexBox } from "@kodiui/ui"

import { Products } from "./components"

export const Sidebar = () => {
  return (
    <FlexBox justifyContent="space-between">
      <Products />
    </FlexBox>
  )
}
