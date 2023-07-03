const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        bdark: "#272727",
      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        gro: ["Space Grotesk", "sans-serif"],
        rubik:["Rubik","sans-serif"]
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  corePlugins: {
    // preflight: false,
  },
};
