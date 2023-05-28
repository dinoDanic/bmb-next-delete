import React from "react"
import { Box, FlexBox } from "@/components"

import { ProductTrigger } from "./product-trigger"
import { SidebarDrawer } from "./sidebar-drawer"

export const Sidebar = () => {
  return (
    <FlexBox justifyContent="between" background="red-100">
      <Box p="2xl" position="relative" background="red-900">
        <ProductTrigger />
        <SidebarDrawer />
      </Box>
    </FlexBox>
  )
}
