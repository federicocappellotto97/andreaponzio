import { cx } from "class-variance-authority"
import { Dispatch, SetStateAction } from "react"
import { motion } from "framer-motion"
import banana from "../../../../public/menu/banana.png"
import menu from "../../../../public/menu/menu.svg"
import Image from "next/image"
const Hamburger = ({
  open,
  setOpen,
  className,
  isHome,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  className?: string
  isHome?: boolean
}) => {
  return (
    <button
      aria-label={open ? "Close" : "Open"}
      className={cx(
        "text-white hover:text-primary flex flex-col transition-all duration-300 relative",
        className
      )}
      onClick={() => setOpen(!open)}
    >
      <motion.span
        animate={{
          scaleX: open ? 0 : 1,
          originX: 0,
        }}
        transition={{
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="inline-block h-0.5 lg:h-[0.1875rem] w-10 lg:w-16 bg-current mb-1.5 lg:mb-3"
      />
      <motion.span
        animate={{
          scaleX: open ? 0 : 1,
          originX: 0,
        }}
        transition={{
          ease: [0.2, 0.65, 0.3, 0.9],
          delay: 0.1,
        }}
        className="inline-block h-0.5 lg:h-[0.1875rem] w-10 lg:w-16 bg-current mb-1.5 lg:mb-3"
      />
      <motion.span
        animate={{
          scaleX: open ? 0 : 1,
          originX: 0,
        }}
        transition={{
          ease: [0.2, 0.65, 0.3, 0.9],
          delay: 0.2,
        }}
        className="inline-block h-0.5 lg:h-[0.1875rem] w-10 lg:w-16 bg-current mb-1.5 lg:mb-3"
      />
      <motion.span
        animate={{
          scaleX: open ? 0 : 1,
          originX: 0,
        }}
        transition={{
          ease: [0.2, 0.65, 0.3, 0.9],
          delay: 0.3,
        }}
        className="inline-block h-0.5 lg:h-[0.1875rem] w-10 lg:w-16 bg-current"
      />
      <motion.span
        initial={false}
        animate={{
          width: open ? "100%" : "0%",
          originX: 0.5,
          transition: {
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: open ? 0.4 : 0,
          },
        }}
        style={{
          rotate: 45,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="inline-block h-[0.1875rem] w-16 bg-current absolute left-1/2 top-1/2"
      />
      <motion.span
        initial={false}
        animate={{
          width: open ? "100%" : "0%",
          originX: 0.5,
          transition: {
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: open ? 0.4 : 0,
          },
        }}
        style={{
          rotate: -45,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="inline-block h-[0.1875rem] w-16 bg-current absolute left-1/2 top-1/2"
      />
      {isHome && (
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: open ? 0 : 1,
            },
          }}
          initial="hidden"
          animate="visible"
          className="absolute top-[70%] right-[calc(100%+1rem)] hidden lg:inline"
        >
          <Image
            src={menu}
            alt=""
            className="h-[4.77vw] w-auto max-w-none z-[1] relative"
          />
          <Image
            src={banana}
            alt=""
            className="h-[4.8vw] w-auto max-w-none absolute top-[50%] left-[7%] rotate-[27deg] bottom-[-50%]"
          />
        </motion.span>
      )}
    </button>
  )
}

export default Hamburger
