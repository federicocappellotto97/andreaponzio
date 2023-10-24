"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const PageTransition = ({
  children,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const pathname = usePathname()
  const [key, setKey] = useState(pathname)
  useEffect(() => {
    setKey(pathname)
  }, [pathname])

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div key={key} className="contents">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "0%" }}
          style={{ originY: 1 }}
          className="fixed inset-0 bg-primary z-[99999] flex justify-center items-center"
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          <span className="uppercase text-secondary text-center font-medium text-[15.7vw] tracking-wide leading-none whitespace-nowrap">
            C
          </span>
        </motion.div>
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "100%" }}
          exit={{ y: "100%" }}
          style={{ originY: 0 }}
          className="fixed inset-0 bg-primary z-[99999] flex justify-center items-center"
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          <span className="uppercase text-secondary text-center font-medium text-[15.7vw] tracking-wide leading-none whitespace-nowrap">
            C
          </span>
        </motion.div>
        <AnimatePresence>
          <div className="contents" key="page-transition-children">
            {children}
          </div>
        </AnimatePresence>
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
