import React from "react"
import Link from "next/link"
import { Center, Stack } from "@/components"
import { getServerSession } from "next-auth"

import { routes } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

import { Lougout } from "./lougout"

export default async function Home() {
  const session = await getServerSession()
  return (
    <section>
      <Center>
        <Button variant="secondary">Button</Button>
        <Icons.sun />
        <Stack>
          email: {session?.user?.email}
          <Lougout />
          <Link href={routes.login}>Login</Link>
        </Stack>
      </Center>
    </section>
  )
}
