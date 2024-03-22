import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "secondary-50": "#19182580",
        "secondary-75": "#191825BF",
        "secondary-100": "#191825FF",
        "travlog-purple": "#5850C6FF",
        "travlog-orange": "#FF5722FF",
        "travlog-dark": "#222831FF",
        "travlog-pink": "#F85E9FFF"
      }
    },
  },
  plugins: [],
};
export default config;
