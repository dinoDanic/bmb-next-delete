import { Category } from "@/gql/graphql"
import { create } from "zustand"

interface ThemeStore {
  isSidebarActive: boolean
  activeCategory: Category | null
  setSidebarActive: (state: boolean) => void
  setActiveCategory: (category: Category) => void
  clearStore: () => void
}

const initialState = {
  isSidebarActive: false,
  activeCategory: null,
  // ------------- DEPRECATED
}

export const useSidebarStore = create<ThemeStore>((set) => ({
  ...initialState,
  setSidebarActive: (state) => set(() => ({ isSidebarActive: state })),
  setActiveCategory: (category) => set(() => ({ activeCategory: category })),
  clearStore: () => set(() => initialState),
}))
