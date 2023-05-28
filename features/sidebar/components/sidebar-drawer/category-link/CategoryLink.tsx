"use client"

import React, { FC } from "react"
import Link from "next/link"
import { useSidebarStore } from "@/features/sidebar"
import { Category } from "@/gql/graphql"
import { ChevronRight } from "lucide-react"

import { Text } from "@/components/typography"

export const CategoryLink: FC<Category> = (category) => {
  const { activeCategory, setActiveCategory } = useSidebarStore()

  const onHover = () => setActiveCategory(category)

  const isActive = activeCategory?.id === category.id

  const activeColor = isActive ? "brand" : "black"

  return (
    <Link href="#" onFocus={onHover} onMouseEnter={onHover}>
      <Text color={activeColor}>
        <span className="flex justify-between">
          {category.name}
          <ChevronRight />
        </span>
      </Text>
      {/*TODO: MATIJA JELENA*/}
      {/* <Text */}
      {/*   color={activeColor} */}
      {/*   icon={<ChevronRight />} */}
      {/*   iconSide="right" */}
      {/*   justifyContent="between" */}
      {/* > */}
      {/*   {category.name} */}
      {/* </Text> */}
      {/*TODO: MATIJA JELENA*/}
    </Link>
  )
}
