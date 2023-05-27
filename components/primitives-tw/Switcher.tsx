import React, { FC, ReactNode } from "react"
import clsx from "clsx"

import { SpacingKeys, gapSpacing } from "@/styles/vars"

interface SwitcherProps {
  children: ReactNode
  space?: SpacingKeys
  className?: string
}

export const Switcher: FC<SwitcherProps> = ({
  children,
  space = "sm",
  className,
}) => {
  const switcherClass = `flex flex-wrap justify-start items-center [&>*]:grow ${gapSpacing[space]}`
  return <div className={clsx(switcherClass, className)}>{children}</div>
}
