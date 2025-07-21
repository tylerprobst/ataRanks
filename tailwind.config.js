/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(206,18,29)', // Updated logo red
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary-from': 'rgba(206,18,29,0.15)',
        'primary-to': 'rgba(206,18,29,0.0)',
      }),
    },
  },
  plugins: [],
};
