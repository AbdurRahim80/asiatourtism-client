/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#EBF4F6",
        textColor: "#071952"
      }
    },
  },
  plugins: [require('daisyui')],
}

