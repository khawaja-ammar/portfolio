/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        text: ['"Source Sans 3"', '"sans-serif"'],
        code: ["Fira Code, monospace", { fontVariationSettings: "" }],
      },
      colors: {
        primarycolor: "#F1F1F1",
        "primarycolor-dark": "#151515",
        secondarycolor: "#FCFCFC",
        "secondarycolor-dark": "#2B2B2B",
        accentcolor: "#F97316",
        "accentcolor-light": "#FDBA74",
        "accentcolor-alt": "#00FF00",
        bordercolor: "black",
        "bordercolor-dark": "black",
      },
      animation: {
        "react-logo-spin": "spin infinite 20s linear",
      },
    },
  },
  plugins: [],
};
