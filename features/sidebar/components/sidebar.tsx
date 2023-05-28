import React from "react"

import { Box } from "@/components/primitives/box"
import { FlexBox } from "@/components/primitives/flex-box"

import { ProductTrigger } from "./product-trigger"
import { SidebarDrawer } from "./sidebar-drawer/sidebar-drawer"

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
