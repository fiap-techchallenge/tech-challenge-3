import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gotham: ["gotham", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        darkMidnightBlue: "rgb(var(--darkMidnightBlue))",
        usafaBlue: "rgb(var(--usafaBlue))",
        mayaBlue: "rgb(var(--mayaBlue))",
        antiflashWhite: "rgb(var(--antiflashWhite))",
        celadonBlue: "rgb(var(--celadonBlue))",
        slateGray: "rgb(var(--slateGray))",
        floralWhite: "rgb(var(--floralWhite))",
        paleCerulean: "rgb(var(--paleCerulean))",
        richBlack: "rgb(var(--richBlack))",
        sunsetOrange: "rgb(var(--sunsetOrange))",
        rustyRed: "rgb(var(--rustyRed))",
        auburn: "rgb(var(--auburn))",
        deepSaffron: "rgb(var(--deepSaffron))",
        darkGunmetal: "rgb(var(--darkGunmetal))",
        argent: "rgb(var(--argent))",
        darkGray: "rgb(var(--darkGray))",
        chineseWhite: "rgb(var(--chineseWhite))",
        darkElectricBlue: "rgb(var(--darkElectricBlue))",
        forestGreen: "rgb(var(--forestGreen))",
        ripeMango: "rgb(var(--ripeMango))",
        skyBlue: "rgb(var(--skyBlue))",
      },
      screens: {
        xs: "320px",
        "2xs": "375px",
      },
    },
  },
  plugins: [],
};

export default config;
