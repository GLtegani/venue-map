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
        "2sm": "490px",
        "2md": "876px",
        ls: "540px",
      },
      backgroundImage: {
        chronos:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/chronos.png)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
