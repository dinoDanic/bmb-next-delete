import React, { FC, ReactNode } from "react"
import clsx from "clsx"

import { SpacingKeys, gapSpacing } from "@/styles/vars"

interface SidebarProps {
  children: ReactNode
  gap?: SpacingKeys
  className?: string
  side?: "left" | "right"
}

export const Sidebar: FC<SidebarProps> = ({
  children,
  gap = "sm",
  side = "left",
  className,
}) => {
  const sideStyle = {
    left: `[&>*:first-child]:grow [&>*:last-child]:grow-[999] [&>*:last-child]:basis-0 [&>*:last-child]:min-w-[50%]`,
    right: `[&>*:last-child]:grow [&>*:first-child]:basis-0 [&>*:first-child]:grow-[999] [&>*:first-child]:min-w-[50%]`,
  } as const

  const sidebarClass = `flex flex-wrap ${gapSpacing[gap]} ${sideStyle[side]}`
  return <div className={clsx(sidebarClass, className)}>{children}</div>
}
