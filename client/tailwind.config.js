/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    colors: {
      transparent: "transparent",
      coralPink: "#FF6B6B",
      mustardYellow: "#F9C74F ",
      turquoise: "#70C1B3 ",
      white: "#ffffff",
      lightGray: "#F0F0F0 ",
      charcoal: "#333333",
      red: "#dc2626",
    },
  },

  plugins: [],
};
