import { cva } from "class-variance-authority"

import {
  backgroundColors,
  display,
  flexDirection,
  gapSpacing,
  paddingSpacing,
  position,
  textColors,
} from "@/styles/vars"

export const boxVariants = cva("", {
  variants: {
    gap: gapSpacing,
    padding: paddingSpacing,
    position: position,
    background: backgroundColors,
    color: textColors,
    display: display,
    flexDirection: flexDirection,
  },
  defaultVariants: {
    gap: "sm",
  },
})

// -------------- EXMAPLE
//
// <Box position="absolute" padding="lg" gap="sm">
//   box
// </Box>
//
