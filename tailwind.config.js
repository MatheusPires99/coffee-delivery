/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "yellow-light": "#F1E9C9",
      yellow: "#DBAC2C",
      "yellow-dark": "#C47F17",

      "purple-light": "#EBE5F9",
      purple: "#8047F8",
      "purple-dark": "#4B2995",

      "accent-background": "#FAFAFA",
      "accent-card": "#F3F2F2",
      "accent-input": "#EDEDED",
      "accent-button": "#E6E5E5",
      "accent-button-hover": "#D7D5D5",
      "accent-label": "#8D8686",
      "accent-text": "#574F4D",
      "accent-subtitle": "#403937",
      "accent-title": "#272221",

      white: "#fff",
    },
    fontFamily: {
      heading: "'Baloo 2', cursive",
      body: "'Roboto', sans-serif",
    },
    extend: {
      backgroundImage: {
        "hero-background": "url(/public/hero-background.png)",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
