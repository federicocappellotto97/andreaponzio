import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme")

export const blue = {
  100: "#40FFC9",
  200: "#4AFCFE",
  300: "#59D3C8",
  400: "#2E95B4",
  500: "#41BBAC",
  600: "#55DAFD",
  700: "#B2FEFE",
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      blue,
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        dark: "#1A1818",
      },
      transparent: "transparent",
    },
    fontSize: {
      xl: ["2.25rem", "1.2"],
      lg: ["1.5rem", "1.2"],
      base: ["1rem", "1.2"],
    },
    fontFamily: {
      sans: ["Berthold Akzidenz Grotesk BE", ...defaultTheme.fontFamily.sans],
    },
    spacing: {
      /**
       * We generate spacings with a different naming convention than Tailwind default theme.
       * Instead of using 4px intervals we generate classes in 1px intervals (converted in rem).
       *
       * Example: "p-16" means 16px (in rem) and not 64px as it would in Tailwind default theme.
       *
       * We also generate dw (design-width) spacings.
       * If the viewport width in the XD design is 1920px "p-16dw" is calculated like this (16/1920*100)vw.
       * When the viewport width is 1920px "p-16dw" will be exactly 16px but it will keep scaling smoothly based on width.
       */
      ...generateSpacings({ vw: false }),
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    {
      pattern: /bg-(blue)-(100|200|300|400|500)/,
    },
  ],
}
export default config

/**
 * The width at which the website was designed in XD.
 */
export const xdViewportWidth = 1400

/**
 * Simply calculates px to rem.
 */
function rem(value: number) {
  return `${+(value / 16).toFixed(4)}rem`
}

/**
 * Calculates the vw required to have the value remain the same at xdViewportWidth.
 */
function designToVw(value: number) {
  return `${+((value / xdViewportWidth) * 100).toFixed(5)}vw`
}

/**
 * Used to generate the spacings in Tailwind theme.
 *
 * Generates an object that looks like this:
 * @example
 * {
 *   1: '0.0625rem',
 *   2: '0.125rem',
 *  ...
 * }
 */
export function generateSpacings({ vw = false }) {
  const array = [...Array(251).keys()].map((el) => [
    vw ? `${el}dw` : el,
    vw ? designToVw(el) : rem(el),
  ])
  return Object.fromEntries(array)
}
