import React, { FC, PropsWithChildren } from "react"
import clsx from "clsx"

import { SpacingKeys, paddingSpacing } from "./vars"

interface BoxProps extends PropsWithChildren {
  p?: SpacingKeys
  className?: string
}

export const Box: FC<BoxProps> = ({ children, p = "sm", className }) => {
  const boxClass = `${paddingSpacing[p]}`
  return <div className={(clsx(boxClass), className)}>{children}</div>
}
