/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: "var(--color-bg-base)",
          secondary: "var(--color-bg-secondary)",
          input: "var(--color-bg-input)",
        },
      },
      after: {
        skin: {
          content: "var(--emoji)",
        },
      },

      backgroundImage: {
        'background-bubble': "url('/img/speech-bubble.png')",
      },

      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
         'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      textColor: {
        skin: {
          base: "var(--color-bg-base)",
          secondary: "var(--color-bg-secondary)",
          input: "var(--color-bg-input)",
          primary: "var(--color-text-primary)",
        },
      },
      scale: {
         "-100": "-1",
      },
    },
    },
    plugins: [],
};
