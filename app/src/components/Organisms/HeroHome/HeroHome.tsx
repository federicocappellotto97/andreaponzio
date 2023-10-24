"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import papaya from "../../../../public/papaya.png"
import bowl from "../../../../public/bowl.png"
import vogue from "../../../../public/vogue.png"
import giorgia from "../../../../public/giorgia.png"
import like_the_pasta from "../../../../public/like the pasta.svg"
import GradientMaskingText from "@/components/Atoms/GradientMaskingText/GradientMaskingText"

export default function HeroHome() {
  return (
    <motion.div
      initial="hide"
      animate="show"
      className="h-screen flex items-center overflow-hidden"
    >
      <GradientMaskingText
        className="absolute top-[100px] text-white font-medium inset-x-8 text-[0.75rem] lg:text-[0.875rem]"
        delay={1.8}
      >
        Why Calamarata? 6 years ago I was looking for a pleasant-sounding word
        for my Instagram handle.
        <br />6 years later I haven’t found a reason to change it.
      </GradientMaskingText>
      <div className="relative left-1/2 -translate-x-1/2">
        <motion.h1
          aria-label="Calamarata"
          className="uppercase text-primary text-center font-medium text-[15.7vw] tracking-wide leading-none whitespace-nowrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {},
          }}
          transition={{
            delayChildren: 0.25,
            staggerChildren: 0.05,
          }}
        >
          {"Calamarata".split("").map((character, index) => {
            return (
              <motion.span
                aria-hidden="true"
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    },
                  },
                }}
                className="inline-block"
              >
                {character}
              </motion.span>
            )
          })}
        </motion.h1>
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
          }}
        >
          <Image
            src={papaya}
            alt=""
            className="absolute h-[10.09vw] w-auto bottom-[-29%] left-[6.5%]"
          />
        </motion.span>
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.2,
          }}
        >
          <Image
            src={bowl}
            alt=""
            className="absolute h-[8.65vw] w-auto bottom-[-9%] left-[36%]"
          />
        </motion.span>
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.4,
          }}
        >
          <Image
            src={vogue}
            alt=""
            className="absolute h-[12.5vw] w-auto top-[-37%] left-[52.5%]"
          />
        </motion.span>
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.6,
          }}
        >
          <Image
            src={giorgia}
            alt=""
            className="absolute h-[12.75vw] w-auto top-[9%] left-[70.5%]"
          />
        </motion.span>
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.8,
          }}
        >
          <Image
            src={like_the_pasta}
            alt=""
            className="absolute h-[4.62vw] w-auto top-[76%] left-[61.25%]"
          />
        </motion.span>
      </div>
    </motion.div>
  )
}
