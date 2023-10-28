"use client"

import { PropsWithChildren, useContext, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function useLayoutRouterContext() {
  return useContext(LayoutRouterContext)
}

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useLayoutRouterContext()
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  )
}

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        initial={{ filter: "blur(25px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(25px)" }}
        transition={{ duration: 0.3 /* ease: "easeInOut" */ }}
      >
        <FrozenRouter>
          <AnimatePresence>{children}</AnimatePresence>
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}
