import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: {
        100: "#40FFC9",
        200: "#4AFCFE",
        300: "#59D3C8",
        400: "#2E95B4",
        500: "#41BBAC",
        600: "#55DAFD",
        700: "#B2FEFE",
      },
      black: "#000000",
      white: "#FFFFFF",
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
    extend: {},
  },
  plugins: [],
}
export default config
