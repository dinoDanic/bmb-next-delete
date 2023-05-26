import React, { FC, PropsWithChildren } from "react"
import clsx from "clsx"

interface CenterProps extends PropsWithChildren {
  direction: "horizontal" | "vertical" | "center"
  className?: string
}

export const Center: FC<CenterProps> = ({
  children,
  direction = "horizontal",
  className,
}) => {
  const horizontalClass = `mx-auto w-fit`
  const verticalClass = `flex items-center h-full w-full`
  const centerClass = `flex items-center justify-center h-full w-full`

  if (direction === "horizontal") {
    return <div className={clsx(horizontalClass, className)}>{children}</div>
  }
  if (direction === "vertical") {
    return <div className={clsx(verticalClass, className)}>{children}</div>
  }
  if (direction === "center") {
    return <div className={clsx(centerClass, className)}>{children}</div>
  }
  return null
}
