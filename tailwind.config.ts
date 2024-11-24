import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary : {
        300 :" #C8BFF3",
        400 :" #AC9AEB",
        500 :" #8F71E1",
        600 :" #7E53D4",
        700 : "#6F42C1",

       }
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)", "cursive"],
        manrope: ["var(--font-Manrope)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
