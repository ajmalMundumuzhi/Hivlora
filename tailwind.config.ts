import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
      },
    },
  },

  plugins: [],
};

export default config;