import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'assamese': {
          'primary': '#FF6B35',
          'secondary': '#004E89',
          'success': '#00C853',
          'bg': '#F7F9FC',
        },
      },
      fontFamily: {
        'assamese': ['"Noto Sans Assamese"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
