/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        bounceUpOnce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }, // 👈 lifts up
          "100%": { transform: "translateY(0)" },   // 👈 back down
        },
      },
      animation: {
        bounceUpOnce: "bounceUpOnce 0.6s ease-out 1", // 👈 plays ONCE only
      },

    },
  },
  plugins: [],
};
