/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#111111",
        primary: "#E60000", // Vibrant Red
        secondary: "#1A1A1A", // Dark Slate/Navyish for cards
        "text-primary": "#F0F0F0",
        "text-secondary": "#A0A0A0",
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
      keyframes: {
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
      animation: {
        bounceUpOnce: "bounceUpOnce 0.6s ease-out 1",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
