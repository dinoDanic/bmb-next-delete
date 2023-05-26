import React, { FC, PropsWithChildren } from "react"
import clsx from "clsx"

interface Props extends PropsWithChildren {
  level: "1" | "2" | "3" | "4"
  className?: string
}

interface LevelProps extends PropsWithChildren {
  className?: Props["className"]
}

export const Heading: FC<Props> = ({ level, children, ...props }) => {
  const HeadingComponent = levels[level]
  return <HeadingComponent {...props}>{children}</HeadingComponent>
}

const Level1: FC<LevelProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  )
}

const Level2: FC<LevelProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  )
}

const Level3: FC<LevelProps> = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  )
}

const Level4: FC<LevelProps> = ({ children, className }) => {
  return (
    <h4
      className={clsx(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  )
}

const levels = {
  "1": Level1,
  "2": Level2,
  "3": Level3,
  "4": Level4,
} as const
