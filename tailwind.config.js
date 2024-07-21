/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
