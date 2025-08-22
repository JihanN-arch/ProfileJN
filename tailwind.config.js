/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
