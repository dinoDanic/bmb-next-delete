"use client"

import React, { FC } from "react"
import Link from "next/link"
import { useSidebarStore } from "@/features/sidebar/stores/use-sidebar-store"
import { Category } from "@/gql/graphql"
import { ChevronRight } from "lucide-react"

export const CategoryLink: FC<Category> = (category) => {
  const { setActiveCategory } = useSidebarStore()

  const onHover = () => setActiveCategory(category)

  // const isActive = activeCategory?.id === category.id

  // const activeColor = isActive ? "brand" : "black"

  return (
    <Link href="#" onFocus={onHover} onMouseEnter={onHover}>
      <span className="flex justify-between">
        {category.name}
        <ChevronRight />
      </span>
    </Link>
  )
}
