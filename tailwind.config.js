/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Pure Black
        surface: "#121212", // Dark Gray
        primary: "#3B82F6", // Scale100M Blue (Vibrant)
        secondary: "#18181b", // Zinc 900
        "text-primary": "#f3f4f6", // Off-white (Gray 100)
        "text-secondary": "#9ca3af", // Gray 400
        "text-accent": "#FF4444",
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "sans-serif"],
        heading: ["Satoshi", "sans-serif"],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'pill': '50px',
      },
      animation: {
        bounceUpOnce: "bounceUpOnce 0.6s ease-out 1",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
        bounceUpOnce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
