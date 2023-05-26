"use client"

import React from "react"
import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export const Lougout = () => {
  return (
    <Button className="w-fit" onClick={() => signOut()} variant="secondary">
      logout
    </Button>
  )
}
