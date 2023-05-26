import React, { FC, ReactNode } from "react"
import clsx from "clsx"

interface Props {
  children: ReactNode
  className?: string
}

export const Text: FC<Props> = ({ children, className }) => {
  return (
    <p className={clsx("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  )
}
