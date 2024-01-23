/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink_light: "#F4A4A4",
        blue_color: "#9AA4EC",
      },
      boxShadow: {
        "my-s": "-10px 10px 8px 3px rgb(165 180 252)",
        "header-s": "0 10px 10px #9e9eee",
      },
    },
  },
  plugins: [],
};
