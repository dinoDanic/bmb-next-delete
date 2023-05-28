import React from "react"
import { Box, Stack } from "@/components"
import { GetCategoriesDocument } from "@/gql/graphql"
import { graphqlClient } from "@/lib"

import { CategoryLink } from "./category-link/CategoryLink"

export const SidebarContent = async () => {
  const { getCategories } = await graphqlClient.request(GetCategoriesDocument)
  //tu sam stal
  //

  return (
    <Box
      position="absolute"
      width="full"
      height="screen"
      zIndex="40"
      background='white'
      p="2xl"
    >
      <Box pt="5xl" />
      <Stack>
        {getCategories?.map((category) => {
          if (!category?.name) return null
          return <CategoryLink key={category?.id} {...category} />
        })}
      </Stack>
    </Box>
  )
}
