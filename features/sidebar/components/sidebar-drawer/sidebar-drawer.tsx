import React from "react"

import { ClientTrigger } from "./client-trigger"
import { Layer } from "./layer"
import { SidebarContent } from "./sidebar-content"

export const SidebarDrawer = () => {
  return (
    <>
      <ClientTrigger>
        {/* this is not an error. Typescirpt dose not know about server components*/}
        {/* @ts-expect-error Server Component */}
        <SidebarContent />
      </ClientTrigger>
      <Layer />
    </>
  )
}