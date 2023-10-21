/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans'],
      },
      paddingLeft: {
        paddingL:['30rem']
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}