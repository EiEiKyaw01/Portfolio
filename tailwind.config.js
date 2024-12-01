/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
