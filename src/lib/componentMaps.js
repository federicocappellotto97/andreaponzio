import dynamic from "next/dynamic"

/**
 * The map of available components to render on pages.
 * Used by @lib/components/PageComponent
 */
export const PAGE_COMPONENTS = {
  /* PAGE_COMPONENTS */
  ThreeColumns: dynamic(() =>
    import("@/components/Organisms/ThreeColumns/ThreeColumns")
  ),
  ListingProjects: dynamic(() =>
    import("@/components/Organisms/ListingProjects/ListingProjects")
  ),
  HeroHome: dynamic(() => import("@/components/Organisms/HeroHome/HeroHome")),
  Spacer: dynamic(() => import("@/components/Organisms/Spacer/Spacer")),
}
