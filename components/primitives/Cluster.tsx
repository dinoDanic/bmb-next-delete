import React, { FC, ReactNode } from "react"
import clsx from "clsx"

import { SpacingKeys, gapSpacing } from "./vars"

interface ClusterProps {
  children: ReactNode
  space?: SpacingKeys
  className?: string
}

export const Cluster: FC<ClusterProps> = ({
  children,
  space = "sm",
  className,
}) => {
  const clusterClass = `flex flex-wrap justify-start items-center ${gapSpacing[space]}`
  return <div className={clsx(clusterClass, className)}>{children}</div>
}
