import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Enable dark mode using class toggling
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#90EE90', // Light green
        'milk': '#FDF5E6', // Milk color
        'light-brown': '#D2B48C', // Light brown
      },
    },
  },
  plugins: [],
} satisfies Config;
