import React from "react"

import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"

export default async function Home() {
  return (
    <section>
      <Box padding="2xl" background="test1" color="red-100">
        box
      </Box>
      <Stack gap="5xl" background="test1">
        <div>Element</div>
        <div>Element</div>
        <div>Element</div>
        <div>Element</div>
      </Stack>
    </section>
  )
}
