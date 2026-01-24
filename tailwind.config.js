/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // White
        surface: "#f9fafb", // Very light gray (gray-50)
        primary: "#3B82F6", // Scale100M Blue (Vibrant)
        secondary: "#f3f4f6", // Light gray for cards (gray-100)
        "text-primary": "#111827", // Dark gray/black (gray-900)
        "text-secondary": "#4b5563", // Medium gray (gray-600)
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
