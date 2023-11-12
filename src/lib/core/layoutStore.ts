import { create } from 'zustand'

type LayoutStoreState = {
  isMenuOpen: boolean
  setMenuOpen: (menuOpen: boolean) => void
  toggleMenuOpen: () => void
}

const useLayoutStore = create<LayoutStoreState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  toggleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))

export default useLayoutStore
