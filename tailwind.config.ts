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
        primary: "#b87a34",
        secondary: "#3c78b4",
        "background-primary": "#242423",
        "background-secondary": "#353637",
        "primary-text": "#c8bb9d",
        "dark-blue": "#212A31",
        "deep-grayish-blue": "#2F3843",
        "teal-blue": "#124E66",
        "muted-blue-gray": "#748D92",
        "soft-gray": "#D3D9D4",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
