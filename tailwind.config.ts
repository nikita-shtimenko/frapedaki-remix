import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Heebo", ...defaultTheme.fontFamily.sans],
        greek: ["Greek"],
      },
    },
  },
  plugins: [],
} satisfies Config;
