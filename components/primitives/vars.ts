export const spacing = {
  "0": "0",
  xxs: ".25rem",
  xs: ".5rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "2rem",
  xxxl: "3rem",
} as const

export const gapSpacing: Record<SpacingKeys, string> = {
  "0": "gap-0",
  xxs: "gap-xxs",
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
  xl: "gap-xl",
  xxl: "gap-xxl",
  xxxl: "gap-xxxl",
} as const

export const paddingSpacing: Record<SpacingKeys, string> = {
  "0": "p-0",
  xxs: "p-xxs",
  xs: "p-xs",
  sm: "p-sm",
  md: "p-md",
  lg: "p-lg",
  xl: "p-xl",
  xxl: "p-xxl",
  xxxl: "p-xxxl",
} as const

export const position = {
  absolute: "absolute",
  relative: "relative",
}

export const customColors = {
  brand: "bg-blue-500",
}

const tailwindColors = {
  "slate-50": "bg-slate-50",
  "slate-100": "bg-slate-100",
  "slate-200": "bg-slate-200",
  "slate-300": "bg-slate-300",
  "slate-400": "bg-slate-400",
  "slate-500": "bg-slate-500",
  "slate-600": "bg-slate-600",
  "slate-700": "bg-slate-700",
  "slate-800": "bg-slate-800",
  "slate-900": "bg-slate-900",
  "slate-950": "bg-slate-950",
  "gray-50": "bg-gray-50",
  "gray-100": "bg-gray-100",
  "gray-200": "bg-gray-200",
  "gray-300": "bg-gray-300",
  "gray-400": "bg-gray-400",
  "gray-500": "bg-gray-500",
  "gray-600": "bg-gray-600",
  "gray-700": "bg-gray-700",
  "gray-800": "bg-gray-800",
  "gray-900": "bg-gray-900",
  "gray-950": "bg-gray-950",
  "zinc-50": "bg-zinc-50",
  "zinc-100": "bg-zinc-100",
  "zinc-200": "bg-zinc-200",
  "zinc-300": "bg-zinc-300",
  "zinc-400": "bg-zinc-400",
  "zinc-500": "bg-zinc-500",
  "zinc-600": "bg-zinc-600",
  "zinc-700": "bg-zinc-700",
  "zinc-800": "bg-zinc-800",
  "zinc-900": "bg-zinc-900",
  "zinc-950": "bg-zinc-950",
}

export const colors = {
  ...customColors,
  ...tailwindColors,
}

export type SpacingKeys = keyof typeof spacing
