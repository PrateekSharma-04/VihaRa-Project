/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      colors: {
        primary: "#1E3A2F",   // replace with your actual brand color
      },
    },
  },
  plugins: [],
};