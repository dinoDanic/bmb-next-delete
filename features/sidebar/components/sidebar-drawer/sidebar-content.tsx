import React from "react"

// import { GetCategoriesDocument } from "@/gql/graphql"

// import { graphqlClient } from "@/lib/graphql-request"
import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"

// import { CategoryLink } from "./category-link/category-link"

export const SidebarContent = async () => {
  // const { getCategories } = await graphqlClient.request(GetCategoriesDocument)

  return (
    <Box
      position="absolute"
      height="screen"
      zIndex="40"
      background="white"
      className="shadow-xl"
      width="full"
      p="2xl"
    >
      <Box pt="5xl" />
      <Stack>
        {/* {getCategories?.map((category) => { */}
        {/*   if (!category?.name) return null */}
        {/*   return <CategoryLink key={category?.id} {...category} /> */}
        {/* })} */}
      </Stack>
    </Box>
  )
}
