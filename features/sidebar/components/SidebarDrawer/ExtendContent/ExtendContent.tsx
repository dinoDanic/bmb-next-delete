// "use client"
//
// import React, { FC } from "react"
// import { Text, TextLink } from "@/components"
// import { useSidebarStore } from "@/features/sidebar"
// import { Box, Stack } from "@kodiui/ui"
//
// import { styleRecipe } from "./displayContent.css"
//
// export const ExtendContent: FC = () => {
//   const { activeCategory } = useSidebarStore()
//
//   return (
//     <Box
//       paddingTop="5xxl"
//       gap="xl"
//       overflow="auto"
//       className={styleRecipe({
//         visibility: activeCategory ? "visible" : "hidden",
//       })}
//     >
//       <Box paddingTop="2xl" />
//       <Stack gap="xl">
//         {activeCategory?.childrens?.map((c) => (
//           <Text
//             size="small"
//             color={{ hover: "brand", dark: "gray12" }}
//             key={c?.id}
//             weight="medium"
//           >
//             <TextLink href="#">
//               {/* <Center> */}
//               {/*   <Flame /> */}
//               {/* </Center> */}
//               {c?.name}
//             </TextLink>
//           </Text>
//         ))}
//       </Stack>
//     </Box>
//   )
// }
