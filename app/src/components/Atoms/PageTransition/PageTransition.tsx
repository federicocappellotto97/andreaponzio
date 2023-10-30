"use client"

import {
  Fragment,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { createContext } from "react"

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

export const PAGE_TRANSITION_DURATION = 0.3

export const IsDelayAnimate = createContext<boolean>(false)

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return [...array]
}

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const [delayAnimate, setDelayAnimate] = useState(false)
  useEffect(() => {
    setDelayAnimate(true)
  }, [])

  const indices = shuffleArray(Array.from(Array(5).keys()))

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div key={pathname} className="contents">
        {indices.map((_, i) => (
          <Fragment key={i}>
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "-100%" }}
              exit={{ y: "0%" }}
              style={{ originY: 1, left: `${i * 20}vw` }}
              className={`fixed inset-y-0 w-[20vw] bg-blue-${
                100 * (i + 1)
              } z-[99999]`}
              transition={{
                duration: PAGE_TRANSITION_DURATION,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 * indices[i],
              }}
            />
            <motion.div
              initial={{ y: "0%" }}
              animate={{ y: "100%" }}
              exit={{ y: "100%" }}
              style={{ originY: 1, left: `${i * 20}vw` }}
              className={`fixed inset-y-0 w-[20vw] bg-blue-${
                100 * (i + 1)
              } z-[99999]`}
              transition={{
                duration: PAGE_TRANSITION_DURATION,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 * indices[i],
              }}
            />
          </Fragment>
        ))}
        <IsDelayAnimate.Provider value={delayAnimate}>
          <FrozenRouter>
            <AnimatePresence>{children}</AnimatePresence>
          </FrozenRouter>
        </IsDelayAnimate.Provider>
      </div>
    </AnimatePresence>
  )
}
