'use client'
import { shuffleArray } from '@/components/Atoms/PageTransition/PageTransition'
import { useEffect, useState } from 'react'
import { blue } from '../../../../../tailwind.config'
function HomeImageMobile({ className }: { className?: string }) {
  const [colors, setColors] = useState(Object.values(blue))

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(shuffleArray([...colors]))
    }, 300)

    return () => clearInterval(interval)
  }, [colors])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={248.82} height={390.992} data-name="Group 21" className={className}>
      <defs>
        <clipPath id="a">
          <path fill="none" d="M0 0h248.82v390.992H0z" data-name="Rectangle 47" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" data-name="Group 20">
        <path
          d="M213.277 130.328a10.961 10.961 0 0 1-3.7 8.515 11.105 11.105 0 0 1-8.154 3.338h-47.387a11.425 11.425 0 0 1-11.854-11.853v-11.846a11.09 11.09 0 0 1 3.338-8.144 10.933 10.933 0 0 1 8.516-3.7h47.387a12.73 12.73 0 0 1 11.854 11.844Zm31.843-91.075a10.558 10.558 0 0 0-8.154-3.71h-11.844A11.4 11.4 0 0 1 213.277 23.7V11.854a10.594 10.594 0 0 0-3.7-8.154 10.594 10.594 0 0 0-8.154-3.7h-82.93a10.963 10.963 0 0 0-8.516 3.7 11.109 11.109 0 0 0-3.338 8.154V23.7a11.411 11.411 0 0 0 11.854 11.845h82.93a10.571 10.571 0 0 1 8.154 3.71 10.575 10.575 0 0 1 3.7 8.145v11.842a10.961 10.961 0 0 1-3.7 8.515 11.105 11.105 0 0 1-8.154 3.338h-82.93a10.933 10.933 0 0 0-8.516 3.7 11.091 11.091 0 0 0-3.338 8.145v47.388a11.425 11.425 0 0 0 11.854 11.853h11.844a12.731 12.731 0 0 1 11.845 11.844v11.845a11.424 11.424 0 0 0 11.854 11.854h82.93a11.1 11.1 0 0 0 8.154-3.337 10.952 10.952 0 0 0 3.7-8.517V47.4a10.575 10.575 0 0 0-3.7-8.145"
          data-name="Path 22"
        />
        <path
          fill={colors[0]}
          d="M213.277 118.483v11.845a10.963 10.963 0 0 1-3.7 8.516 11.111 11.111 0 0 1-8.154 3.338h-47.387a11.424 11.424 0 0 1-11.854-11.854v-11.845a11.087 11.087 0 0 1 3.337-8.144 10.932 10.932 0 0 1 8.517-3.7h47.387a12.73 12.73 0 0 1 11.854 11.844"
          data-name="Path 23"
        />
        <path
          d="M106.639 272.508a10.94 10.94 0 0 1-3.71 8.517 11.088 11.088 0 0 1-8.144 3.338H47.4a11.425 11.425 0 0 1-11.854-11.855v-82.93a11.093 11.093 0 0 1 3.338-8.153 10.962 10.962 0 0 1 8.516-3.7h47.385a10.573 10.573 0 0 1 8.144 3.7 10.556 10.556 0 0 1 3.71 8.153Zm31.833-91.083a10.573 10.573 0 0 0-8.144-3.7h-11.845a11.394 11.394 0 0 1-11.844-11.844v-11.855a10.551 10.551 0 0 0-3.71-8.144 10.573 10.573 0 0 0-8.144-3.7H47.4a10.962 10.962 0 0 0-8.516 3.7 11.087 11.087 0 0 0-3.338 8.144v11.854a10.959 10.959 0 0 1-3.7 8.516 11.08 11.08 0 0 1-8.144 3.328H11.854a10.962 10.962 0 0 0-8.516 3.7A11.093 11.093 0 0 0 0 189.578v189.559a11.1 11.1 0 0 0 3.338 8.155 10.964 10.964 0 0 0 8.516 3.7H23.7a10.575 10.575 0 0 0 8.144-3.7 10.578 10.578 0 0 0 3.7-8.155V331.75A11.41 11.41 0 0 1 47.4 319.906h47.385a11.088 11.088 0 0 0 8.144-3.338 10.94 10.94 0 0 0 3.71-8.517v-11.844a11.08 11.08 0 0 1 3.328-8.144 10.931 10.931 0 0 1 8.516-3.7h11.845a11.088 11.088 0 0 0 8.144-3.338 10.94 10.94 0 0 0 3.71-8.517v-82.93a10.556 10.556 0 0 0-3.71-8.153"
          data-name="Path 24"
        />
        <path
          fill={colors[1]}
          d="M106.639 189.578v82.93a10.94 10.94 0 0 1-3.71 8.517 11.087 11.087 0 0 1-8.144 3.337H47.4a11.424 11.424 0 0 1-11.855-11.854v-82.93a11.091 11.091 0 0 1 3.338-8.153 10.962 10.962 0 0 1 8.517-3.7h47.385a10.573 10.573 0 0 1 8.144 3.7 10.554 10.554 0 0 1 3.71 8.153"
          data-name="Path 25"
        />
      </g>
    </svg>
  )
}

export default HomeImageMobile
