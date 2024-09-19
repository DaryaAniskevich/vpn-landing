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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#3177F2",
        orange: "#FF5D17",
        black: "#2B2B2B",
        gray: "#646464",
        white: "#FFFFFF",
      },
      content: {
        branch: 'url("/branch.svg")',
        star: 'url("/star.svg")'
      },
      boxShadow: {
        header: "0px 4px 16px 0px #00000024",
        card: "0px 2.09px 11.06px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
