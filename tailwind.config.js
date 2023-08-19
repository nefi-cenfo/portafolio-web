/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#320A28",
        secondary: "#6D263D",
        complementary: "#E0D68A"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

