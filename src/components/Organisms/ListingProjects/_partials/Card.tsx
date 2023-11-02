"use client"
import { Project } from "@/lib/types"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  IsDelayAnimate,
  PAGE_TRANSITION_DURATION,
} from "@/components/Atoms/PageTransition/PageTransition"
import { useContext, useState } from "react"
import { blue } from "../../../../../tailwind.config"
import Link from "next/link"

export default function CardProject({
  title,
  description,
  image,
  index,
}: Project & { index: number }) {
  const hasDelay = useContext(IsDelayAnimate)

  const variants = {
    initial: { clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0% 0%)" },
    visible: (i: number) => ({
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        delay: i * 0.2 + (hasDelay ? PAGE_TRANSITION_DURATION : 0),
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const [color, setColor] = useState(
    Object.values(blue)[Math.floor(Math.random() * Object.values(blue).length)]
  )

  return (
    <motion.div
      className="aspect-[440/293] relative group overflow-hidden"
      custom={index}
      initial="initial"
      animate="visible"
      variants={variants}
      onMouseEnter={() =>
        setColor(
          Object.values(blue)[
            Math.floor(Math.random() * Object.values(blue).length)
          ]
        )
      }
    >
      <Image
        src={image.src}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div
        className="absolute inset-0 p-30 flex flex-col -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
        style={{ backgroundColor: color }}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        {description && (
          <div className="mt-auto">
            <PortableText
              value={description}
              components={{
                marks: {
                  link: ({ children, value }) => {
                    return (
                      <Link
                        href={value?.href ? value?.href : "#"}
                        target={value?.blank ? "_blank" : ""}
                      >
                        {children}
                      </Link>
                    )
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}
