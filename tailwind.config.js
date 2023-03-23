/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary_button': '#FF0000',
        'secondary_button': '#B20000',
        'navbar_dark': '#131313',
        'footer_dark': '#131313',
        'background_dark': '#000000',
        'background_light': '#f5f5f5d9'
      },
    },
  },
  plugins: [],
}
