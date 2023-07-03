/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // fontFamily: {},
      colors: {
        primarycolor: "#F1F1F1",
        secondarycolor: "#FCFCFC",
        accentcolor: "#F97316",
        "accentcolor-light": "#FDBA74",
        "primarycolor-dark": "#141a1f",
        // #1F2937
        // #141a1f
        "secondarycolor-dark": "#0d1117",
        // #374151
        // #0d1117
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
