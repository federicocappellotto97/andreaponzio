import { cx } from "class-variance-authority"
import { motion, stagger, useAnimate, usePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const Menu = () => {
  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()
  const pathname = usePathname()

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        if (scope?.current)
          await animate(
            scope.current.children,
            { opacity: [0, 1], y: [50, 0] },
            {
              delay: stagger(0.1),
              bounce: 0,
              ease: [0.2, 0.65, 0.3, 0.9],
              duration: 0.5,
            }
          )
      }
      enterAnimation()
    } else safeToRemove()
  }, [isPresent])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed overflow-scroll inset-0 px-3 py-16 lg:p-8 text-center z-50 bg-secondary"
    >
      <ul
        ref={scope}
        className="flex flex-col items-center space-y-12 lg:space-y-16"
      >
        <li>
          <Link
            aria-label="My bio"
            href="/bio"
            className={cx(
              "hover:text-primary transition-all duration-300",
              pathname == "/bio" ? "text-primary" : "text-black"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 170.14 49.31"
              className="h-[6vh] lg:h-[12vh] text-current"
            >
              <defs>
                <style>
                  {
                    ".cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
                  }
                </style>
              </defs>
              <g data-name="Livello 2">
                <g data-name="Livello 1">
                  <path
                    d="M1 47.45S3.06-2.21 5.39 1.17s6.71 27.24 6.71 27.24S20.35.84 25 1s6.71 36.33 7 46.45M65 5.28S48.09 19.2 47.45 28.19a186.71 186.71 0 0 0 0 20.12M38.03 1l10.81 22.64M89.62 6.56s-.5 34.65 2 37.64 13.71 4 16-8.72c0 0 1.45-5.74-9-8 0 0 12.23-4.73 12-11S92.61 9.31 92.61 9.31M121.28 6.56s-.25 38.15 2.49 40.89M139.24 16.91S129.65 43.12 152.8 44s16.84-27.6 10.29-29.48c0 0-10.76-8.18-20.81 0"
                    className="cls-1"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            aria-label="What i do"
            href="/what-i-do"
            className={cx(
              "hover:text-primary transition-all duration-300",
              pathname == "/what-i-do" ? "text-primary" : "text-black"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 550.46 119.61"
              className="h-[6vh] lg:h-[12vh] text-current"
            >
              <defs>
                <style>
                  {
                    ".cls-3{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px}"
                  }
                </style>
              </defs>
              <g id="Livello_2" data-name="Livello 2">
                <g id="Livello_1-2" data-name="Livello 1">
                  <path
                    d="M1 26s12.68 72 19.39 73.86 4.85-48.47 11.19-45.12 17.9 36.17 24.24 36.17 11.93-52.3 0-89.91M92.76 30.13S89 98.74 97.94 104.7M114 28.64s11.56 61.15 8.2 76.06M78.55 80.84h43.25M159.17 102.19S166.66 4.95 178.6 12s26.78 82.58 27.69 88.28S178 71.37 155 76.08l50.5-15.31M216.59 42l52.33-9.64M238.27 22.24s3.85 68.07 0 82.46M342.35 28.64v89.97M425.71 25.13s-6.75 74.2 7.23 72.76 75.17-86.73-23.61-78.54M487.86 42s-19.76 54 27.95 55.91S550.5 41 537 37.18c0 0-22.16-16.86-42.88 0"
                    className="cls-3"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            aria-label="Breakfast by me"
            href="/breakfast"
            className={cx(
              "hover:text-primary transition-all duration-300",
              pathname == "/breakfast" ? "text-primary" : "text-black"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 419.23 60.66"
              className="h-[6vh] lg:h-[12vh] text-current"
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
                  <path
                    d="M1 6.4S.54 53.06 3 57.09s13.71 5.37 16-11.75c0 0 1.45-7.73-9-10.75 0 0 12.23-6.37 12-14.77S4 10.09 4 10.09M33 51.25S32.5 5.5 44.12 11.9 37.24 28.09 37.48 33s4.5 16.32 14.22 17M58.58 11.29S59.52 48.4 65 48.4s13.27.47 14.93-7"
                    className="cls-1"
                  />
                  <path
                    d="M51.7 21.62s19.67-1.19 23.23-4.5M57.63 35.61s17 .33 20.34-4.34M90.1 49.83S93.18 3.37 99.34 9.3 108 46.75 108 46.75"
                    className="cls-1"
                  />
                  <path
                    d="M89.15 33s12.38 2.2 17-1.76M122.12 1s7.09 39.35 6.14 46.22M145.09 8.77S128 23.85 131.58 31.27s21.13 16 21.13 16M177.61 8.77s-18.54-8-13.56 26.84l3.08 20.14"
                    className="cls-1"
                  />
                  <path
                    d="M158.36 33.64s14.22 2.63 21.57-5.64M187 49.83s1.19-43.61 8.3-39.82 14 41.24 14 41.24"
                    className="cls-1"
                  />
                  <path
                    d="M183.25 37.26s14.27 2.14 22.66-1.65M216.19 35.61s1.19 14.22 11.14 11.61-7.35-15.64-6.87-25.6 5.69-12.56 11.61-6.87A19.11 19.11 0 0 1 237.76 28M242 17.12s13.75 1.42 18.72-2.61"
                    className="cls-1"
                  />
                  <path
                    d="M247.72 11.29s1.19 32.14 4.74 40M290.13 52.87s-5.62-41.27-3.63-45.14 12.8-6.42 16.87 8.47c0 0 2.27 6.67-7.6 10.61 0 0 12.65 4.16 13.33 11.62s-16.45 10.8-16.45 10.8M331.05 12s-11.76 13-12.21 21.32 0 18.73 0 18.73M312.29 7.98l7.52 21.08M364.72 51.43s-5.37-40.3-3.38-37.83 8.13 21.23 8.13 21.23 1.72-23.16 4.81-23.54 9.36 28.56 10.9 36.7M385.8 26.25s19.67-1.19 23.23-4.5M391.73 40.23s17 .33 20.34-4.34"
                    className="cls-1"
                  />
                  <path
                    d="M393.15 15.19S389.28 49.47 404.53 52s13.66-7.7 13.66-7.7"
                    className="cls-1"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            aria-label="My graphics"
            href="/graphics"
            className={cx(
              "hover:text-primary transition-all duration-300",
              pathname == "/graphics" ? "text-primary" : "text-black"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 335.81 53.16"
              className="h-[6vh] lg:h-[12vh] text-current"
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
                  <path
                    d="M1 47.45S3.06-2.21 5.39 1.17s6.71 27.24 6.71 27.24S20.35.84 25 1s6.71 36.33 7 46.45M77.69 7.15s-16.91 13-17.55 21.45a163.82 163.82 0 0 0 0 18.85M50.71 3.14l10.81 21.21M119.46 24.35s10.23-3.48 10.23 5.24S117.36 51 106.22 31.7 121.87-.5 133 11.54M142.63 43.73s.9-43.27 12-40.59 9 18.26 0 24.16c0 0-8.48 6.8 11.41 13.42M177.83 47.45s6-36.92 12.64-33.71 5.37 38.41 5.37 38.41"
                    className="cls-1"
                  />
                  <path
                    d="M177.83 35.91s10.92 3.31 18.1 0M213 41.8s-1.5-35.06 4.21-34.92 8.12 1.24 8.12 6.86-9.23 15.48-14.84 13.56M236.51 5.52v38.21M247.94 8.53v35.2M233.8 27.3h18.05M267.19 8.53V41.8M289.12 8.53s-20.72 7.22-8.39 27.38c0 0 9.63 9.63 19.56 0M307.22 31.4s-3.31 11.13 8.73 12.34 8.12-12 7.52-17.6-8.12-21.21 2.71-17.6 8.4 15.83 8.4 15.83"
                    className="cls-1"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            aria-label="Contacts"
            href="/contacts"
            className={cx(
              "hover:text-primary transition-all duration-300",
              pathname == "/contacts" ? "text-primary" : "text-black"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 338.9 54.33"
              className="h-[6vh] lg:h-[12vh] text-current"
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
                  <path
                    d="M1 53.12S3.06 3.46 5.39 6.84s6.71 27.24 6.71 27.24S20.35 6.51 25 6.67 31.7 43 32 53.12M66.69 8.82s-16.91 13-17.55 21.45a163.82 163.82 0 0 0 0 18.85M39.71 4.81l10.81 21.21M115.84 15.41a6.31 6.31 0 0 0-9 0c-4.76 4.31-12.53 16-7.67 23.54s10.57 6 16.65 0 9.38-10.1 11.13-8 5.24 12.56 11.27 13.08 9.32 3.43 12.43-10-11.85-24.86-18.45-9.32M162.52 43.23s-4.47-26.22 0-21.37 12.43 21 13.6 20.39S174 2 174 2M186.8 7.88s9.94-.32 18.29-1.32c4.64-.56 8.79-1.33 10.46-2.37M205.83 43.23l-.75-36.68M222.15 53.33s7.19-48 13.21-45.45 5.24 38.26 7 39.82-15.54-11.27-20.2-11.27 23.84-.78 23.84-.78M272.46 12.34s-13.4-4.47-16.7 10.29 7.18 21.37 10.48 20.6 6.8 1.55 11.46-7.77M282 10.79a64.39 64.39 0 0 0 11.68-.15 22.94 22.94 0 0 0 7.55-2M294.41 44.69l-.75-34.05M313.16 33s1.78 10.28 12.85 6.72 4.55-17.39 1-21S315.93.24 327.39 1s10.48 14.82 10.48 14.82"
                    className="cls-1"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </motion.div>
  )
}

export default Menu
