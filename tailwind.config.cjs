/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        }
      },
      // fontFamily: {},
      colors: {
        primarycolor: "#F1F1F1",
        secondarycolor: "#FCFCFC",
        accentcolor: "#F97316",
        "accentcolor-light": "#FDBA74",
        "primarycolor-dark": "#151515",
        // #151515
        // #1F2937
        // #141a1f
        // #262626
        // #202124
        "secondarycolor-dark": "#2B2B2B",
        // #0D1117
        // #374151
        // #0d1117
        // #1e1e1e
        "accentcolor-alt": "#00FF00",
        bordercolor: "black",
        "bordercolor-dark": "black",
      },
      animation: {
        "react-logo-spin": "spin infinite 20s linear",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
