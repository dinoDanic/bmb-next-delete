import { cva } from "class-variance-authority"

import { colors, gapSpacing, paddingSpacing, position } from "../vars"

export const boxVariants = cva("", {
  variants: {
    gap: gapSpacing,
    padding: paddingSpacing,
    position: position,
    background: colors,
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
