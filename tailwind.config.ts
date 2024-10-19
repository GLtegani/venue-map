import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "3sm": "320px",
        "2.5sm": "465px",
        "2sm": "490px",
        "1sm": "590px",
        "2md": "876px",
        "1md": "740px",
        ls: "540px",
      },
      backgroundImage: {
        chronos:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(/chronos.png)",
        chronosPonte:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(/ponte-metalica-chronos.png)",
      },
      width: {
        "11.5/12": "95%",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
