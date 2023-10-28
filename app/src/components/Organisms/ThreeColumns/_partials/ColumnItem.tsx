"use client"
import { ConditionalWrapper } from "@/lib/core/ConditionalWrapper"
import { titleStyle } from "../ThreeColumns.style"
import { PortableText } from "@portabletext/react"
import { cx } from "class-variance-authority"
import { motion } from "framer-motion"
export default function ColumnItem({
  title,
  text,
  isMain,
  index,
}: {
  title: string
  text: any
  isMain: boolean
  index: number
}) {
  const variants = {
    initial: { clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0% 0%)" },
    visible: (i: number) => ({
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        easing: [0.22, 1, 0.36, 1],
      },
    }),
  }
  return (
    <motion.div
      custom={index}
      initial="initial"
      animate="visible"
      variants={variants}
    >
      <ConditionalWrapper
        wrapper={(children) =>
          isMain ? (
            <h1 className={titleStyle}>{children}</h1>
          ) : (
            <h2 className={titleStyle}>{children}</h2>
          )
        }
      >
        {title}
      </ConditionalWrapper>
      <hr className="h-8 bg-gray-dark dark:bg-white mt-15 mb-6" />
      {text && (
        <div
          className={cx(
            "px-16 prose max-w-none text-black dark:text-white dark:prose-strong:text-white dark:prose-a:text-white hover:prose-a:text-blue-500 prose-a:transition-colors prose-a:duration-300 prose-a:ease-out prose-a:font-normal prose-a:no-underline",
            isMain ? "text-lg" : "text-base"
          )}
        >
          <PortableText value={text} />
        </div>
      )}
    </motion.div>
  )
}
