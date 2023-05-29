"use client"

import React, { FC } from "react"
import Link from "next/link"
import { useSidebarStore } from "@/features/sidebar/stores/use-sidebar-store"
import { cva } from "class-variance-authority"

import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"
import { Text } from "@/components/typography/text"

export const ExtendContent: FC = () => {
  const { activeCategory } = useSidebarStore()

  const styleVariant = cva(
    "absolute w-[200px] top-0 right-0 bg-gray-100 z-[-1] h-screen ease-out duration-400 p-md ",
    {
      variants: {
        visibility: {
          visible: "translate-x-full skew-y-0",
          hidden: "translate-x-0 skew-y-2 opacity-0",
          none: "hidden",
        },
      },
    }
  )

  return (
    <Box
      pt="5xl"
      overflow="auto"
      className={styleVariant({
        visibility: activeCategory ? "visible" : "hidden",
      })}
    >
      <Box pt="2xl" />
      <Stack gap="sm">
        {activeCategory?.childrens?.map((c) => {
          return (
            <Link className="hover:text-brand" href="#">
              {c?.name}
              <Text className="hover:text-brand">{c?.name}</Text>
            </Link>
          )
        })}
      </Stack>
    </Box>
  )
}
