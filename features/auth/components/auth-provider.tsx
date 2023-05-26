"use client"

import React, { FC, ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

interface Props {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
