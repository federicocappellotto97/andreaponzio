"use client"
import { Project } from "@/lib/types"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function CardProject({
  title,
  description,
  image,
  index,
}: Project & { index: number }) {
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
      className="aspect-[440/293] relative group overflow-hidden"
      custom={index}
      initial="initial"
      animate="visible"
      variants={variants}
    >
      <Image
        src={image.src}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-blue-100 p-30 flex flex-col -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">
        <h2 className="text-lg font-medium">{title}</h2>
        {description && (
          <div className="mt-auto">
            <PortableText value={description} />
          </div>
        )}
      </div>
    </motion.div>
  )
}
