// "use client"
//
// import { FC } from "react"
// import { useSidebarStore } from "@/features/sidebar"
//
// import { Text } from "@/components/typography"
//
// export const ProductTrigger: FC = () => {
//   const { isSidebarActive, setSidebarActive } = useSidebarStore()
//
//   const color = isSidebarActive ? "bg-primary" : "bg-black"
//
//   return (
//     <div
//       className="relative z-40 cursor-pointer"
//       onMouseEnter={() => setSidebarActive(true)}
//     >
//       <Text variant="sm" className={color}>
//         Proizvodi
//       </Text>
//     </div>
//   )
// }
