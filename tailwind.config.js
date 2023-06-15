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
      textColor: {
        skin: {
          base: 'var(--color-bg-base)',
          secondary: 'var(--color-bg-secondary)',
          input: 'var(--color-bg-input)',
        },
      },
    },
  plugins: [],
  }
}