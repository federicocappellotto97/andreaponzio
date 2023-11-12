'use client'
import { Project } from '@/lib/types'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { IsDelayAnimate, PAGE_TRANSITION_DURATION } from '@/components/Atoms/PageTransition/PageTransition'
import { useContext, useState } from 'react'
import { blue } from '../../../../../tailwind.config'
import Link from 'next/link'

export default function CardProject({ title, description, image, index }: Project & { index: number }) {
  const hasDelay = useContext(IsDelayAnimate)

  const variants = {
    initial: { clipPath: 'polygon(0 0, 100% 0%, 100% 0%, 0% 0%)' },
    visible: (i: number) => ({
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        delay: i * 0.2 + (hasDelay ? PAGE_TRANSITION_DURATION : 0),
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const [isHovered, setIsHovered] = useState(false)

  const [color, setColor] = useState(Object.values(blue)[Math.floor(Math.random() * Object.values(blue).length)])

  return (
    <motion.div
      className="aspect-[440/293] relative overflow-hidden"
      custom={index}
      initial="initial"
      animate="visible"
      variants={variants}
      onMouseEnter={() => {
        setIsHovered(true)
        setColor(Object.values(blue)[Math.floor(Math.random() * Object.values(blue).length)])
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image.src} alt={title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 p-15 lg:p-30 flex flex-col"
            style={{ backgroundColor: color }}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                          <Link href={value?.href ? value?.href : '#'} target={value?.blank ? '_blank' : ''}>
                            {children}
                          </Link>
                        )
                      },
                    },
                  }}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
