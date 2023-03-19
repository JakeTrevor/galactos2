/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        the_theme: {
          primary: "#1C4E80",
          secondary: "#6A9BCC",
          accent: "#6D2E46",
          neutral: "#23282E",
          "base-100": "#202020",
          info: "#9883E5",
          success: "#6BB187",
          warning: "#ECA400",
          error: "#FF220C",
        },
      },
    ],
  },
};
