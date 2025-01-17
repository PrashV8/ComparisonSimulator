import type { Config } from "tailwindcss";

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
