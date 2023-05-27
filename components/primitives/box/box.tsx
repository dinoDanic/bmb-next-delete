"use client"

import React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { boxVariants } from "./variants"

type BoxProps = React.HTMLAttributes<HTMLHeadElement> &
  VariantProps<typeof boxVariants>

const Box = React.forwardRef<HTMLHeadingElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(boxVariants({ ...props, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Box.displayName = "Box"

export { Box }
