import React, { FC, ReactNode } from "react"
import clsx from "clsx"

import { SpacingKeys, gapSpacing } from "./vars"

interface StackProps {
  children: ReactNode
  gap?: SpacingKeys
  className?: string
}

export const Stack: FC<StackProps> = ({ children, gap = "sm", className }) => {
  const stackClass = `flex flex-col justify-start ${gapSpacing[gap]}`
  return <div className={clsx(stackClass, className)}>{children}</div>
}
