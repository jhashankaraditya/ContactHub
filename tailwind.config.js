/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#f20717",
        "light-blue": "#1b70c4"
      }
    },
  },
  plugins: [],
}