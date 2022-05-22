module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      lob: ["Lobster", "cursive"],
      ubu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ed7966",

          secondary: "#f5cac2",

          accent: "#fae5df",

          neutral: "#303179",

          "base-100": "#FFFFFF",

          info: "#141850",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
