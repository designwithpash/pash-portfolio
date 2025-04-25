/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF881F',
      },
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
} 