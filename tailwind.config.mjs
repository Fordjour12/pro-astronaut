import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        background: "#111111",
        accent: "#fffff",
      },
    },
  },
  plugins: [],
};
