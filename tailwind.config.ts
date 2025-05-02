import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // The sans key is the default font family in Tailwind
      sans: ["var(--font-inter)"],
      // Our custom font family keys
      heading: ["var(--font-space-grotesk)"],
      body: ["var(--font-inter)"],
    },
    extend: {
      colors: {
        background: "#F9FAFB",
        copy: "#111827",
        line: "#E5E7EB",
        card: "#E5E7EB",
        
        // Mode-specific accent colors
        cars: "#2563EB",
        decor: "#D4AF37",
      },
    },
  },
  plugins: [],
};

export default config;
