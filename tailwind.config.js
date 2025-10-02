/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      // fontFamily: {
      //   // sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // default sans override
      //   // poppins: ['Poppins', 'sans-serif'], // custom class
      //   nato: ['Noto Sans Bengali', 'sans-serif'], // custom class
      // },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

