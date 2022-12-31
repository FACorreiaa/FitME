/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    /* eslint-disable */

    require("tailwind-dracula")("dracula"),
  ],
};
