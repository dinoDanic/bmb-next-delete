import React from "react"
import Link from "next/link"
import { Center, Stack } from "@/components"

import { routes } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Box } from "@/components/primitives/box/box"

import { Lougout } from "./lougout"

export default async function Home() {
  return (
    <section>
      <Center>
        <Button variant="secondary">Button</Button>
        <Icons.sun />
        <Stack>
          <Lougout />
          <Link href={routes.login}>Login</Link>
          <Box position="absolute" padding="lg" background="slate-900">
            box
          </Box>
        </Stack>
      </Center>
    </section>
  )
}
