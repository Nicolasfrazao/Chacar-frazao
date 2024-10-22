import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors : {
        navbar : {
          primary: "#69F92F",
          secondary: "#9CF978",
          text: "#000000",
        },
        button : {
          primary: "#69F92F",
          secondary: "#9CF978",
          text: "#000000",
        },
        footer : {
          primary: "#69F92F",
          secondary: "#9CF978",
          text: "#000000",
        },
        card : {
          primary: "#69F92F",
          secondary: "#9CF978",
          text: "#000000",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
