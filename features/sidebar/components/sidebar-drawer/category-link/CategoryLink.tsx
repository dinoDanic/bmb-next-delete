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
    <div className="flex flex-wrap justify-between" onMouseEnter={onHover}>
      <Link href={"#"}>{category.name}</Link>
      <ChevronRight />
    </div>
  )
}
