import React from "react"
import { Stack } from "@/components"

import { Heading, Text } from "@/components/typography"

const page = () => {
  return (
    <Stack>
      <Heading level="2">Text</Heading>
      <Text variant="default">Default</Text>
      <Text variant="lg">Lartestge</Text>
      <Text variant="sm">Small</Text>
      <Text variant="lead">Lead</Text>
      <Text variant="muted">Muted</Text>
      <Text variant="blockQute">
        Block quite, Lorem ipsum dolor sit amet, qui minim labore adipisicing
        minim sint cillum sint consectetur cupidatat.
      </Text>
      <Text variant="inlineCode">Inline code</Text>
    </Stack>
  )
}

export default page
