export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Jura", "sans-serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(110%)" },
          "100%": { transform: "translateX(-110%)" },
        },
      },
    },
  },
  plugins: [],
};
