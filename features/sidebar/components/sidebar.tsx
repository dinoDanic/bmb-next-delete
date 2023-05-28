import React from "react"
import { Box, FlexBox } from "@/components"

import { ProductTrigger } from "./product-trigger"
import { SidebarDrawer } from "./sidebar-drawer"

export const Sidebar = () => {
  return (
    <FlexBox justifyContent="between">
      <Box p="2xl" position="relative">
        <ProductTrigger />
        <SidebarDrawer />
      </Box>
    </FlexBox>
  )
}
