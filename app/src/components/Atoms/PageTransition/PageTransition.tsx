"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const PageTransition = ({
  children,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const path = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(20px)" }}
        transition={{ duration: 0.5 }}
        key={path}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
