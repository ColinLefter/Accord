/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,tsx}", // Include .tsx files in the app directory
    "./components/**/*.{html,js,tsx}", // Include .tsx files in the components directory
    "./pages/**/*.{html,js,tsx}", // Include .tsx files in the pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
