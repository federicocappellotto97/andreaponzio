"use client"
import { cx } from "class-variance-authority"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Hamburger from "./Hamburger"
import Menu from "./Menu"
const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === "/"
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: isHome ? 2.5 : 0, duration: 1 }}
      className={cx(
        "z-10 p-3 lg:p-9 flex items-center",
        isHome && "absolute inset-x-0 top-0 "
      )}
    >
      {isHome || (
        <Link
          href="/"
          className="text-white hover:text-primary transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111.82 118.25"
            className="h-[6vh] lg:h-[12vh]"
          >
            <defs>
              <style>
                {
                  ".cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
                }
              </style>
            </defs>
            <g id="Livello_2" data-name="Livello 2">
              <g id="Livello_1-2" data-name="Livello 1">
                <path d="M16.35 40.28v76.97h80.91V45.22" className="cls-1" />
                <path d="M1 48.62 53.48 1l57.34 51.51" className="cls-1" />
                <path
                  d="M26.98 49.53v16.58H42.9V47.87H26.98M67.72 45.6l.54 20.51h19.12V45.06l-19.66.54zM23.13 78.77v16.01M21.23 86.77h10.89v-9.7 19.07M37.21 85.38s-1.32 8.74 8.49 8.74 7.59-11.38 5.53-12.29c0 0-9.65-7.5-14.43 2.31M56.19 98.29s1.28-25.58 2.71-23.84 4.15 14 4.15 14 5.11-14.2 8-14.12 4.15 18.71 4.31 23.93M80.13 76.75V93.4s-.72 4.15 12.07 0"
                  className="cls-1"
                />
                <path
                  d="M78.84 90.26a21.06 21.06 0 0 0 11.06-2M78.84 83.93s9.53.87 14.47-3.15"
                  className="cls-1"
                />
              </g>
            </g>
          </svg>
        </Link>
      )}
      <AnimatePresence>{open && <Menu />}</AnimatePresence>
      <Hamburger
        open={open}
        setOpen={setOpen}
        className="ml-auto z-[60]"
        isHome={isHome}
      />
    </motion.header>
  )
}

export default Header
