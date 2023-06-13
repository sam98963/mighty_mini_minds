/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          secondary: 'var(--color-bg-secondary)',
          input: 'var(--color-bg-input)',
        },
    },
      dropShadow: {
        'input': '0 0 2px rgba(0, 0, 0, 0.3)'
      },
  },
  plugins: [],
 }
}
