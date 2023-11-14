'use client'
import { LenisInstance, ReactLenis } from '@studio-freight/react-lenis'
import { useEffect, useRef } from 'react'
import useLayoutStore from './layoutStore'

export default function Lenis({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisInstance>(null)
  const isMenuOpen = useLayoutStore((state) => state.isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) lenisRef.current?.stop()
    else lenisRef.current?.start()
  }, [isMenuOpen])

  return (
    <ReactLenis ref={lenisRef} root>
      {children}
    </ReactLenis>
  )
}
