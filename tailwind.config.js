/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "800px",
      lg: "1100px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        "bg-black": "#121212",
      },
      backgroundImage: {
        "obes-bg": "url('./src/assets/OBESBG.png')",
        "judge-bg": "url('./src/assets/JudgeBG.png')",
        "qcu-bg": "url('./src/assets/QCUBG.png')",
      },
    },
  },
  plugins: [],
};
