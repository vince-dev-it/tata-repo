/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Inter"],
      },
      colors: {
        "bg-black": "#121212",
      },
      backgroundImage: {
        "obes-bg": "url('./src/assets/OBESBG.png')",
        "judge-bg": "url('./src/assets/JudgeBG.png')",
        "qcu-bg": "url('./src/assets/QCUBG.png')",
      },
      animation: {
        "fade-down": "fadeDown 0.5s",
        "fade-up": "fadeUp 0.5s",
      },
      keyframes: {
        fadeDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
