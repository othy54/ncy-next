import type { Config } from "tailwindcss";
const { addDynamicIconSelectors } = require('@iconify/tailwind');


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // cocogoose: ["CocogoosePro-Regular", "sans-serif"],
      // "cocogoose-italic": ["CocogoosePro-Italic", "sans-serif"],
      // "cocogoose-thin": ["CocogoosePro-Thin", "sans-serif"],
      // "cocogoose-ultra-light": ["CocogoosePro-Ultralight", "sans-serif"],
      // "cocogoose-light": ["CocogoosePro-Light", "sans-serif"],
      // "cocogoose-light-italic": ["CocogoosePro-LightItalic", "sans-serif"],
      // "cocogoose-semi-light": ["CocogoosePro-Semilight", "sans-serif"],
      "cocogoose-darkmode": ["var(--cocogoose-darkmode)", "sans-serif"],
      // "cocogoose-bold": ["CocogoosePro-Bold", "sans-serif"],
      // "cocogoose-block": ["CocogooseProBlock-BlockBorder", "sans-serif"],
      // "cocogoose-bold-italic": ["CocogoosePro-BoldItalic", "sans-serif"],
      // "cocogoose-text": ["CocogooseProText-Regular", "sans-serif"],
      // "cocogoose-text-bold": ["CocogooseProText-Bold", "sans-serif"],
      // "cocogoose-text-bold-italic": [
      //   "CocogooseProText-BoldItalic",
      //   "sans-serif",
      // ],
      // "cocogoose-var": ["CocogooseProVariable", "sans-serif"],
    },
    extend: {
      colors: {
        orangency: "var(--color-orangency)",
        // greenncy: "#13362D",
        // salmonncy: "#FDE3D7",
        whitency: "var(--color-whitency)",
        // greendark: "#004646",
        // greenlight: "#F6FFD0",
        // bluedark: "#2A47E9",
        // bluelight: "#CDF5F2",
        // pinkdark: "#992277",
        // pinklight: "#FFE1F3",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors({
      scale: 0
    }),

  ],
};
export default config;
