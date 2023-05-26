import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export default function Home() {
  return (
    <section>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" loading>
        Button
      </Button>
      <Icons.sun />
    </section>
  )
}
